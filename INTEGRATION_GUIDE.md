# ELTS - Full Stack Integration Guide

## Project Structure

```
fast-api-backend/     ← Django REST Framework backend (port 5000)
  elts_backend/       ← Django project
  contact/            ← Django app for contact forms
  manage.py           ← Django management script
  requirements.txt    ← Python dependencies
  .env                ← Environment variables
  start.bat/start.sh  ← Startup scripts

react-frontend/       ← React frontend (port 3000)
  src/
    services/api.js   ← API client connected to backend
  package.json
```

## Quick Start

### 1. Start the Django Backend

**On Windows:**
```bash
cd fast-api-backend
start.bat
```

**On macOS/Linux:**
```bash
cd fast-api-backend
chmod +x start.sh
./start.sh
```

Or manually:
```bash
cd fast-api-backend
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 5000
```

The backend will start on `http://localhost:5000`

### 2. Start the React Frontend

**In a new terminal:**
```bash
cd react-frontend
npm install  # (if not already done)
npm start
```

The frontend will start on `http://localhost:3000`

## Testing the Integration

1. **Access the backend API documentation:**
   - Swagger UI: http://localhost:5000/docs
   - ReDoc: http://localhost:5000/redoc

2. **Test endpoints in Swagger UI:**
   - GET `/api/services` - Fetch all services
   - GET `/api/case-studies` - Fetch all case studies
   - POST `/api/contact` - Submit contact form

3. **Verify frontend integration:**
   - Open http://localhost:3000 in browser
   - Navigate to "Services" page - should fetch from backend
   - Navigate to "Contact" page - submit form should send to backend
   - Check backend terminal for contact submissions

## API Endpoints

### Contact Form
- `POST /api/contact/submit/` - Submit contact form (sends email)
- `GET /api/contact/` - List all contact submissions (admin)
- `GET /api/contact/{id}/` - Get specific contact submission

### Services (Mock Data)
- `GET /api/services` - Get all services
- `GET /api/services/{service_id}` - Get a specific service

### Case Studies (Mock Data)
- `GET /api/case-studies` - Get all case studies
- `GET /api/case-studies/{study_id}` - Get a specific case study

## Environment Variables

### Backend (.env)
- `SECRET_KEY` - Django secret key (change in production)
- `DEBUG` - Debug mode (True for development)
- `EMAIL_HOST` - SMTP server (e.g., smtp.gmail.com)
- `EMAIL_PORT` - SMTP port (587 for TLS)
- `EMAIL_USE_TLS` - Use TLS encryption (True)
- `EMAIL_HOST_USER` - Your email address
- `EMAIL_HOST_PASSWORD` - Your email password or app password
- `DEFAULT_FROM_EMAIL` - Email address to send from

### Frontend (.env)
Optional - if not set, defaults to `http://localhost:5000/api`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Production Deployment

### Backend
- Deploy using Gunicorn + Django
- Use PostgreSQL for database persistence
- Configure CORS for production domain
- Set up email notifications for contact forms
- Use environment-specific .env files

### Frontend
- Build: `npm run build`
- Deploy to Netlify, Vercel, or AWS S3
- Update `REACT_APP_API_URL` to production backend URL

## Troubleshooting

### CORS Error
If frontend can't reach backend:
- Ensure backend is running on `http://localhost:5000`
- Check `allowed_origins` in `fast-api-backend/main.py`
- Clear browser cache and restart both servers

### API Not Found (404)
- Verify endpoint paths match exactly (case-sensitive)
- Check Swagger UI docs at http://localhost:5000/docs

### Contact Form Not Submitting
- Open browser console (F12) to see error details
- Verify backend is running
- Check that email format is valid
- Ensure email settings are configured in `.env`

## Next Steps

1. **Database Integration:** Connect PostgreSQL instead of in-memory storage
2. **Authentication:** Add JWT auth for admin endpoints
3. **Email Service:** Integrate email notifications for contact forms
4. **Validation:** Add more comprehensive input validation
5. **Testing:** Add unit tests and integration tests
6. **Logging:** Implement proper logging system
