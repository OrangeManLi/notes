# js 面试题

### 1.JS 中 typeof 与 instanceof 的区别

JavaScript 中 typeof 和 instanceof 常用来判断一个变量是否为空，或者是什么类型的。但它们之间还是有区别的：

- typeof

  **typeof 是一个一元运算，放在一个运算数之前，运算数可以是任意类型。**
  它返回值是一个字符串，该字符串说明运算数的类型。typeof 一般只能返回如下几个结果：
  **number,boolean,string,function,object,undefined**。我们可以使用 typeof 来获取一个变量是否存在，如 if(typeof a!="undefined"){alert("ok")}，而不要去使用 if(a) 因为如果 a 不存在（未声明）则会出错，对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。

- instanceof

  instance：实例,例子
  a instanceof b?alert("true"):alert("false"); //a 是 b 的实例？真:假
  **instanceof 用于判断一个变量是否某个对象的实例，**如 var a=new Array();alert(a instanceof Array); 会返回 true，同时 alert(a instanceof Object) 也会返回 true;这是因为 Array 是 object 的子类。再如：function test(){};var a=new test();alert(a instanceof test) 会返回
  谈到 instanceof 我们要多插入一个问题，就是 function 的 arguments，我们大家也许都认为 arguments 是一个 Array，但如果使用 instaceof 去测试会发现 arguments 不是一个 Array 对象，尽管看起来很像。
  另外：
  测试 var a=new Array();if (a instanceof Object) alert('Y');else alert('N');
  得'Y’
  但 if (window instanceof Object) alert('Y');else alert('N');
  得'N'
  所以，这里的 instanceof 测试的 object 是指 js 语法中的 object，不是指 dom 模型对象。
  使用 typeof 会有些区别
  alert(typeof(window)) 会得 object

---

### 2.JS 中 apply()和 call()方法的区别

区分 apply,call 就一句话

    foo.call(this, arg1,arg2,arg3) == foo.apply(this, arguments)==this.foo(arg1, arg2, arg3)

call, apply 都属于 Function.prototype 的一个方法,它是 JavaScript 引擎内在实现的,因为属于 Function.prototype,所以每个 Function 对象实例,也就是每个方法都有 call, apply 属性.既然作为方法的属性,那它们的使用就当然是针对方法的了.这两个方法是容易混淆的,因为它们的作用一样,只是使用方式不同.

**相同点:两个方法产生的作用是完全一样的**

**不同点:方法传递的参数不同**

**call, apply 作用就是借用别人的方法来调用,就像调用自己的一样.**

可见,A, B 类都有一个 message 属性(面向对象中所说的成员),A 有获取消息的 getMessage 方法,B 有设置消息的 setMessage 方法,下面来显示 call 的威力.

    var b = new B();
    //给对象a动态指派b的setMessage方法,注意,a本身是没有这方法的!
    b.setMessage.call(a, "a的消息");
    //下面将显示"a的消息"
    alert(a.getMessage());
    //给对象b动态指派a的getMessage方法,注意,b本身也是没有这方法的!

从 b.setMessage.call(a, “a 的消息”) 等效于 a.setMessage( “a 的消息”) 可以看出, “a 的消息”在 call 中作为一个参数传递.

---

### 3.javascript Prototype constructor 的理解

#### Prototype 属性

- a) **Prototype:每一个函数都包含一个 prototype 属性**，这个属性指向的是一个对象的引用；而对已每一个函数（类）的实例都会从 prototype 属性指向的对象上继承属性，换句话说通过同一个函数创建的所有对象都继承一个相同的对象。

- b) 通过 new 关键字和构造函数创建的对象的原型，就是构造函数的 prototype 指向的那个对象

#### function 函数就是对象

---

### 4.js 之事件冒泡和事件捕

\*冒泡型事件：事件按照从最特定的事件目标到最不特定的事件目标(document 对象)的顺序触发。
IE 5.5: div -> body -> document
IE 6.0: div -> body -> html -> document
Mozilla 1.0: div -> body -> html -> document -> window
