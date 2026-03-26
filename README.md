# Todo App

## Overview

**Todo App** is a simple task management application created to demonstrate fundamental frontend concepts and good user experience practices.

The application allows users to create, view, and delete tasks, helping with basic organization and productivity in day-to-day activities.

Although it does not use a real backend, the project simulates API behavior using **asynchronous functions**, including loading states during actions like task deletion. This provides a more realistic user experience, similar to real-world applications that depend on external services.

Additionally, the project includes a second screen that showcases the **UI components used throughout the application**, making it useful as a reference for component structure and reuse.

This project was built as a **beginner-friendly application**, focusing on clean structure, usability, and frontend fundamentals.

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* React Router
* Class Variance Authority
* Local Storage (via use-local-storage-state)

---

# Features

* Create and delete tasks
* Persistent data using **localStorage**
* Simulated API calls using **async functions**
* Loading states for actions (e.g., delete task)
* Component showcase page
* Simple and clean UI

---

# Prerequisites

To run this project locally, you must install the following tools.

## 1. Install Git

Git is used to clone the repository.

Download:
https://git-scm.com/downloads

After installation, verify:

```bash
git --version
```

---

## 2. Install Node.js

Download Node.js (LTS version recommended):

https://nodejs.org/

Recommended version:

```
Node.js >= 18
```

After installation, verify:

```bash
node -v
npm -v
```

---

# Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/todo.git
```

Then navigate to the project folder:

```bash
cd todo
```

---

# Setup

## Install Dependencies

```bash
npm install
```

---

## Start the Application

```bash
npm run dev
```

After running the command, Vite will display a local development URL such as:

```
http://localhost:5173
```

Open this address in your browser.

---

# Available Scripts

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint project:

```bash
npm run lint
```

---

# Author

Developed by **Thiago Morato**

Frontend Engineer specialized in **React and TypeScript**, focused on building scalable and maintainable applications.
