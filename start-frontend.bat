@echo off
title ELTS Frontend
color 0A

echo ================================================
echo   ELTS - React Frontend
echo ================================================
echo.

cd /d "%~dp0react-frontend"

echo [1/2] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
)

echo.
echo [2/2] Building and starting development server...
echo.
echo Frontend will open at: http://localhost:3000
echo Press Ctrl+C to stop the server.
echo.

call npm start
