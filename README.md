# 🌍 GeoVault — Own The World

> The premier orbital marketplace for sovereign acquisitions.

[![GeoVault Demo](https://img.youtube.com/vi/VrfEgIftLtA/maxresdefault.jpg)](https://youtu.be/VrfEgIftLtA?si=QwKQGIgOVz_rQbwH)

▶️ **[Watch Demo on YouTube](https://youtu.be/VrfEgIftLtA?si=QwKQGIgOVz_rQbwH)** &nbsp;|&nbsp; 🚀 **[Live Site](https://geovault.netlify.app/)**

---

## 🪐 About GeoVault

GeoVault is a **fictional, futuristic web app** where users can "buy" entire countries like items in an online store. It's designed as a creative front-end portfolio project that blends immersive sci-fi aesthetics with real web technologies.

The interface feels like a sovereign acquisition terminal from 2087 — complete with a live 3D globe, a dynamic country marketplace, investment portfolio tracking, and a fully functional cart system. Every interaction is designed to make you feel like you're operating from a geopolitical command center orbiting Earth.

There is no backend, no real transactions, and no actual countries for sale. This is purely a demonstration of what modern front-end development can achieve with creative direction and the right tools.

---

## ✨ Features

- 🛒 **Country Marketplace** — Browse and filter nations by region, price, and availability; add them to your cart in one click
- 🌐 **Interactive 3D Globe** — A real-time WebGL globe with topographical terrain, ocean shading, and atmospheric cloud layers
- 💼 **Portfolio Page** — Track all your "acquired" nations, displayed like an investment dashboard
- 🧾 **Shopping Cart** — Full cart system with per-item pricing, total value calculation, and an "initiate transfer" checkout flow
- 🎨 **Sci-Fi UI** — Deep space color palette, glowing accents, monospace typography, and smooth transitions throughout
- 📱 **Responsive Design** — Works across desktop and mobile viewports

---

## 🛠️ Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Sci-fi theming, animations, responsive layout |
| **Vanilla JavaScript** | DOM manipulation, cart logic, filtering, interactions |
| **WebGL** | 3D globe rendering with real topographical and ocean data |
| **Netlify** | Continuous deployment and global CDN hosting |

> No frameworks. No build tools. No dependencies. Pure HTML/CSS/JS — intentionally keeping it lightweight and framework-free.

---

## 📁 Pages

| Page | Description |
|------|-------------|
| `/` | Marketplace — browse and filter all available countries |
| `/portfolio` | Portfolio — view your acquired nations as investments |
| `/about` | About — the GeoVault concept and lore |

---

## 🚀 Getting Started

### Prerequisites

No package manager or build step required. Just Git and a browser.

```bash
# Verify Git is installed
git --version
```

### Clone & Run

```bash
# 1. Clone the repository
git clone https://github.com/AtharvaK-XD/geovault.git

# 2. Move into the project folder
cd geovault

# 3. Start a local server (recommended for WebGL)
python -m http.server 8000

# Then open: http://localhost:8000
```

**Alternative local server options:**

```bash
# Using Node.js
npx serve .
# Open: http://localhost:3000

# Using VS Code
# Right-click index.html → "Open with Live Server"
```

> ⚠️ Opening `index.html` directly as a file (`file://`) may cause WebGL issues. A local HTTP server is recommended.

---

## 📦 Deployment

### Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Authenticate
netlify login

# Deploy to production
netlify deploy --prod --dir .
```

### Netlify Dashboard (No CLI)

1. Fork this repo on GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your fork
4. Set **publish directory** to `.` (root) — leave build command empty
5. Click **Deploy**

### GitHub Pages (Alternative)

```bash
# Push to GitHub, then:
# Settings → Pages → Source: main branch → / (root) → Save
```

---

## 🤝 Contributing

```bash
# Fork the repo, then:
git clone https://github.com/YOUR_USERNAME/geovault.git
cd geovault

git checkout -b feature/your-feature-name

# Make changes, then:
git add .
git commit -m "feat: your change description"
git push origin feature/your-feature-name

# Open a Pull Request on GitHub
```
