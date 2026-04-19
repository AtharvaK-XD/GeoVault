document.addEventListener("DOMContentLoaded", () => {
    // === WebGL Globe Initialization ===
    const globeViz = document.getElementById('globeViz');
    if (globeViz && typeof Globe !== 'undefined') {
        const globe = Globe()
            (globeViz)
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
            .backgroundColor('rgba(0,0,0,0)')
            .showAtmosphere(true)
            .atmosphereColor('lightskyblue')
            .atmosphereAltitude(0.15)
            .polygonAltitude(0.01)
            .polygonSideColor(() => 'rgba(0, 0, 0, 0.2)')
            .polygonStrokeColor(() => '#0ff')
            .polygonLabel(({ properties: d }) => `
                <div class="globe-tooltip glass-panel">
                    <b>${d.ADMIN}</b>
                </div>
            `)
            .onPolygonHover(hoverD => globe
                .polygonAltitude(d => d === hoverD ? 0.06 : 0.01)
                .polygonCapColor(d => {
                    const name = d.properties.ADMIN.toLowerCase();
                    const inMarket = typeof countriesData !== 'undefined' && countriesData.find(c => c.name.toLowerCase() === name || (d.properties.NAME && c.name.toLowerCase() === d.properties.NAME.toLowerCase()));
                    if (d === hoverD) return 'rgba(255, 215, 0, 0.8)';
                    if (inMarket) return 'rgba(0, 255, 255, 0.4)';
                    return 'rgba(200, 200, 200, 0.1)';
                })
            )
            .onPolygonClick(({ properties: d }) => {
                const name = d.ADMIN.toLowerCase();
                const marketCountry = typeof countriesData !== 'undefined' && countriesData.find(c => c.name.toLowerCase() === name || (d.NAME && c.name.toLowerCase() === d.NAME.toLowerCase()));
                if (marketCountry) {
                    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
                        if(typeof showToast !== 'undefined') showToast(`${marketCountry.name} selected!`, '');
                        if(typeof searchInput !== 'undefined') {
                            searchQuery = marketCountry.name;
                            searchInput.value = marketCountry.name;
                            currentFilter = 'All'; 
                            if(typeof filterBtns !== 'undefined') {
                                filterBtns.forEach(b => b.classList.remove('active'));
                                filterBtns[0].classList.add('active'); 
                            }
                            if(typeof renderGrid !== 'undefined') renderGrid();
                            document.getElementById('country-grid').scrollIntoView({ behavior: 'smooth' });
                        }
                    } else {
                        // Redirect to marketplace and search for country
                        window.location.href = `index.html?search=${encodeURIComponent(marketCountry.name)}`;
                    }

                } else {
                    if(typeof showToast !== 'undefined') showToast(`${d.ADMIN} is not available on GeoVault.`, 'remove');
                }
            });

        fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(countries => {
                globe.polygonsData(countries.features)
                    .polygonCapColor(d => {
                        const name = d.properties.ADMIN.toLowerCase();
                        const inMarket = typeof countriesData !== 'undefined' && countriesData.find(c => c.name.toLowerCase() === name || (d.properties.NAME && c.name.toLowerCase() === d.properties.NAME.toLowerCase()));
                        return inMarket ? 'rgba(0, 255, 255, 0.4)' : 'rgba(200, 200, 200, 0.1)';
                    });
            })
            .catch(err => console.error("Could not fetch boundaries", err));

        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 1.0;

        // Keep globe responsive
        window.addEventListener('resize', () => {
            globe.width(window.innerWidth);
            globe.height(window.innerHeight);
        });
        // Initial setup for safe sizing
        globe.width(window.innerWidth);
        globe.height(window.innerHeight);
    }
});
