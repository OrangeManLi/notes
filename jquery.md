#理解jquery

###jquery 插件

jQuery为开发插件提拱了两个方法，分别是：

jQuery.fn.extend();

jQuery.extend();

####jQuery.fn

    jQuery.fn = jQuery.prototype = {
        init: function( selector, context ) {//….
         //……
    };
    
原来 jQuery.fn = jQuery.prototype.对prototype肯定不会陌生啦。

虽然 javascript　没有明确的类的概念，但是用类来理解它，会更方便。

jQuery便是一个封装得非常好的类，比如我们用 语句　$(“#btn1″) 会生成一个 jQuery类的实例。
