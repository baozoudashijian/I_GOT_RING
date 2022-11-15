// 一个promise.reslove会推迟两个then执行的顺序
Promise.resolve('x').then(() => {
    console.log(1)
}).then(() => {
    console.log(3)
    return Promise.resolve(3.5)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(7)
}).then(() => {
    console.log(9)
})

Promise.resolve('x').then(() => {
    console.log(2)
}).then(() => {
    console.log(4)
}).then(() => {
    console.log(6)
}).then(() => {
    console.log(8)
}).then(() => {
    console.log(10)
})