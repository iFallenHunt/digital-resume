# Interactive Resume

<div align="center">

![Version](https://img.shields.io/badge/version-0.2.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

## 🌟 About the Project

This is an interactive resume project developed with modern technologies to provide a unique professional information viewing experience. Built with performance, accessibility, and user experience in mind, it offers a modern and elegant way to showcase your professional journey.

### ✨ Live Demo
Visit the live demo at: [Digital Resume](https://digital-resume.vercel.app)

## �� Technologies Used

- **TypeScript** ^5.2.2 - For type-safe code
- **React** ^18.2.0 - For building the user interface
- **Vite** ^5.1.4 - For fast development and building
- **shadcn-ui** - For modern and accessible UI components
- **Tailwind CSS** ^3.4.1 - For modern and responsive styling
- **i18next** ^23.10.0 - For internationalization
- **framer-motion** ^11.0.8 - For smooth animations
- **react-icons** ^5.0.1 - For beautiful icons
- **emailjs** ^4.1.0 - For contact form functionality

## 🎯 Features

- 🌓 Light/Dark mode with system preference detection
- 🌎 Multi-language support (English and Portuguese)
- 📱 Fully responsive design for all devices
- 🎨 Modern and elegant interface with smooth animations
- 📄 Resume download in PDF format
- 🔗 GitHub integration (coming soon)
- 💼 Navigable resume sections with smooth scrolling
- 📬 Contact form with email integration
- ♿ Accessibility features (WCAG 2.1 Level AA)
- 🚀 Optimized performance (90+ Lighthouse score)
- 🎭 Beautiful animations and transitions

## 🛠️ How to Run the Project

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git >= 2.30.0

### Installation and Setup

```bash
# Clone the repository
git clone https://github.com/iFallenHunt/digital-resume.git

# Enter the project directory
cd digital-resume

# Install dependencies
npm install

# Start development server
npm run dev
```

The project will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 📁 Project Structure

```
digital-resume/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Application pages
│   ├── context/       # React contexts (theme, language)
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── lib/           # Configurations and constants
│   ├── types/         # TypeScript type definitions
│   ├── i18n/          # Internationalization files
│   └── styles/        # Global styles and Tailwind config
├── public/           # Static files
└── dist/            # Production build output
```

## 📝 Commit Standards

We follow the Conventional Commits pattern:

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `docs`: Documentation update
- `style`: Style changes
- `test`: Adding or modifying tests
- `chore`: Configuration changes

Example:
```
feat(i18n): add language switcher component
```

## 🤝 How to Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guide

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages following Conventional Commits
- Add JSDoc comments for functions and components
- Maintain test coverage for new features

## 🚀 Deployment

The project is configured for easy deployment on various platforms:

- **Vercel**: Recommended for best performance and easy setup
- **Netlify**: Great alternative with similar features
- **GitHub Pages**: Good for personal projects

### Environment Variables

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📈 Performance

- Lighthouse Score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Optimized bundle size
- Lazy loading for images and components

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

Lucas Santos
- LinkedIn: [santos-lucas96dev](https://www.linkedin.com/in/santos-lucas96dev/)
- GitHub: [iFallenHunt](https://github.com/iFallenHunt)

## 📚 Documentation

- [Development Documentation](DEVELOPMENT.md)
- [Portuguese Documentation](README-PTBR.md)

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [EmailJS](https://www.emailjs.com)
