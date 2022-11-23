# Javascript 基础问题

常遇到的一些基础问题

### 执行上线文/作用域链

> 作用域

    作用域是可访问变量的集合。
    JavaScript 局部作用域 只能在函数内部访问。
    局部变量在函数执行完毕后销毁。
    全局变量在页面关闭后销毁。


> 执行上线文

    1.全局执行上下文
    2.函数执行上下文
    3.eval函数执行上下文

>作用域延长

    // js中的某些语句可以延长作用域链
    try-catch的catch块
    with语句  

 ```javascript
    function url() {
        var s = '?debug=true'
        with(location) {
            console.log(s + href)// 此处可以访问到href
        }
    }
    try {
        throw new Error('error')
    } catch(err) { // catch并不是一个函数，执行到此处时 err被放到当前作用域链的最前端 
        console.log(err) // error
    }

```

### this/call/apply/bind



### 原型/继承

    每个函数都会创建一个prototype属性，这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法。实际上，这个对象就是通过调用构造函数创建的对象的原型。使用原型对象的好处是，在它上面定义的属性和方法都可以被对象实例共享。原来在构造函数中直接赋给对象实例的值，可以直接赋值给它们的原型。

总结

    每个构造函数都有一个原型对象（实例的原型），原型有一个constructor属性指回构造函数，而实例有一个内部指针指向原型。 在chrome、firefox、safari浏览器环境中这个指针就是__proto__，其他环境下没有访问[[Prototype]]的标准方式。

### Promise



### 深浅拷贝


###  事件机制/Event Loop


### js数据类型转换规则


### 立即执行函数