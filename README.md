# Emma Thompson Portfolio

A modern, dark-themed portfolio website built with Next.js and Tailwind CSS, showcasing the work of a UX/UI Designer.

## Features

- **Modern Design**: Clean, minimalist dark theme with green accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: FAQ accordion, testimonial carousel, and more
- **Performance Optimized**: Built with Next.js for optimal performance
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── AboutMe.tsx       # About section
│   ├── WorkExperience.tsx # Work experience
│   ├── LatestArticles.tsx # Articles section
│   ├── Testimonial.tsx   # Testimonials
│   ├── FAQ.tsx           # FAQ section
│   └── Footer.tsx        # Footer
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  'dark-gray': '#1a1a1a',
  'light-gray': '#9ca3af',
  'accent-green': '#10b981',
  'border-gray': '#374151',
}
```

### Content
Update the content in each component file to match your information:
- Personal details in `Hero.tsx`
- About section in `AboutMe.tsx`
- Articles in `LatestArticles.tsx`
- FAQ questions in `FAQ.tsx`

### Profile Picture
Replace the placeholder "ET" initials in `Hero.tsx` with your actual profile image.

## Building for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspiration from modern portfolio websites
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
