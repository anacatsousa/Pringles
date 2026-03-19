# Pringles

A fictional promotional website for the Pringles brand, built with HTML, SCSS and JavaScript. Focused on interactive UI components and deepening JavaScript skills alongside structured SCSS organisation.

<br>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-4CAF50?style=for-the-badge&logo=vercel)](https://pringles-slider.vercel.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br>

## About

Pringles is a fictional promotional website built as a study project focused on practicing JavaScript alongside SCSS — exploring DOM manipulation, CSS animations, and event handling, while maintaining a modular and structured stylesheet using BEM methodology.

The page is a single-page layout with the following sections: hero slider with product showcase and a responsive navigation with a full-screen mobile menu.

<br>

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Interactive product slider with clip-path reveal animation
- Dot navigation synced with slides
- Animated full-screen mobile menu
- Custom styling without external frameworks
- Modular SCSS styling with BEM methodology
- Built with accessibility in mind (keyboard navigation, ARIA attributes, and screen reader support)

<br>

## Project Structure

```
Pringles/
├── assets/          # Images and visual resources
├── js/              # JavaScript source files
│   └── script.js
├── scss/            # SCSS source files
├── index.html       # Main HTML file
├── .gitignore
└── README.md
```

<br>

## Getting Started

### Prerequisites

You'll need a SCSS compiler. You can use the [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) extension for VS Code, or install Sass via npm:

```bash
npm install -g sass
```

### Running locally

1. Clone the repository:

```bash
git clone https://github.com/anacatsousa/Pringles.git
cd Pringles
```

2. Compile SCSS to CSS:

```bash
sass scss/main.scss assets/style.css --watch
```

3. Open `index.html` in your browser.

<br>

## License

This project is licensed under the [MIT License](LICENSE).

<br>

Made by [Catarina Sousa](https://github.com/anacatsousa)
