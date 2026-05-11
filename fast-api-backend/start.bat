@echo off
echo Installing Django backend dependencies...
pip install -r requirements.txt
echo.
echo Setting up database...
python manage.py makemigrations
python manage.py migrate
echo.
echo Starting Django backend on http://localhost:5000
echo.
echo Access admin panel at: http://localhost:5000/admin/
echo API documentation at: http://localhost:5000/api/
echo.
echo To create admin user, run: python manage.py createsuperuser
echo.
python manage.py runserver 5000
pause
