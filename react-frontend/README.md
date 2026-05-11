# Elevator Tech Solutions - React Frontend

A modern React Single Page Application (SPA) for Elevator Tech Solutions built with Create React App and React Router.

## Features

- ✅ React 18 with React Router v6
- ✅ Responsive dark theme design
- ✅ API integration ready (Axios configured)
- ✅ Smooth animations (AOS - Animate On Scroll)
- ✅ Mobile-first responsive design
- ✅ Contact form with backend integration
- ✅ Structured components and services

## Project Structure

```
src/
├── components/       # Reusable React components (Navbar, Footer)
├── pages/           # Page components for each route
├── services/        # API service and utilities
├── styles/          # Component-specific CSS
├── App.js           # Main app with routing
└── index.js         # Entry point
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd react-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `REACT_APP_API_URL` in `.env` with your backend server URL:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Running the App

### Development Mode
```bash
npm start
```
The app will open at `http://localhost:3000`

### Production Build
```bash
npm run build
```

## API Integration

The app uses Axios for API calls. All API functions are in `src/services/api.js`.

### Example Usage:
```javascript
import { submitContactForm } from '../services/api';

// Send contact form
await submitContactForm({ name, email, message });
```

### Backend API Endpoints Expected:
- `GET /api/services` - Fetch services
- `GET /api/case-studies` - Fetch case studies
- `POST /api/contact` - Submit contact form

## Environment Variables

Create a `.env` file with:
```
REACT_APP_API_URL=http://your-backend-url/api
```

## Pages

- **Home** (`/`) - Landing page with features
- **Services** (`/services`) - Services listing
- **Solutions** (`/solutions`) - Solutions page
- **Case Studies** (`/case-studies`) - Case studies
- **About** (`/about`) - About page
- **Support** (`/support`) - Support page
- **Contact** (`/contact`) - Contact form

## Components

### Navbar
- Fixed navigation with scroll detection
- Mobile responsive hamburger menu
- Links to all pages

### Footer
- Company info
- Quick links
- Social media links

## Styling

All styles use CSS custom properties for easy theming:
- `--bg-main`: Main background
- `--bg-card`: Card background
- `--blue`: Primary color
- `--purple`: Secondary color
- `--text-main`: Main text color
- `--text-muted`: Muted text color

## Dependencies

- **react** - UI library
- **react-router-dom** - Client-side routing
- **axios** - HTTP client
- **aos** - Scroll animations
- **font-awesome** - Icons (via CDN)

## Next Steps

1. Configure your backend API URL in `.env`
2. Update page content with real data
3. Customize colors and branding
4. Add more pages/components as needed
5. Deploy to production

## Development Tips

- Use `data-aos` attribute for scroll animations
- Keep components small and reusable
- Update API functions in `src/services/api.js` for new endpoints
- Add authentication to `apiClient` interceptors if needed

## Support

For issues or questions, contact the development team.
