@echo off
cd /d "%~dp0"
echo Building + pushing...
npm run deploy:build
echo.
echo Done. Press any key to close.
pause >nul
