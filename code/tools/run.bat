@echo off
set /p input=������ExcelĿ¼:
node \NodeProject\ConfigTools\out\main.js %input%
node \NodeProject\ZipTools\out\main.js %input%\outFile\client
@pause