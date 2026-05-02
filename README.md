# Jay Dabgar Photography

A stunning, minimalist photography portfolio website built with React.js and custom CSS3 featuring parallax scrolling animations.

## Features

- **Parallax Scrolling Effects** - Smooth parallax animations throughout the site
- **Responsive Design** - Fully responsive layout for all devices
- **Modern Aesthetic** - Clean, image-centric design inspired by premium photography studios
- **Smooth Animations** - CSS3 animations and transitions for elegant interactions
- **No Tailwind CSS** - Pure custom CSS3 for complete control
- **Intersection Observer** - Scroll-triggered animations for performance

## Sections

1. **Hero** - Full-screen hero with parallax background and animated text
2. **About** - Photographer introduction with statistics and parallax image
3. **Portfolio** - Responsive masonry grid with hover effects and parallax images
4. **Stories** - Featured wedding stories with elegant cards
5. **Services** - Parallax background section with service offerings
6. **Contact** - Contact form and information

## Tech Stack

- React.js 18
- Custom CSS3 (No Tailwind)
- Google Fonts (Cormorant Garamond + Montserrat)
- CSS Animations & Keyframes
- Intersection Observer API

## Getting Started

### Installation

```bash
cd jaydabgar-photography
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Design Inspiration

Inspired by:
- [Naman Verma Weddings](https://www.namanverma.com/weddings) - Minimalist, image-centric design
- [House on the Clouds](https://www.houseontheclouds.com/) - Editorial fine-art aesthetic

## Key Design Elements

- **Typography**: Elegant serif headings (Cormorant Garamond) paired with clean sans-serif body text (Montserrat)
- **Color Palette**: Neutral tones (black, white, cream) with gold accent highlights
- **Animations**: Parallax scrolling, fade-in effects, hover transitions
- **Layout**: Asymmetric grids, generous whitespace, image-first approach

## Customization

To add your own images, replace the placeholder divs in the components with actual `<img>` tags:

```jsx
// Replace this placeholder
<div className="portfolio-placeholder">
  <span>{item.title}</span>
</div>

// With actual images
<img src="/path/to/image.jpg" alt={item.title} />
```

## License

© 2024 Jay Dabgar Photography. All rights reserved.
