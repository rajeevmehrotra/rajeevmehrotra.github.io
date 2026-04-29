# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal portfolio website for Raj Mehrotra, hosted on GitHub Pages. The site serves as a professional portfolio showcasing experience, skills, and personal information.

## Architecture

- **Static Site Generator**: Jekyll (GitHub Pages compatible)
- **CSS Framework**: Bootstrap 4.1.2 with custom SCSS
- **Layout System**: Jekyll layouts in `_layouts/` with includes in `_includes/`
- **Styling**: Modular SCSS files in `_sass/` compiled via `assets/css/styles.scss`
- **Content**: Single-page application with sections for hero, about, experience, skills, and interests
- **Deployment**: Automatic deployment via GitHub Pages

## Key Files

- `index.html`: Main content with Jekyll front matter and sections
- `_config.yml`: Jekyll configuration with site metadata and plugins
- `_layouts/default.html`: Base HTML template with Bootstrap and custom assets
- `_sass/`: Modular SCSS files (main.scss, nav.scss, footer.scss, etc.)
- `assets/css/styles.scss`: SCSS entry point that imports all _sass modules
- `Gemfile`: Ruby dependencies for Jekyll and GitHub Pages

## Development Commands

Since this is a Jekyll site, use these commands:

```bash
# Install dependencies
bundle install

# Serve locally for development
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

## Content Structure

The site uses a single-page layout with Bootstrap components and custom styling. The main content sections are defined directly in `index.html` with Jekyll's liquid templating for includes.

## Styling System

- Uses Bootstrap 4 as the base framework
- Custom SCSS modules in `_sass/` for specific components
- Font Awesome icons for social media and navigation
- Google Fonts (Montserrat, Quicksand) for typography
- Responsive design with Bootstrap's grid system