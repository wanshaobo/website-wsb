![Image text](./static/img/homepage.png)

##### 运行webpack实时监听文件变化
npm start
   
##### 运行项目
npm run run
   
##### 项目技术站
服务端：linux + nginx + express + mongoose
   
前端：webpack + react + react-router + sass
   
dev dependency开发环境
   
production dependency生产环境
   
热加载，页面自动刷新
   
   
   
服务器配置

#nginx服务器路径
/root/package/nginx-1.13.1
配置文件
/usr/local/nginx/conf/nginx.conf
查看nginx进程
ps -ef|grep nginx
杀死进程
kill -QUIT 进程号
验证nginx配置文件是否正确
进入/usr/local/nginx/sbin目录下，$./nginx -t
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
启动
./nginx -s reload
Nginx的启动、停止与重启
https://www.cnblogs.com/codingcloud/p/5095066.html

快捷方式
/usr/local/bin

查看文件夹详细信息
ls -all

启动项目
node app.js

##pm2
查看启动的服务列表
sudo pm2 ls/list
关闭并删除所有应用
sudo pm2 delete all
启动app.js应用程序
$ pm2 start app.js
cluster mode 模式启动4个app.js的应用实例,4个应用程序会自动进行负载均衡
sudo pm2 start app.js -i 4
启动应用程序并命名为 "app"
$ pm2 start app.js --name="app"
当文件变化时自动重启应用
$ pm2 start app.js --watch
显示所有应用程序的日志
sudo pm2 logs
显示指定应用程序的日志
pm2 logs [app-name]
停止所有的应用程序
pm2 stop all
停止 id为 0的指定应用程序
pm2 stop 0
重启所有应用
pm2 restart all

执行任何命令需要加上sudo


