# 🌍 GeoVault — Own The World

> The premier orbital marketplace for sovereign acquisitions.

GeoVault is a fictional, futuristic web app where users can "buy" entire countries like an online store. Built with a sleek sci-fi aesthetic, an interactive 3D globe, and a full cart system — it's a creative front-end project that pushes the limits of modern web design.

🚀 **Live Demo:** [geovault.netlify.app](https://geovault.netlify.app/)

---

## ✨ Features

- 🛒 **Country Marketplace** — Browse and "purchase" nations filtered by region
- 🌐 **Interactive 3D Globe** — A live WebGL globe with real topographical data, oceans, and cloud layers
- 💼 **Portfolio Page** — Track your acquired nations like investments
- 🧾 **Shopping Cart** — Add countries, see total value, and "initiate transfer"
- 🎨 **Sci-Fi UI** — Dark, minimal, futuristic design aesthetic

---

## 🛠️ Built With

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

- **HTML / CSS / JavaScript** — Core structure, styling, and interactivity
- **WebGL** — 3D globe rendering with topographical data, oceans, and cloud layers
- **Netlify** — Continuous deployment and hosting

---

## 📁 Pages

| Page | Description |
|------|-------------|
| `/` | Marketplace — browse available countries |
| `/portfolio` | View your acquired nations |
| `/about` | Learn about the GeoVault concept |

---

## 🚀 Getting Started

### Prerequisites

No build tools or package managers required. GeoVault is pure HTML/CSS/JS and runs directly in any modern browser.

```bash
# Ensure you have Git installed
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/AtharvaK-XD/geovault.git
```

### 2. Navigate into the Project

```bash
cd geovault
```

### 3. Run Locally

**Option A — Open directly in browser (simplest):**

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

**Option B — Use a local dev server (recommended for WebGL):**

```bash
# Using Python (pre-installed on most systems)
python -m http.server 8000
# Then open http://localhost:8000 in your browser

# Using Node.js (if installed)
npx serve .
# Then open http://localhost:3000

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

> ⚠️ WebGL features work best when served over HTTP rather than opened as a local file. Use a local server for the full experience.

---

## 📦 Deployment

GeoVault is deployed on Netlify. To deploy your own fork:

### Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Initialize and deploy
netlify init

# Deploy to production
netlify deploy --prod
```

### Deploy via Netlify Dashboard

1. Fork this repository on GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Connect your GitHub account and select the forked repo
4. Set build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` (root)
5. Click **Deploy site**

### Deploy via GitHub Pages (Alternative)

```bash
# Push to GitHub, then enable GitHub Pages:
# Settings → Pages → Source: Deploy from a branch → Branch: main → / (root)
```

---

## 🗂️ Project Structure

```
geovault/
├── index.html          # Marketplace page
├── portfolio.html      # Portfolio / acquired nations
├── about.html          # About page
├── style.css           # Global styles (sci-fi theme)
├── script.js           # Main JS — cart, filtering, interactions
├── globe.js            # WebGL 3D globe rendering
├── data/
│   └── countries.js    # Country data (name, price, region, etc.)
└── assets/
    └── ...             # Icons, textures, images
```

---

## 🔧 Customization

### Adding or Editing Countries

Open `data/countries.js` and add/modify entries:

```javascript
{
  name: "Your Country",
  region: "Asia",
  price: 4200000000000,   // Price in USD
  gdp: "4.2T",
  population: "1.4B",
  flag: "🏳️"
}
```

### Changing the Theme

All color variables are in `style.css`:

```css
:root {
  --primary: #00f5ff;      /* Cyan accent */
  --bg-dark: #050a14;      /* Deep space background */
  --card-bg: #0d1b2a;      /* Card background */
  --text-dim: #8892a4;     /* Muted text */
}
```

---

## 🤝 Contributing

Contributions, ideas, and forks are welcome!

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/geovault.git
cd geovault

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes, then stage and commit
git add .
git commit -m "feat: describe your change"

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Open a Pull Request on GitHub
```

---

## 📌 Disclaimer

GeoVault is a **fictional concept project**. No countries are actually for sale. This is purely a creative and technical portfolio piece built for learning and demonstration purposes.

---

## 📄 License

This project is open and free for inspiration. Feel free to explore the code and build on the idea.

---

<div align="center">
  <p>Built with ☕ and a dream of world domination by <a href="https://github.com/AtharvaK-XD">@AtharvaK-XD</a></p>
</div>
