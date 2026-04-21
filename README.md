# Back to Tradition

A modern React website for **Back to Tradition** — an interior design and architectural restoration company that blends traditional Indian aesthetics with contemporary living spaces.

## Features

- Smooth scroll navigation
- Animated reveal sections on scroll
- Services, Portfolio, Team, and Testimonial sections
- Contact form powered by EmailJS
- Fully responsive layout
- Google Fonts (Playfair Display + Crimson Pro)

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool and dev server
- **EmailJS** — contact form email delivery

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version)

### Installation

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Project Structure

```
web.js/
├── src/
│   ├── App.jsx        # Main app component
│   └── main.jsx       # React entry point
├── index.html         # HTML entry point
├── vite.config.js     # Vite configuration
├── package.json       # Dependencies
└── README.md          # Project documentation
```

## Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) to send emails without a backend.

Make sure your EmailJS template includes these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{message}}`

## Contact Info

- Phone: +91 87558 80878
- Address: Pearl Academy, Rajouri Garden, New Delhi, India
