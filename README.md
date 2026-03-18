# Vanture

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?logo=firebase)
![Vite](https://img.shields.io/badge/Vite-Build-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

A modern **van rental platform** where users can browse vans and hosts can manage their listings and track income.

Built with **React, React Router, Firebase and Recharts**.

---

## Live Demo

https://vanture-d8530.web.app

---

## Features

* Browse and filter available vans
* View detailed van listings with complete information
* Host dashboard for managing van listings
* Income analytics dashboard with visual charts
* Authentication system for host access
* Protected host routes implemented with nested layouts
* Demo login option for quick access to host features


---

## Implementation Highlights

The application is built using modern React and React Router patterns to create a scalable frontend architecture.

* **React Hooks** are used extensively to manage component state, side effects and memoized computations.
* **React Router Data APIs** such as **loaders** and **actions** are used to handle data fetching and form submissions in a declarative way.
* Implemented **nested routes and layout routes** to structure the application and avoid UI duplication.
* Added **protected routes** to restrict access to host-specific pages for authenticated users.
* Implemented **search filtering and query string management** to maintain UI state through the URL and support modern navigation patterns.
* Applied **accessibility best practices** such as semantic HTML, proper labels and keyboard-friendly interactions to improve usability.

---

## Tech Stack

**Frontend**

* React
* React Router
* Tailwind CSS
* Recharts
* Vite

**Backend / Services**

* Firebase Firestore
* Firebase Hosting

---

## Project Scope

Vanture is primarily a **frontend-focused project** built to practice building a production-style React application with routing, authentication, protected pages and data visualization.

The backend layer is intentionally minimal and only supports the frontend functionality required for the application to work.

---

## Development Approach

### Initial Development with Mock API

The project was initially developed using **json-server** to simulate a REST API.
This allowed the frontend architecture (routing, UI flows, data loading, and state management) to be developed quickly without needing a real backend.

Using a mock API helped focus on building:

* page structure and navigation
* reusable UI components
* React Router loaders and actions
* application state and data flow

---

### Backend Choice – Firebase

Once the frontend architecture was stable, **Firebase Firestore** was introduced to replace the mock API.

Firebase was chosen because it provides:

* **managed NoSQL database** for storing van data and transactions
* **authentication support** for login functionality
* **simple integration with frontend applications**
* **fast deployment with Firebase Hosting**

This allowed the project to behave like a real application while keeping the backend setup minimal.

---

### Styling Approach – Tailwind CSS

The project uses **Tailwind CSS** for styling.

Tailwind was chosen because it:

* encourages **consistent design systems**
* speeds up UI development with utility classes
* reduces the need for large CSS files
* integrates well with component-based architectures like React

---

### Image Storage

Van images are stored using **GitHub Pages static hosting**.

The images are served from a public repository and referenced directly in the application.
This approach keeps the project lightweight and avoids the need for additional storage services while still allowing images to be loaded from a CDN-like static source.

---

### Key Takeway

This workflow allowed the project to remain **frontend-centric while still simulating a realistic production environment**.

---

## Project Structure

```
Vanture
├─ public
└─ src
   ├─ api
   ├─ assets
   ├─ components
   ├─ firebase
   ├─ layout
   ├─ pages
   ├─ router
   ├─ utils
   ├─ App.jsx
   ├─ index.css
   └─ main.js
```

## Installation

Clone the repository

```bash
git clone https://github.com/Tejasgaware17/Vanture.git
cd Vanture
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file using `.env.example` as a reference.

---

## Build

Create production build

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---
