@echo off
echo Setting up Django backend...
echo.

cd /d "%~dp0"

echo Creating virtual environment...
python -m venv venv
if %errorlevel% neq 0 (
    echo ERROR: Failed to create virtual environment. Make sure Python is installed.
    pause
    exit /b 1
)

echo.
echo Activating virtual environment...
call venv\Scripts\activate
if %errorlevel% neq 0 (
    echo ERROR: Failed to activate virtual environment.
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies.
    pause
    exit /b 1
)

echo.
echo Setting up database...
python manage.py makemigrations
if %errorlevel% neq 0 (
    echo ERROR: Failed to create migrations.
    pause
    exit /b 1
)

python manage.py migrate
if %errorlevel% neq 0 (
    echo ERROR: Failed to run migrations.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Django backend setup complete!
echo ========================================
echo.
echo To start the server, run:
echo python manage.py runserver 5000
echo.
echo Access points:
echo - API: http://localhost:5000/api/
echo - Admin: http://localhost:5000/admin/
echo.
echo IMPORTANT: Configure your email settings in .env file
echo before starting the server for contact form emails to work.
echo.
pause