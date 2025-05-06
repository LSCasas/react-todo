# Todo - React

> This project is part of my **frontend learning portfolio** focused on **React** and **Tailwind CSS**.

A minimal and responsive Todo application built with React and Tailwind CSS. This project demonstrates core concepts such as state management with React hooks, conditional rendering, and dynamic UI updates. It supports task creation, deletion, and inline editing — all styled using utility classes from Tailwind CSS.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#how-to-use-this-project)
- [Requirements](#requirements)
- [Contribution](#contribution)
- [Learn More](#learn-more)

---

## Project Structure


```
react-todo/
├── public/               # Static files
├── src/                  # Source code
│   ├── App.jsx           # Main application logic
│   ├── assets/           # Optional assets
│   ├── index.css         # Tailwind and custom styles
│   ├── main.jsx          # Entry point for React
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite bundler configuration
└── README.md             # Project documentation
```

---

## Features

- Add new tasks
- Delete tasks
- Inline task editing
- Responsive design with Tailwind CSS
- Clean and minimal user interface

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LSCasas/react-todo.git
   cd react-todo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## How to Use This Project

To start the development server:

```bash
npm run dev
```

Then, open your browser and go to:

```
http://localhost:5173
```

---

## Editing Tasks

This Todo app allows you to edit tasks **inline**:

- Click the ✎ icon next to a task to make it editable.
- Modify the task and click **Save** to update it.
- Click **Cancel** to discard changes.
- Click the **x** icon to delete a task.

If no tasks exist, a message saying `"You have no pending tasks"` will be shown.

---

## Requirements

- Node.js >= 18
- npm

---

## Contribution

If you want to contribute to this project, follow the steps below:

1. Fork the repository.

2. Create a new branch for your feature:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes.

4. Commit your changes:

   ```bash
   git commit -am 'Add new feature'
   ```

5. Push your changes to your fork:

   ```bash
   git push origin feature/new-feature
   ```

6. Create a Pull Request for your changes to be reviewed and merged into the main project.

---

## Learn More

Explore the tools and technologies used in this project:

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

---

Your feedback and contributions are welcome!
