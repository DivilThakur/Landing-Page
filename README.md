# 🚀 DataX Solutions Landing Page

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_Tailwind_|_Framer_Motion-blue)

A modern, high-performance, and fully responsive landing page built for a data solutions agency. This project features complex UI layouts, staggered animations, and optimized asset handling, deployed on Vercel.

## 🔗 Live Demo

**View the live site here:** 👉 **[https://landing-page-git-main-divil-thakurs-projects.vercel.app/)**

---

## ✨ Key Features

* **📱 Fully Responsive:** Optimized for Mobile, Tablet (iPad), and Desktop screens with custom breakpoints.
* **🎨 Modern UI/UX:** Features overlapping elements, negative margins, and a distinct "X" background pattern layout.
* **⚡ Smooth Animations:** Powered by **Framer Motion** for entrance effects, scroll reveals, and hover interactions.
* **📂 Data-Driven Components:** Content (Clients, Tech Stack, Case Studies) is managed via a separate `data.js` file for easy updates.
* **👆 Interactivity:** Includes a custom mobile navigation menu and a "Scroll to Top" button that appears dynamically.
* **🚀 Optimized Assets:** All images are imported through the build pipeline to ensure correct loading in production environments.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React (Vite)** | Frontend Framework & Build Tool |
| **Tailwind CSS** | Utility-first Styling |
| **Framer Motion** | Animation Library |
| **JavaScript (ES6+)** | Logic & Functionality |
| **Vercel** | Deployment & Hosting |

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── images/       # All static assets (imported in components)
├── components/
│   ├── Hero.jsx      # Main entry section with animations
│   ├── Navbar.jsx    # Responsive navigation with absolute centering
│   ├── About.jsx     # Overlapping layout section
│   ├── ContactFooter.jsx # Footer with broad background pattern
│   ├── ...           # Other sections (Solutions, Clients, etc.)
├── data/
│   └── data.js       # Centralized data arrays for easy content management
├── App.jsx           # Main layout wrapper & Scroll-to-top logic
└── main.jsx          # Entry point
