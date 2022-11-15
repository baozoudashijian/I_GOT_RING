// 交替执行是then的规定，并不是原理，我们只需要记得结论
// then方法非常的黑盒
Promise.resolve('x').then(() => {
    console.log(1)
}).then(() => {
    console.log(3)
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