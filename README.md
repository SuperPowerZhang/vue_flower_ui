# vue_flower_ui
## 运行步骤
- 运行 yarn dev 
- 点击预览链接，如 http://127.0.0.1:3000
## 官网打包步骤
- 运行 sh deploy.sh 即可上传到 Github 和 码云  
- 注意码云的pages服务需要手动去它的官网点击更新部署 
## 库文件打包步骤
- 运行 rollup -c 
- 得到的 dist/lib 目录就是编译后的库文件所在目录 
## 发布到npm步骤
- 更新package.json中的版本号
- 切换到npm源（建议安装nrm库，运行 nrm use npm即可）
- 运行npm login登录npm官网账号
- 运行npm publish 即可发布到npm
