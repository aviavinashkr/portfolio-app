# Avinash Kumar - DevOps Engineer Portfolio

A clean, professional portfolio website built with HTML, CSS, and JavaScript, featuring the HashiCorp Design System.

## Features

- **Modern Design**: Implements HashiCorp's design system with proper color palette, typography, and spacing
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop devices
- **Interactive Elements**: Mobile navigation menu, smooth scrolling, hover effects
- **Complete Profile**: Includes sections for About, Skills, Experience, Projects, Education & Certifications, and Contact
- **Performance Optimized**: Pure HTML/CSS/JS with no external dependencies

## Design System Implementation

This portfolio implements the HashiCorp Design System as specified in the DESIGN.md file:

### Color Palette
- **Canvas**: `#000000` (pure black background)
- **Surface layers**: `#15181e` → `#1f232b` → `#3b3d45` (elevated surfaces)
- **Text**: `#ffffff` (primary), `#b2b6bd` (muted), `#656a76` (subtle)
- **Accent**: `#2b89ff` (blue for links and interactive elements)
- **Product Colors**: Specific colors for different technologies/platforms

### Typography
- **Font Family**: Inter/Geist Sans/IBM Plex Sans fallback stack
- **Hierarchy**: Clear distinction between display (tight line-height) and body (relaxed line-height) text
- **Weights**: 500 (regular), 600 (medium), 700 (bold)
- **Special Styles**: Eyebrow text (uppercase, tracked) for section headers

### Spacing & Layout
- **8px base unit** for consistent spacing
- **Section spacing**: 96px vertical rhythm
- **Component padding**: Consistent interior spacing
- **Border radius**: 8px standard for interactive elements

### Components
- **Buttons**: Primary (white on black), Secondary (charcoal), Tertiary (transparent)
- **Cards**: Surface-based with product-colored variants
- **Navigation**: Sticky header with mobile menu
- **Product Pills**: For skills and technology tags
- **Input Fields**: With focus states

## Sections

1. **Hero** - Introduction with name, title, and call-to-action buttons
2. **About** - Professional summary and key highlights
3. **Skills** - Technical expertise organized by category
4. **Experience** - Professional timeline with detailed accomplishments
5. **Projects** - Featured work with descriptions and technology tags
6. **Education & Certifications** - Academic background and professional certifications
7. **Contact** - Contact information and social links
8. **Footer** - Navigation links and copyright information

## Files

- `index.html` - Main HTML structure
- `styles.css` - Complete styling with HashiCorp Design System implementation
- `script.js` - Interactive functionality (mobile menu, smooth scrolling, active nav)
- `RESUME.md` - Markdown version of the resume (extracted from PDF)
- `DESIGN.md` - HashiCorp Design System reference
- `CLAUDE.md` - Development guidelines for this project
- `mem.md` - Project memory log for Claude Code sessions

## Responsive Breakpoints

- **Desktop XL**: 1440px+
- **Desktop**: 1280px+
- **Tablet**: 1024px+
- **Mobile Landscape**: 768px+
- **Mobile Portrait**: 480px+

## Usage

Simply open `index.html` in any modern web browser to view the portfolio. No build process or dependencies required.

## Customization

To customize this portfolio for your own use:

1. Update the text content in `index.html` with your information
2. Replace the project details and links with your own work
3. Update the contact information
4. Modify colors in `styles.css` if you want to use different product colors
5. Replace the GitHub link with your own profile

## Credits

- Design System: HashiCorp (as referenced in DESIGN.md)
- Resume Data: Extracted from Info/Avinash kumar - devops - 5 years.pdf
- GitHub Profile: https://github.com/aviavinashkr