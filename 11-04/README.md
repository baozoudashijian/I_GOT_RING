# 坚持刷题第三天

## 常用的hooks有哪些
+ useState
+ useEffect
+ useMemo
+ useCallback
+ useContext

## Redux、React-Redux

### Redux实现流程
用户页面行为触发一个Action，然后Store调用Reducer，并且传入两个参数：当前State和收到的Action。Reducer会返回新的State。每当State更新后view会根据state触发重新渲染。

### React-Redux
+ Provider：从最外部封装了整个应用，并向connect模块传递store
+ Connect
    + 包装原组件，将state和action通过props的方式传入到原组件内部
    + 监听store tree变化，使其包装的原组件可以响应state的变化

## React元素与组件的区别
组件是由元素构成的。元素数据结构是普通对象，而组件数据结构是类或纯函数。
