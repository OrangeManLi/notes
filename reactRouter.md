# React router



## 实现核心原理

### 一 history模式原理

1.改变路由

    history.pushState

2.监听路由

    popstate事件

### 二 hash模式原理

1.改变路由

    通过window.location.hash 属性获取和设置 hash 值

2.监听路由

    onhashchange

```js
     window.addEventListener('hashchange',function(e){
        /* 监听改变 */
    })
```

## 当地址栏改变url，组件的更新渲染都经历了什么？

😊😊😊
拿**history**模式做参考。当url改变，首先触发histoy，调用事件监听**popstate**事件， 触发回调函数**handlePopState**，触发history下面的setstate方法，产生新的*location*对象，然后通知Router组件更新location并通过context上下文传递，switch通过传递的更新流，匹配出符合的Route组件渲染，最后有Route组件取出context内容，传递给渲染页面，渲染更新。
