# hot-update
A simple implementation scheme for hot updating of webpage
----------------------------------------------------------
## node.js + express + socket.io 实现页面热更新。
通过node.js的文件系统监听本地文件的变化，通过socket向前端推送信息，前端接收到信息后自动刷新页面。

### 开发环境
1. Node.js 6.10.0
2. express 4.15.2
3. socket.io 1.7.3

### 安装依赖
将文件clone到本地，进入根目录
npm install

### 启动服务器监听修改
根目录下运行 node app.js
浏览器打开 http://localhost:8080/index.html
修改文件并保存后页面自动刷新
