# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and deployed on GitHub Pages. This website showcases my skills, education, and projects as a full-stack developer and product designer.

## 🌐 Live Demo

Visit the live website: [https://tiiiiiimmy.github.io](https://tiiiiiimmy.github.io)

## 🚀 Features

- **Modern Design**: Clean, minimalist design with gradient typography and smooth animations
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects on social links and project cards with smooth transitions
- **Project Showcase**: Interactive project cards with links to live demos
- **Skills Display**: Organized presentation of development and design skills
- **Education Section**: Academic background and qualifications
- **Social Integration**: Direct links to GitHub, LinkedIn, and email contact

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: SCSS with CSS variables and mixins
- **Fonts**: Google Fonts (Bruno Ace SC, Anek Gujarati, Inter)
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## 📁 Project Structure

```
tiiiiiimmy.github.io/
├── public/
│   ├── images/
│   │   ├── project1.png
│   │   └── project2.jpg
│   └── index.html
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.scss         # Main styles with SCSS
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## 🎨 Design Features

### Typography
- **Bruno Ace SC**: Used for main headings and slogans with gradient effects
- **Anek Gujarati**: Used for introductions and section titles
- **Inter**: Used for body text and detailed information

### Color Scheme
- **Primary Colors**: Black (#000000) and gray gradients
- **Accent Color**: Bright green (#C8FF32) for highlights and interactions
- **Education Theme**: Green (#79A402) for education section consistency

### Animations
- Smooth hover transitions on interactive elements
- Project card animations with scale and shadow effects
- Social link hover effects with background color changes

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tiiiiiimmy/tiiiiiimmy.github.io.git
   cd tiiiiiimmy.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the development site

### Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages using the `gh-pages` package.

### Deployment Process

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The deployment script automatically:
- Builds the project for production
- Pushes the build files to the `gh-pages` branch
- Updates the live website at `https://tiiiiiimmy.github.io`

### Configuration

- **Base Path**: Configured in `vite.config.js` with `base: './'` for proper GitHub Pages routing
- **Homepage**: Set in `package.json` to point to the GitHub Pages URL
- **Build Output**: Production files are generated in the `dist` folder

## 🎯 Sections Overview

### Hero Section
- Large gradient typography displaying "DEV & DESIGN PORTFOLIO"
- Subtitle explaining the development philosophy
- Decorative line elements for visual interest

### Introduction
- Personal greeting and role description
- Professional positioning as full-stack developer and product designer

### Social Links
- Interactive links to GitHub, LinkedIn, and email
- Hover effects with accent color background

### Skills & Education
- Side-by-side layout showcasing technical skills and academic background
- Development skills: Java, C#, JavaScript, React, Node.js, cloud platforms
- Design skills: UX/UI Design, Figma, Adobe suite
- Education: Master's in Information Technology, Bachelor's in Industrial Design

### Projects
- **Buy or Bye**: AI-driven item management assistant
- **Why Defi**: Web3NZ Hackathon 2025 Runner-up - DeFi portfolio management tool
- Interactive project cards with live demo links

### Call to Action
- Bottom slogan emphasizing continuous learning and excellence

## 🔧 Customization

### Adding New Projects
1. Add project image to `public/images/`
2. Update the project card in `src/App.jsx`
3. Add corresponding CSS styles in `src/App.scss`

### Modifying Styles
- Global variables are defined at the top of `src/App.scss`
- Use SCSS mixins for consistent styling patterns
- Responsive breakpoints are configured for mobile and tablet devices

### Content Updates
- Update personal information in `src/App.jsx`
- Modify social links and contact information
- Adjust skills and education details as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: Full layout with side-by-side sections
- **Tablet** (≤1200px): Adjusted spacing and font sizes
- **Mobile** (≤768px): Stacked layout with optimized typography

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is for personal use. Feel free to use it as inspiration for your own portfolio, but please don't copy it directly.

## 📞 Contact

- **GitHub**: [tiiiiiimmy](https://github.com/tiiiiiimmy)
- **LinkedIn**: [Timmy Huang](https://www.linkedin.com/in/timmy-huang-b4877728a/)
- **Email**: thua695@aucklanduni.ac.nz

---

Built with ❤️ using React and deployed on GitHub Pages 