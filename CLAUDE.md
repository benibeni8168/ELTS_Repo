# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ELTS (Elevator Tech Solutions) website — a static dark-themed HTML/CSS/JS frontend paired with a Django REST Framework backend for contact form handling with email forwarding.

## Repository Structure

```
Website Dark Version/   ← Static HTML/CSS frontend (no build step)
fast-api-backend/       ← Django REST Framework backend (Python)
  elts_backend/         ← Django project settings & root URLs
  contact/              ← Single Django app: contact form model, API, email
  manage.py
  requirements.txt
  .env                  ← Email credentials (not committed)
  .env.example          ← Template for .env
```

## Backend Development

All backend commands run from `fast-api-backend/` with the venv activated.

**First-time setup:**
```bash
cd fast-api-backend
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS/Linux
pip install -r requirements.txt
python manage.py migrate
```

**Run the server:**
```bash
python manage.py runserver 5000
```

**Run tests:**
```bash
python manage.py test contact
```

**Create admin user:**
```bash
python manage.py createsuperuser
```

**Make and apply migrations after model changes:**
```bash
python manage.py makemigrations
python manage.py migrate
```

## Architecture

### Frontend
Pure static HTML files in `Website Dark Version/`. Pages include: `newindex.html` (home), `about.html`, `services.html`, `solutions.html`, `contact.html`, `case-studies.html`, service-specific pages, and `support.html`. No build toolchain — open files directly in a browser or serve with any static server.

Design system uses CSS custom properties (`--bg-main`, `--blue`, `--purple`, etc.) defined in each file's `<style>` block. External dependencies loaded via CDN: Font Awesome, AOS animations, Google Fonts (Inter + Space Grotesk).

### Backend
Single Django app (`contact`) handles the entire API surface:

- **Model** (`contact/models.py`): `ContactSubmission` — saves form data and fires email in `save()`. Email is also attempted in `ContactViewSet.submit()`, so email sends are triggered twice on submission (once from model, once from view). This is a known issue.
- **View** (`contact/views.py`): `ContactViewSet` — a `ModelViewSet` with a custom `submit` action at `POST /api/contact/submit/`. Email failures are caught and logged but don't fail the API response.
- **URLs**: `api/contact/` (router) → `api/contact/submit/` (custom action), `api/contact/` (list), `api/contact/{id}/` (detail)

CORS is configured to allow `localhost:3000` and `localhost:5000` only. For production, update `CORS_ALLOWED_ORIGINS` in `elts_backend/settings.py`.

## Email Configuration

Copy `.env.example` to `.env` and set credentials:

```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password   # Gmail App Password, not account password
DEFAULT_FROM_EMAIL=your-email@gmail.com
```

Contact notifications are sent to `EMAIL_HOST_USER`. The backend uses SQLite (`db.sqlite3`) in development; switch to PostgreSQL for production.
