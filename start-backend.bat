@echo off
title ELTS Backend
color 0B

echo ================================================
echo   ELTS - Django Backend
echo ================================================
echo.

cd /d "%~dp0fast-api-backend"

echo [1/3] Installing Python dependencies...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo ERROR: pip install failed.
    pause
    exit /b 1
)

echo.
echo [2/3] Running database migrations...
python manage.py migrate
if %errorlevel% neq 0 (
    echo ERROR: migrations failed.
    pause
    exit /b 1
)

echo.
echo [3/3] Starting Django server...
echo.
echo Backend API running at: http://localhost:5000
echo API endpoint:           http://localhost:5000/api/contact/submit/
echo Press Ctrl+C to stop the server.
echo.

python manage.py runserver 5000
