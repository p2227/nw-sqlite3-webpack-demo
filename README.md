## nw-sqlite3-webpack-demo
nw + sqlite3的小demo，用到了webpack + vue + jade
我的环境：win7 32位
一些预编译的环境要安装好，sqlite3说要安装vs2010，但我实际上还是安装了vs2013


```
npm install
npm start
```
drag `www` to `nw.exe`


## 目录分配
* `node_modules` 打包程序的node模块，是app所有的模块
* `src` 源代码，没打包压缩，没加nw外壳的源代码
* `www` nw运行的目录，webpack会构建，里面的node_modules是nw专用的，包含package.json
* `dist` 打包发布目录，暂时没想好怎么放

### src 目录下
* `common` functions or plugins that may use by both fontend and backend
* `db` database file
* `dao` this is a backend folder that connect with database
* `services` the backend bussiness codes
* `actions` this is a backend folder that connect with fontend
* `interfaces` this is a fontend folder that connect with backend
* `modules` the fontend bussiness modules
* `assets` some fontend statics sources( images / scss )