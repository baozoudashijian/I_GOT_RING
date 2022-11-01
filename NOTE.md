# JS进阶

## 你真的懂函数吗

### 函数声明
+ 匿名函数
+ 具名函数
+ 箭头函数

### 词法作用域
注意：只是分析，不能确定值（使用树结构图分析）

### Call Stack
+ 并列执行过程
+ 嵌套执行过程
+ 递归执行过程（例如：斐波拉契数列）

### this & arguments
+ JS之父帮你传入this
+ 默认.前面对象为this
+ 箭头函数和普通函数使用call调用函数，接受参数方式不同

### bind

### 函数柯里化
handleBars应用

### 高阶函数
+ 接受一个或多个函数作为输入
    + sort
    + forEach
    + map
    + filter
+ 输出一个函数
    + bind

注：高阶函数可以上次结果作为一次输入.

### 回调函数和构造函数
+ 回调函数：函数作为参数的函数（回调函数可以解决异步，但是回调函数和异步是两个东西，map参数也是回调函数，但是是同步代码）
+ 构造函数：返回对象的函数就是构造函数

## 异步-代码烧脑原因

### 异步面试题
+ 获取图片的宽度（缓存能立马拿到，不缓存为0-监听onload事件）
+ 循环添加监听事件（var改成let）