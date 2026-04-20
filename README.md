# TechConsult IT Solutions Website

A modern, responsive IT consulting services website built with React and Tailwind CSS.

## **Live Demo**
**[View Live Website](https://techconsultwebsite1-andrewmatewere1-3739s-projects.vercel.app/)**

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Mobile-first approach that works on all devices
- **Component-Based**: Reusable React components for maintainability
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Form Validation**: Client-side validation with error handling
- **Routing**: Single-page application with React Router
- **Accessibility**: Semantic HTML and ARIA attributes

## Pages

- **Home**: Hero section, services preview, about, testimonials, CTA
- **Services**: Comprehensive service offerings with detailed descriptions
- **Projects**: Portfolio showcase with filtering capabilities
- **Team**: Team members with social links and company culture
- **Contact**: Contact form with validation and company information

## Technologies Used

- **React 18**: Modern functional components with hooks
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

## Project Structure

```
src/
  components/          # Reusable UI components
    - Navbar.jsx
    - Footer.jsx
    - Button.jsx
    - Card.jsx
  pages/              # Page components
    - Home.jsx
    - Services.jsx
    - Projects.jsx
    - Team.jsx
    - Contact.jsx
  data/               # Mock data
    - mockData.js
  assets/             # Static assets
  index.css           # Global styles and Tailwind imports
  App.jsx             # Main application component
  index.js            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tech-consulting-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Primary: Blue tones (primary-50 to primary-900)
- Secondary: Gray tones (secondary-50 to secondary-900)

### Fonts

The project uses system fonts for optimal performance and loading speed.

### Animations

Custom animations are defined in `tailwind.config.js`:
- `fade-in`: Fade in with slide up effect
- `slide-up`: Slide up animation

## Deployment

This project can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository and deploy automatically
- **Vercel**: Import the project and deploy with zero configuration
- **AWS Amplify**: Connect your repository for continuous deployment
- **GitHub Pages**: Use `gh-pages` package for deployment

## Performance Features

- **Code Splitting**: React.lazy() for route-based code splitting
- **Optimized Images**: Proper image sizing and lazy loading
- **Minimal Dependencies**: Only essential packages included
- **CSS Optimization**: Tailwind's purging removes unused CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@techconsult.com
- Phone: +1 (555) 123-4567
# -TechConsultwebsite
