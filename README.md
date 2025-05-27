# Personal Website - React Static Site

A modern, responsive personal website built with React and Vite, designed based on a Figma prototype.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient text effects
- **Responsive Layout**: Adapts to different screen sizes while maintaining design integrity
- **Project Showcase**: Grid layout for displaying portfolio projects
- **Social Links**: Direct links to GitHub, LinkedIn, and email
- **Decorative Elements**: Subtle design elements including lines and background shapes
- **Optimized Performance**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS-in-JS** - Inline styles for component-based styling
- **Google Fonts** - Bruno Ace SC and Anek Gujarati fonts

## 📁 Project Structure

```
├── public/
│   ├── images/          # Project images and assets
│   └── ...
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and CSS reset
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Design Elements

Based on the [Figma design](https://www.figma.com/design/IkhhUaVLLmLziLVCGGicRh/PersonalWeb?node-id=162-342&t=CCIvrDOOfJyJmqco-4), the website includes:

- **Hero Section**: Large gradient text with personal motto
- **Introduction**: Professional introduction with tagline
- **Projects Grid**: 2x2 grid layout for showcasing work
- **Social Links**: GitHub, LinkedIn, and email contact
- **Decorative Lines**: Geometric elements for visual interest
- **Background Elements**: Subtle circular background shape

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Customization

### Adding Projects

Edit the project cards in `src/App.jsx` in the "My Projects Section":

```jsx
<h3>Your Project Title</h3>
<p>Your project description</p>
```

### Adding Project Images

1. Place your images in the `public/images/` directory
2. Update the `backgroundImage` URL in the project card:
   ```jsx
   backgroundImage: 'url(/images/your-image.png)'
   ```

### Updating Contact Information

Modify the social links in the "Social Links" section:

```jsx
<a href="https://github.com/your-username">Github</a>
<a href="https://linkedin.com/in/your-profile">Linkedin</a>
<a href="mailto:your-email@example.com">Mail</a>
```

### Styling Changes

The website uses inline styles for easy customization. Key areas to modify:

- **Colors**: Update hex values in the style objects
- **Fonts**: Modify `fontFamily` properties
- **Spacing**: Adjust `margin`, `padding`, and `gap` values
- **Layout**: Modify grid properties and flexbox settings

## 📱 Responsive Design

The website is designed to work across different screen sizes:

- **Desktop**: Full layout with 2-column project grid
- **Tablet**: Responsive grid that adapts to screen width
- **Mobile**: Single-column layout with maintained proportions

## 🎯 Performance

- **Fast Loading**: Optimized with Vite bundling
- **Minimal Dependencies**: Lightweight React setup
- **Efficient Images**: Properly sized and optimized assets
- **CSS Optimization**: Inline styles reduce CSS bundle size

## 🔧 Deployment

The built files can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use the built files in the `dist` directory
- **Any CDN**: Upload the contents of `dist` folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and make it your own! If you have suggestions for improvements, please open an issue or submit a pull request.

---

Built with ❤️ using React and Vite 