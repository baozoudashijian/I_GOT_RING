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

## 异步 - 代码烧脑原因

### 异步面试题
+ 获取图片的宽度（缓存能立马拿到，不缓存为0-监听onload事件）
+ 循环添加监听事件（var改成let）

### 回调的形式

### Promise
+ 处理多个success
+ then捕获异常
    + error回调捕获异常
    + 错误抛向控制台

### async/await
+ async和await都可以单独使用，但是特殊情况下必须加上async

## 面向对象

### 封装和继承
+ 封装：隐藏细节
+ 继承：复用
+ 多钛：

### 原型链
+ 对象prototype（共）
    + toString
    + keys
    + assign
+ 数组prototype（共）
    + slice
    + include
    + join
+ 函数prototype（共）
    + call
    + apply
    + bind

### this（对象和函数）
+ 函数也是对象
+ 函数是一等公民，不是对象的附属品
+ 函数参数拆成this和arguments

### new用法
+ 批量创建对象
+ 优化内存：提取公共方法
+ createSolider：封装隐藏细节

### 继承的写法
+ new就是把构造函数的写法固定下来
+ call继承私有属性
+ fakeHuman继承prototype属性 (Solider.prototype = Object.create(Human.prototype))
```
    function fakeHuman() { }
    fakeHuman.prototype = Human.prototype
    Solider.prototype = new fakeHuman() // 去除继承的私有属性
```

## 造轮子 - 组件实现思路

### 轮子分类
+ UI轮子

### 编程思想
+ 正交原则
+ 面向接口编程

### 封装组件
+ Tab
+ Sticky
+ Dialog

## 重构 - 代码优化的技巧

### 代码优化基本原则
+ 易读性优先
+ 如果不是性能瓶颈，就不要为了性能改写代码
+ 复杂性守恒原则

### 程序员三大难题
+ 变量命名
+ 缓存失效
+ 循环边界

## MVC双向绑定和单项绑定
+ 使用发布订阅优化代码：每次model获取数据后，还要手动调用去更新数据，代码有四处调用的地方。
+ 每次render都会更新#app的innerHTML，这可能会丢失用户写在页面上的数据（input）
    + 用户只要输入什么，就记录在JS的data中（数据绑定的初步思想出现了）
    + 不要粗暴的操作innerHTML，而是只更新需要更新的部位（虚拟DOM的初步思想出现了）
    + Angular是基于第一个思想，React是基于第二个思想
+ events能不能直接写在HTML上面，而不是写到JS里

### 双向绑定
+ 存在数据库的永久数据，存在页面上的临时数据
+ vue双向绑定
    + input改变数据vue中的data数据也会改变
    + vue中的data改变页面上的input也会改变
+ react单项绑定
    + input添加state（添加state后你只能通过触发监听事件的setState更新数据）
    + 添加监听事件
    + 触发监听事件，监听事件中的回调函数触发setState
    + 重新render数据（input更新数据）

## 数组操作

### slice将伪数组转化成数组
+ Array.prototype.slice.call(arrayLike)
+ [].slice.call(arrayLike)
+ Array.from(arrayLike)

