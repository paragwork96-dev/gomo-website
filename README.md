# GOMO Website

This is a [Next.js](https://nextjs.org) project built with React, TypeScript, and Tailwind CSS. The website showcases products and services with a modern, responsive design.

## Project Overview

GOMO Website is a Next.js-based frontend application that provides:

- **Homepage**: Hero banner, feature showcase, and brand partnerships
- **Products Page**: Product categorization, grid display, and detailed product information
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Reusable Components**: Organized component library for layouts, products, and UI elements
- **API Integration**: Fetch and display product data from backend services

## Project Structure

```
gomo-website/
├── app/                          # Next.js App Router directory
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── products/
│   │   └── page.tsx             # Products page
│   └── components/
│       ├── layout/              # Layout components (Header, Footer, Hero, etc.)
│       ├── products/            # Product-specific components (ProductCard, ProductGrid, etc.)
│       └── ui/                  # Reusable UI components (Icon, SectionHeader, etc.)
├── lib/                         # Utility functions and helpers
│   ├── fetchApi.ts             # Generic API fetch utility
│   ├── fetchProducts.ts        # Product data fetching
│   └── fetchProductsPage.ts    # Product page data fetching
├── public/                      # Static assets
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── eslint.config.mjs           # ESLint configuration
```

## Prerequisites

- **Node.js**: v18.0 or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## Getting Started

### Installation

Install project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Changes to `app/page.tsx` will be reflected immediately in the browser.

### Building for Production

Build the application for production:

```bash
npm run build
```

This command:

- Compiles TypeScript to JavaScript
- Optimizes code for production
- Generates static and dynamic pages
- Prepares the `.next` directory

### Running Production Build

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Tech Stack

- **Framework**: [Next.js 16.2.10](https://nextjs.org)
- **UI Library**: [React 19.2.4](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Icons**: [FontAwesome](https://fontawesome.com)
- **Carousel**: [Swiper 14](https://swiperjs.com)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)
- **Linting**: [ESLint 9](https://eslint.org)

## Key Features

- **Component-Based Architecture**: Modular and reusable components
- **TypeScript**: Full type safety for better development experience
- **Responsive Design**: Mobile-first Tailwind CSS styling
- **API Integration**: Centralized data fetching utilities
- **Icon Library**: FontAwesome integration for vector icons
- **Image Carousel**: Swiper for smooth carousel functionality
