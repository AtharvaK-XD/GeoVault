document.addEventListener("DOMContentLoaded", () => {
    // === 1. Starfield Background Generation ===
    const starfield = document.getElementById('starfield');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2;
        star.style.position = 'absolute';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = 'white';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite alternate`;
        starfield.appendChild(star);
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 5px white; }
        }
    `;
    document.head.appendChild(style);

    // === 2. Ticker Tape Population ===
    const tickerTape = document.getElementById('ticker-tape');
    let tickerContent = '';
    // Duplicate for seamless loop
    const tickerItems = [...countriesData, ...countriesData];
    tickerItems.forEach(country => {
        tickerContent += `<div class="ticker-item">${country.flag} ${country.name.toUpperCase()} <span>$${formatPrice(country.price)}</span></div>`;
    });
    tickerTape.innerHTML = tickerContent;

    // === 3. State & Global Variables ===
    let currentFilter = 'All';
    let searchQuery = '';
    let cart = JSON.parse(localStorage.getItem('geovault_cart')) || [];

    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get('search')) {
        searchQuery = urlParams.get('search');
    }

    const grid = document.getElementById('country-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    if(searchInput && searchQuery) searchInput.value = searchQuery;

    // === 4. Render Grid with Staggered Animations ===
    function renderGrid() {
        grid.innerHTML = '';
        const filteredData = countriesData.filter(c => {
            const matchesFilter = currentFilter === 'All' || c.continent === currentFilter;
            const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        filteredData.forEach((country, index) => {
            const inCart = cart.some(item => item.id === country.id);
            const card = document.createElement('div');
            card.className = 'country-card';
            card.innerHTML = `
                <div class="card-header">
                    <div class="card-title-group">
                        <span class="flag">${country.flag}</span>
                        <span class="country-name">${country.name}</span>
                    </div>
                    ${country.isHot ? '<span class="hot-tag">HOT</span>' : ''}
                </div>
                <div class="card-stats">
                    <div class="stat-row"><span class="stat-name">Capital:</span> <span>${country.capital}</span></div>
                    <div class="stat-row"><span class="stat-name">Population:</span> <span>${country.population}</span></div>
                    <div class="stat-row"><span class="stat-name">GDP:</span> <span>${country.gdp}</span></div>
                    <div class="stat-row"><span class="stat-name">Area:</span> <span>${country.area}</span></div>
                </div>
                <div class="card-footer">
                    <div class="price">$${formatPriceShort(country.price)}</div>
                    <button class="add-btn" data-id="${country.id}" ${inCart ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                        ${inCart ? 'ACQUIRED' : 'ACQUIRE'}
                    </button>
                </div>
            `;
            grid.appendChild(card);

            // Staggered entrance
            setTimeout(() => {
                card.classList.add('show');
            }, 50 * index);
        });

        // Add Event Listeners to Buttons
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(!btn.disabled) handleAddToCart(e.target.dataset.id);
            });
        });
    }

    // === 5. Filtering & Search ===
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderGrid();
        });
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderGrid();
    });

    // === 6. Cart Management ===
    const cartBtn = document.getElementById('open-cart-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountSpan = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');

    cartBtn.addEventListener('click', () => cartOverlay.classList.add('active'));
    closeCartBtn.addEventListener('click', () => cartOverlay.classList.remove('active'));
    cartOverlay.addEventListener('click', (e) => {
        if(e.target === cartOverlay) cartOverlay.classList.remove('active');
    });

    function handleAddToCart(id) {
        const country = countriesData.find(c => c.id === id);
        if(!country) return;
        
        cart.push(country);
        localStorage.setItem('geovault_cart', JSON.stringify(cart));
        updateCart();
        renderGrid(); // update button state
        showToast(`${country.name} added to cart!`, 'add');
    }

    function handleRemoveFromCart(id) {
        const country = countriesData.find(c => c.id === id);
        cart = cart.filter(c => c.id !== id);
        localStorage.setItem('geovault_cart', JSON.stringify(cart));
        updateCart();
        if(typeof renderGrid !== 'undefined' && grid) renderGrid();
        showToast(`${country.name} removed.`, 'remove');
    }

    function updateCart() {
        if(!cartCountSpan || !cartItemsContainer || !cartTotalPrice) return;
        cartCountSpan.innerText = cart.length;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart">No assets selected.</div>';
            cartTotalPrice.innerText = '0';
            return;
        }

        let total = 0;
        let html = '';
        cart.forEach(item => {
            total += item.price;
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <span class="flag">${item.flag}</span>
                        <div>
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${formatPriceShort(item.price)}</div>
                        </div>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">&times;</button>
                </div>
            `;
        });
        
        cartItemsContainer.innerHTML = html;
        cartTotalPrice.innerText = formatPrice(total);

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                handleRemoveFromCart(e.target.dataset.id);
            });
        });
    }

    // === 7. Toast Notifications ===
    function showToast(message, type) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type === 'remove' ? 'remove' : ''}`;
        toast.innerText = message;
        
        container.appendChild(toast);
        
        // Remove from DOM after animation
        setTimeout(() => {
            if(toast.parentElement) toast.remove();
        }, 3000);
    }

    // === 8. Scroll Counters Animation ===
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                animateCounter(entry.target, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    function animateCounter(el, target, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            el.innerText = Math.floor(progress * target);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                el.innerText = target;
            }
        };
        window.requestAnimationFrame(step);
    }

    // === 9. Mobile Menu Toggle ===
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // === Utility Functions ===
    function formatPrice(num) {
        return num.toLocaleString();
    }

    function formatPriceShort(num) {
        if(num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
        if(num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
        return num.toLocaleString();
    }

    // Initialize
    if (grid) renderGrid();
    updateCart();
});
