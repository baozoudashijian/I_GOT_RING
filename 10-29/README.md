# 坚持刷题第二天

## EventLoop
由于JS是单线程的，为了防止一个函数执行事件过长阻塞后面的代码，所以会先将同步代码压入执行栈中，一次执行，将异步代码推入异步队列，异步队列分为宏任务队列和微任务队列，因为宏任务队列执行的时间较长所以微任务队列要优于宏任务队列（JS这种执行机制称为EventLoop）。

+ 微任务：Promise.then、MutationObserver
+ 宏任务：setTimeout、setInterval

## new运算符实现机制
+ 首先创建一个新的空对象
+ 设置原型，将对象的原型设置为函数的prototype对象
+ 让函数的this指向这个对象，指向构造函数
+ 返回创建的对象

## ES常用新特性
+ const/let 用来声明变量，存在块级作用域。不存在变量提升
+ 变量的结构赋值
+ 模版字符串
+ 扩展运算符
+ 箭头函数
+ Promise

## Http状态码
+ 200：响应成功
+ 301：永久重定向
+ 302：临时重定向
+ 304：资源缓存
+ 403: 服务器禁止访问
+ 404：服务器资源未找到
+ 500、502：服务器内部错误
+ 504：服务器繁忙

## 浏览器本地存储
+ cookie
+ webStorage（localStorage、sessionStorage）

## 防抖
多次触发事件，事件处理函数只执行一次，并且是在触发操作结束时执行。也就是说，当一个事件被触发准备执行事件函数之前，会等待一定时间，如果没有再次触发，那么就执行，如果被触发了，那就本次作废，重新计时，最终执行事件函数。

## 节流
事件触发后，规定时间内，事件处理函数不能再次被调用。也就是说，在规定的时间内，函数只能被调用一次，且是最先触发调用的那次。

## 优化项目
+ 缓存利用：javacript和css文件缓存（添加exprise和etag）
+ 请求数量：合并样式和脚本文件、使用精灵图、首屏之外的文件按需加载
+ 请求带宽：压缩文件开启GZIP
+ CSS代码：避免使用css表达式、高级选择器、通配选择器
+ JavaScript代码：减少DOM操作次数
+ HTML代码：图片src属性为空、html中写style属性

## React项目优化
+ 添加key值
+ shouldComponentUpdate生命周期优化不需要重新更新的组件

## React中key的作用
Key是React用于追踪列表中元素被修改、被添加或者移除的标识

## 你对虚拟DOM和DIFF算法的理解
虚拟DOM本质上是JavaScript对象，是对真实DOM的抽象表现。状态更新时记录新树和旧树的差异最后把差异更新到真实的DOM。

## React的生命周期
+ constructor
+ getDerivedStateFromProps
+ shouldComponentUpdate
+ render
+ getSnopshotBeforeUpdate
+ componentDidUpdate
+ componentWillUnmount

## React组件之间通信方式
+ 父传子：props
+ 子传父：callback回调

## setState是同步还是异步
