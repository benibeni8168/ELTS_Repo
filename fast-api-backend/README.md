# ELTS Django REST Framework Backend

A Django REST Framework backend for the ELTS website with email forwarding functionality.

## 🚀 Quick Start

### Prerequisites
Make sure Python 3.11+ is installed on your system.

**Install Python:**
- **Windows:** Download from https://python.org or use Microsoft Store
- **macOS/Linux:** Use your package manager or download from python.org

### Setup
1. **Run the setup script:**
   ```bash
   # Windows
   setup.bat

   # macOS/Linux
   chmod +x setup.sh
   ./setup.sh
   ```

2. **Configure email settings** in `.env` file (see Email Configuration below)

3. **Start the server:**
   ```bash
   python manage.py runserver 5000
   ```

The API will be available at `http://localhost:5000/api/`

## 📧 Email Configuration (IMPORTANT!)

Edit the `.env` file with your email settings for contact form emails to work:

```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com
```

### Gmail Setup
1. Enable 2-factor authentication
2. Generate App Password: https://support.google.com/accounts/answer/185833
3. Use App Password (not regular password) in EMAIL_HOST_PASSWORD

### Other Providers
- **Outlook:** `EMAIL_HOST=smtp-mail.outlook.com`
- **Yahoo:** `EMAIL_HOST=smtp.mail.yahoo.com`

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure your settings:

```bash
cp .env.example .env
```

Edit `.env` with your email settings:
- `EMAIL_HOST`: Your SMTP server (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP port (587 for TLS, 465 for SSL)
- `EMAIL_HOST_USER`: Your email address
- `EMAIL_HOST_PASSWORD`: Your email password or app password
- `DEFAULT_FROM_EMAIL`: Email address to send from

### 3. Database Setup

```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Run the Server

```bash
python manage.py runserver 5000
```

The API will be available at `http://localhost:5000/api/`

## API Endpoints

### Contact Form
- `POST /api/contact/submit/` - Submit contact form (sends email)
- `GET /api/contact/` - List all contact submissions (admin)
- `GET /api/contact/{id}/` - Get specific contact submission

## Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use your Gmail address as `EMAIL_HOST_USER`
4. Use the App Password as `EMAIL_HOST_PASSWORD`

### Other Email Providers
- **Outlook/Hotmail**: `EMAIL_HOST=smtp-mail.outlook.com`, `EMAIL_PORT=587`
- **Yahoo**: `EMAIL_HOST=smtp.mail.yahoo.com`, `EMAIL_PORT=587`
- **Custom SMTP**: Configure according to your provider

## Testing Email

Test the contact form by submitting data to `/api/contact/submit/`:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "company": "Test Company",
  "message": "This is a test message"
}
```

You should receive an email notification with the contact details.

## Production Deployment

1. Set `DEBUG=False` in production
2. Use a production database (PostgreSQL recommended)
3. Configure proper `SECRET_KEY`
4. Set up proper CORS origins
5. Use a production WSGI server (gunicorn)

## Admin Interface

Access Django admin at `http://localhost:5000/admin/` to view contact submissions.

Default admin credentials (create superuser with `python manage.py createsuperuser`).