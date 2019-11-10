# Chrome 扩展轱辘（脚手架）
Chrome 扩展脚手架，使用 Vue.js + webpack 来开发和打包Chrome扩展, 支持热重载。

## 目录结构
```
.
├── app --------------------------- Chrome扩展主要文件目录
│   ├── icons --------------------- Chrome扩展图标目录
│   ├── manifest.json ------------- Chrome扩展配置文件
│   └── scripts ------------------- Chrome扩展脚本文件目录
│       ├── background.js --------- background脚本
│       ├── chromereload.js ------- 热重载脚本
│       └── content.js ------------ content脚本
├── build ------------------------- webpack配置目录
├── dist -------------------------- 编译生成后的Chrome扩展文件
├── gulpfile.js ------------------- gulp自动化脚本配置
├── ui ---------------------------- popup和option页面UI
```

## 开发

1. 编译Chrome脚本
```
yarn install
yarn dev
```

2. 编译UI
```shell
$ cd ui
$ yarn install
$ yarn watch
```

然后使用 Chrome 加载`dist`目录生成的扩展文件。

## 替换 UI 框架

默认的 UI 框架是使用`vue-cli`生成的`vue.js`项目，可以替换为 `ReactJs`等其它框架，只需要框架编译后的文件生成到`dist/ui`目录即可，并修改`gulpfile.js`自动华脚本中的 UI 脚本编译命令即可。