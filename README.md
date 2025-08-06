# Portfolio App

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

**Live Demo**: https://taraka1328.github.io/Portfolio/

## Development

To run this project locally:

```sh
# Clone the repository
git clone https://github.com/taraka1328/Portfolio.git

# Navigate to the project directory
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173`.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to deploy this project?

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch of your GitHub repository
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at: https://taraka1328.github.io/Portfolio/

### Manual Deployment

If you prefer to deploy manually:

```sh
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### GitHub Pages Setup

Make sure GitHub Pages is enabled in your repository settings:
1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Click Save

The GitHub Actions workflow will automatically create and update the `gh-pages` branch.
