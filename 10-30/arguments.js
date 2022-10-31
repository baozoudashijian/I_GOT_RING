// 匿名函数
var fn = function() {
    console.log(this)
    console.log(arguments)
}

fn.call({a: '1'}, 1, 2)
fn.apply({a: '2'}, [3, 4])

// 具名函数
function fn2() {
    console.log(this)
    console.log(arguments)
}
fn2.call({a: '3'}, 5, 6)
fn2.apply({a: '4'}, [7, 8])

// 箭头函数
var fn3 = () => {
    console.log(this)
    console.log(arguments, '1231')
}
// this无效，箭头函数不存在this node中是{} 浏览器中是window
// arguments 浏览器中报错，node中貌似打印的是global
fn3.call({a: '5'}, 9, 10) 
fn3.apply({a: '6'}, [9, 10])

var fn4 = (...arguments) => { // 只能接收到第一个参数
    console.log(this)
    console.log(arguments)
}
// 不论是call还是apply最终通过...得到的参数都是一个数组
fn4.call({a: '7'}, 11, 12) 
fn4.apply({a: '8'}, [13, 14])