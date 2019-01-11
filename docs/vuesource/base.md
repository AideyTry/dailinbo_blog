# 第一课
电子书课件：https://ustbhuangyi.github.io/vue-analysis/  
做什么？哪些内容？技术栈？  
核心：数据驱动、组件化、响应式原理  
编译：parse、optimize、codegen  
扩展：event、v-model、slot、keep-alive、transition...  
生态： vue-router、vuex  
一、认识FLow  
    ```
    Flow是facebook出品的JavaScript静态类型检查工具。Vue.js的源码利用Flow做了静态类型检查，所以了解Flow有助于我们阅读源码。  
    类型检查是当前动态类型语言的发展趋势，而JavaScript是动态类型语言。所谓类型检查，就是在编译期尽早发现（由类型错误引起的）bug，又不影响代码运行。有利于大型项目的开发和维护。
    ```  

    1、Flow的工作方式  
        类型推断：通过变量的使用上下文类推断出变量类型，然后根据这些推断来检查类型。  
        类型注释：事先注释我们期待的类型,Flow会基于这些注释来判断。
        安装flow    npm install -g flow-bin
        使用flow之前先flow init 创建.flowconfig文件
    2、Flow在Vue.js源码中的应用。

二、Vue.js源码目录设计  
        
            src   
        ├── compiler        # 编译相关 
        ├── core            # 核心代码 
        ├── platforms       # 不同平台的支持
        ├── server          # 服务端渲染
        ├── sfc             # .vue 文件解析
        ├── shared          # 共享代码


core 目录包含了 Vue.js 的核心代码，包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等等。

这里的代码可谓是 Vue.js 的灵魂，也是我们之后需要重点分析的地方。  
总结：从 Vue.js 的目录设计可以看到，作者把功能模块拆分的非常清楚，相关的逻辑放在一个独立的目录下维护，并且把复用的代码也抽成一个独立目录。

三、vue源码构建  
   vue基于rollup构建工具构建的。webpack更强大，把图片，js，css编译成js.rollup更轻量级，只编译js.
   "build": "node scripts/build.js",通过node命令执行scripts目录下的build.js
    ```
        Runtime Only版本推荐。