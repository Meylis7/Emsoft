# Emsoft - Custom Web Systems Development

This repository contains the source code for the **Emsoft** landing page. Emsoft is a Minnesota-based development team specializing in building custom web systems, including CRM systems, SaaS platforms, eCommerce solutions, and AI-powered systems.

## 🚀 Project Overview

The website is a responsive, single-page landing site designed to showcase Emsoft's services, portfolio, technologies, and contact information.

### Key Sections:
-   **Header:** Navigation and quick contact links.
-   **Hero:** Main value proposition and call to action.
-   **Latest from Work:** Portfolio showcase.
-   **Services:** Detailed list of services offered.
-   **Technologies:** Tech stack highlights.
-   **About Us:** Company information.
-   **Reviews:** Client testimonials.
-   **Contact:** Contact form and information.

## 🛠️ Tech Stack

-   **HTML5:** Semantic markup for structure.
-   **Tailwind CSS (v4):** Utility-first CSS framework for styling.
-   **JavaScript (Vanilla):** Interactive elements and behavior.
-   **Swiper:** Modern mobile touch slider (via CDN).
-   **Google Fonts:** Inter font family.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   npm (comes with Node.js)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Emsoft
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## 💻 Development

To start development and watch for CSS changes:

1.  **Run the development script:**
    ```bash
    npm run dev
    ```
    This command runs Tailwind CSS in watch mode, compiling `assets/css/main.css` to `output.css` whenever you make changes.

2.  **Open the site:**
    Open `index.html` in your browser. You can use a local server like Live Server (VS Code extension) or `http-server` for a better experience.

## 🏗️ Building for Production

To build the CSS for production (minified):

```bash
npm run build
```

This will generate an optimized `output.css` file ready for deployment.

## 📂 Project Structure

```
Emsoft/
├── assets/
│   ├── css/
│   │   └── main.css       # Input CSS file for Tailwind
│   ├── fonts/             # Local font files (Inter)
│   ├── images/            # Project images
│   └── js/
│       └── main.js        # Main JavaScript file
├── index.html             # Main HTML file
├── output.css             # Generated CSS file (do not edit directly)
├── package.json           # Project configuration and scripts
└── README.md              # Project documentation
```

## 📝 License

This project is licensed under the ISC License.
