# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio application that is currently in the initial stages of development. The repository currently contains only a README file, indicating this is a fresh project that will be built out over time.

## Development Commands

Since this is a new project, standard development commands will need to be established as the project grows. Common patterns for portfolio applications include:

### Frontend Development (if using React/Vue/etc.)
- Install dependencies: `npm install` or `yarn install`
- Start development server: `npm start` or `yarn dev`
- Build for production: `npm run build` or `yarn build`
- Run tests: `npm test` or `yarn test`
- Lint code: `npm run lint` or `yarn lint`
- Format code: `npm run format` or `yarn format`

### Backend Development (if applicable)
- Start backend server: `npm run server` or `yarn server`
- Run backend tests: `npm run test:server`

### General Commands
- Initialize git repository (already done)
- Run all tests: `npm test`
- Start development environment: `npm run dev`

## Code Architecture & Structure

As this portfolio application develops, it will likely follow common frontend architecture patterns:

### Typical Structure for a Portfolio App
```
/src
  /components     # Reusable UI components
  /pages          # Page-level components (Home, About, Projects, Contact)
  /styles         # CSS/Sass styling files
  /assets         # Images, icons, fonts
  /utils          # Utility functions and helpers
  /services       # API service calls
  /hooks          # Custom React hooks (if using React)
  /context        # Context providers (if using React Context)
  /types          # TypeScript type definitions (if using TS)
  App.jsx         # Main application component
  main.jsx        # Entry point
```

### Common Technologies
- Frontend Framework: Likely React, Vue, or vanilla HTML/CSS/JS
- Styling: CSS Modules, Styled Components, Tailwind CSS, or plain CSS
- Build Tool: Vite, Webpack, or Create React App
- TypeScript: Possible adoption for type safety
- State Management: Context API, Redux, or Zustand (depending on complexity)

## Getting Started

When beginning work on this portfolio application:

1. **Review the README** for any specific setup instructions
2. **Establish project structure** based on the chosen technology stack
3. **Set up development environment** with necessary dependencies
4. **Create core components** (Header, Navigation, Footer)
5. **Develop portfolio sections** (About, Projects, Skills, Contact)
6. **Implement responsive design** for mobile and desktop views
7. **Add interactivity** and animations as needed
8. **Optimize performance** and accessibility
9. **Prepare for deployment** to hosting platforms (Vercel, Netlify, etc.)

## Best Practices

- Maintain clean, readable code with consistent formatting
- Write reusable, modular components
- Implement responsive design from the start
- Follow accessibility guidelines (WCAG)
- Optimize assets (images, fonts) for web performance
- Use semantic HTML for better SEO and accessibility
- Keep dependencies up to date
- Regularly commit changes with descriptive messages
- Test across different browsers and devices

## Common Development Tasks

As the project evolves, common tasks will include:
- Adding new portfolio projects or case studies
- Updating skills and experience sections
- Implementing contact form functionality
- Adding dark/light mode toggle
- Integrating analytics or tracking
- Optimizing for SEO
- Deploying updates to production

## Next Steps

To continue developing this portfolio application:
1. Decide on the technology stack (React/Vue/Svelte/vanilla)
2. Set up the project with appropriate build tools
3. Create the basic layout and navigation
4. Develop each section of the portfolio
5. Add styling and responsiveness
6. Implement any interactive features
7. Test thoroughly and prepare for deployment

This CLAUDE.md file should be updated as the project evolves to reflect the actual technologies, patterns, and conventions being used.