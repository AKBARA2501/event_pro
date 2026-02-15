@echo off
REM EventPro Development Startup Script for Windows CMD

echo.
echo ========================================
echo   EventPro - Development Environment
echo ========================================
echo.

REM Check if Node.js is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm not found. Please install Node.js
    pause
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Python not found. Please install Python 3.12+
    pause
    exit /b 1
)

echo Starting EventPro development servers...
echo.

REM Get the directory where this script is located
set "SCRIPT_DIR=%~dp0"

REM Start Backend
echo [1/2] Starting Backend (Django on port 8000)...
start "EventPro Backend" cmd /k "cd /d "%SCRIPT_DIR%backend" && python manage.py runserver"
timeout /t 2 /nobreak

REM Start Frontend
echo [2/2] Starting Frontend (React on port 5173)...
start "EventPro Frontend" cmd /k "cd /d "%SCRIPT_DIR%frontend" && npm run dev"

echo.
echo ========================================
echo   EventPro is running!
echo ========================================
echo.
echo URLs:
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:8000
echo   Admin:    http://localhost:8000/admin
echo   API:      http://localhost:8000/api
echo.
echo Close these windows to stop the servers
echo.
pause
