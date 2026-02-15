# EventPro Development Startup Script for Windows

# Check if Node.js is installed
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm not found. Please install Node.js" -ForegroundColor Red
    exit 1
}

# Check if Python is installed
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Python not found. Please install Python 3.12+" -ForegroundColor Red
    exit 1
}

Write-Host "🚀 Starting EventPro Development Environment..." -ForegroundColor Green
Write-Host ""

# Get the script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Start Backend in new PowerShell window
Write-Host "📦 Starting Backend (Django)..." -ForegroundColor Cyan
$backendProcess = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptDir\backend'; python manage.py runserver" -PassThru
Write-Host "   ✅ Backend PID: $($backendProcess.Id)" -ForegroundColor Green
Write-Host "   📍 Backend URL: http://localhost:8000" -ForegroundColor Green

Start-Sleep -Seconds 3

# Start Frontend in new PowerShell window
Write-Host ""
Write-Host "⚛️  Starting Frontend (React)..." -ForegroundColor Cyan
$frontendProcess = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptDir\frontend'; npm run dev" -PassThru
Write-Host "   ✅ Frontend PID: $($frontendProcess.Id)" -ForegroundColor Green
Write-Host "   📍 Frontend URL: http://localhost:5173" -ForegroundColor Green

Write-Host ""
Write-Host "✨ EventPro is running!" -ForegroundColor Green
Write-Host ""
Write-Host "URLs:" -ForegroundColor Yellow
Write-Host "  🌐 Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "  🔗 Backend:  http://localhost:8000" -ForegroundColor Cyan
Write-Host "  ⚙️  Admin:    http://localhost:8000/admin" -ForegroundColor Cyan
Write-Host "  📡 API:      http://localhost:8000/api" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the servers" -ForegroundColor Yellow
