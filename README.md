react-redux-webpack-boilerplate，redux + redux类前端项目模版

## 使用

一、 系统安装Nodejs

二、 安装node模块

```
 npm install
```

三、 开发阶段

1、开启mock server，模拟服务端数据

```
 node mock-server/app.js 
```

2、 开始前端开发吧，运行如下命令可以运行网站，模块热替换修改代码浏览器自动刷新，可以在浏览器控制台或者命令行中查看错误，调试（建议安装CHrome插件*React Developer Tools*）等

```
 npm start
```

四、 构建 webpack + gulp
功能：
  - 模块管理：前端模块化
  - 压缩js、css
  - 文件指纹，css、js、image文件重命名为带指纹的名称
  - 图片小于8kb生成base64
  - 资源地址配置成cdn地址
  - ...
  
五、发布部署前端资源文件

参考文章 [大公司里怎样开发和部署前端代码](https://github.com/fouber/blog/issues/6)
