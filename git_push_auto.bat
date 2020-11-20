@echo off
chcp 65001
set now=%date% %time%

@echo.
echo ===1.推送此目录开始===

@echo.
echo ===2.添加本地目录、文件===
git add .

@echo.
echo ===3.当前时间：%now% ===
git commit -m "%now%"
set now=

@echo.
echo ===4.开始推送===
git push

@echo.
echo ===5.推送完成===


@echo.
echo 按任意键退出...
pause & exit