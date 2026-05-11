# Django Backend Setup Guide

## 🚀 Quick Setup Instructions

### Step 1: Install Python
Since Python is not currently installed on your system, you need to install it first.

**Option A: Microsoft Store (Recommended)**
1. Open Microsoft Store
2. Search for "Python"
3. Install "Python 3.11" or "Python 3.12"
4. Wait for installation to complete

**Option B: Direct Download**
1. Go to https://www.python.org/downloads/
2. Download Python 3.11.9 (Windows installer)
3. Run the installer
4. Make sure to check "Add Python to PATH" during installation

### Step 2: Verify Python Installation
After installation, open a new terminal and run:
```bash
python --version
pip --version
```

You should see output like:
```
Python 3.11.9
pip 23.x.x
```

### Step 3: Setup Django Backend
Once Python is installed, run these commands in the `fast-api-backend` directory:

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup database
python manage.py makemigrations
python manage.py migrate

# Create admin user (optional)
python manage.py createsuperuser

# Start the server
python manage.py runserver 5000
```

### Step 4: Configure Email (Important!)
Edit the `.env` file in the `fast-api-backend` directory with your email settings:

```bash
# Replace with your actual email credentials
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com
```

**For Gmail users:**
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use your Gmail address as EMAIL_HOST_USER
4. Use the App Password (not your regular password) as EMAIL_HOST_PASSWORD

### Step 5: Test the Backend
1. Backend will run on http://localhost:5000
2. API endpoints: http://localhost:5000/api/
3. Admin panel: http://localhost:5000/admin/

### Step 6: Start React Frontend
In a new terminal, go to the `react-frontend` directory:

```bash
npm install
npm start
```

Frontend will run on http://localhost:3000

## 🧪 Testing Email Functionality

1. Open http://localhost:3000 in your browser
2. Go to the Contact page
3. Fill out and submit the contact form
4. Check your email - you should receive the contact form data

## 📧 Email Configuration Examples

### Gmail
```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
```

### Outlook/Hotmail
```bash
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
```

### Yahoo
```bash
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
```

## 🔧 Troubleshooting

### Python not found after installation
- Restart your terminal/command prompt
- Check if Python was added to PATH during installation
- Try `py` instead of `python`

### Email not sending
- Check your email credentials in `.env`
- For Gmail, make sure you're using an App Password
- Check spam folder
- Verify SMTP settings for your email provider

### Port 5000 already in use
- Change the port: `python manage.py runserver 8000`
- Update frontend API URL accordingly

### CORS errors
- Make sure backend is running on the correct port
- Check CORS settings in Django settings.py