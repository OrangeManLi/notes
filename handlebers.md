# handlebers 学习笔记

[官网](http://handlebarsjs.com/)


Handlebars provides the power necessary to let you build semantic templateseffectively with no frustration.


http://segmentfault.com/a/1190000000342636?from=androidqq

###内置的 Helpers

>with helper

一般情况下，Handlebars 模板在计算值时，会把传递给模板的参数作为上下文。
不过也可以在模板的某个区域切换上下文，使用内置的 with helper即可。


	<divclass="entry"><h1>{{title}}</h1>
  		{{#with author}}
  		<h2>By {{firstName}} {{lastName}}</h2>
  		{{/with}}
	</div>


在使用下面数据作为上下文时：

	{
  	title:"My first post!",
  	author: {
    firstName: "Charles",
    lastName: "Jolley"}
	}
会得到如下结果：

	<divclass="entry"><h1>My first post!</h1><h2>By Charles Jolley</h2></div>
>each helper


>if helper

>unless helper

>log helper


