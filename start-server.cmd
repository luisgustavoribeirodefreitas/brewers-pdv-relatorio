@echo off
cd /d "%~dp0"
set "PYTHON_EXE=C:\Users\luisg\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

if exist "%PYTHON_EXE%" (
  "%PYTHON_EXE%" "%~dp0server.py" >> "%~dp0server.log" 2>&1
) else (
  py -3 "%~dp0server.py" >> "%~dp0server.log" 2>&1
)
