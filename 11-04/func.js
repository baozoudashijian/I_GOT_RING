// 函数也是对象

var obj = {
    name: 'f',
    length: 2,
    params: ['x', 'y'],
    functionBody: 'console.log("hello world")'
}

objGong = {
    call: function(x) {
        eval(x.functionBody)
    }
}

obj.__proto__ = objGong
obj.call(obj)