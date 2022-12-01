# webpack 相关



## 认识

webpack是一个打包模块化JavaScript的工具,在webpack 里一切皆模块，通过Loader转换文件，通过Plugin 注入钩子，最后输出由多个模块组合成的文件。webpack 专注于构建模块化项目。



## 其他


### ⭐️常用loader

|  loader name | description |
| ----| ----|
| style-loader  | 用于css编译完成的样式，挂载到页面style标签上 |
| css-loader | 识别.css文件,处理css必须配合style-loader 共同使用，只安装css-loader样式不生效|
| sass-loader||
| postcss-loader| 用于补充css样式各种浏览器内涵前缀|
