#js 面试题

###1.JS中typeof与instanceof的区别

JavaScript 中 typeof 和 instanceof 常用来判断一个变量是否为空，或者是什么类型的。但它们之间还是有区别的：

*  typeof

	**typeof 是一个一元运算，放在一个运算数之前，运算数可以是任意类型。**
	它返回值是一个字符串，该字符串说明运算数的类型。typeof 一般只能返回如下几个结果：
	**number,boolean,string,function,object,undefined**。我们可以使用 typeof 来获取一个变量是否存在，如 if(typeof a!="undefined"){alert("ok")}，而不要去使用 if(a) 因为如果 a 不存在（未声明）则会出错，对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。

*	instanceof

	instance：实例,例子
	a instanceof b?alert("true"):alert("false"); //a是b的实例？真:假
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

--------------------------------------------------------------------------------------------------------

###2.JS中apply()和call()方法的区别

区分apply,call就一句话

	foo.call(this, arg1,arg2,arg3) == foo.apply(this, arguments)==this.foo(arg1, arg2, arg3)
call, apply都属于Function.prototype的一个方法,它是JavaScript引擎内在实现的,因为属于Function.prototype,所以每个Function对象实例,也就是每个方法都有call, apply属性.既然作为方法的属性,那它们的使用就当然是针对方法的了.这两个方法是容易混淆的,因为它们的作用一样,只是使用方式不同.

**相同点:两个方法产生的作用是完全一样的**

**不同点:方法传递的参数不同**

**call, apply作用就是借用别人的方法来调用,就像调用自己的一样.**

可见,A, B类都有一个message属性(面向对象中所说的成员),A有获取消息的getMessage方法,B有设置消息的setMessage方法,下面来显示call的威力.

	var b = new B();
	//给对象a动态指派b的setMessage方法,注意,a本身是没有这方法的!
	b.setMessage.call(a, "a的消息");
	//下面将显示"a的消息"
	alert(a.getMessage());
	//给对象b动态指派a的getMessage方法,注意,b本身也是没有这方法的!

从 b.setMessage.call(a, “a的消息”) 等效于 a.setMessage( “a的消息”) 可以看出, “a的消息”在call中作为一个参数传递.

-----

###3.javascript Prototype constructor的理解

####Prototype属性

*	a) **Prototype:每一个函数都包含一个prototype属性**，这个属性指向的是一个对象的引用；而对已每一个函数（类）的实例都会从prototype属性指向的对象上继承属性，换句话说通过同一个函数创建的所有对象都继承一个相同的对象。

*	b) 通过new 关键字和构造函数创建的对象的原型，就是构造函数的prototype指向的那个对象
<<<<<<< HEAD

####function函数就是对象
----
