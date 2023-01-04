// Promise存在三个状态（state）pending、fulfilled、rejected

class Promise {
  // 构造器
  constructor(executor) {
    this.state = "pending";
    this.value = "";
    this.reason = "";
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    // 成功
    let resolve = (val) => {
      if (this.state === "pending") {
        this.value = val;
        this.state = "fulfilled";
      }
    };
    // 失败
    let reject = (rea) => {
      if (this.state === "pending") {
        this.reason = rea;
        this.state = "rejected";
      }
    };

    // 如果executor执行报错，直接执行reject
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    // 声明返回的promise2
    let promise2 = new Promise((resolve, reject) => {
      // 状态为fulfilled，执行onFulfilled，传入成功的值
      if (this.state === "fulfilled") {
        let x = onFulfilled(this.value);
        // resolvePromise函数，处理自己return的promise和默认的promise2的关系
        resolvePromise(promise2, x, resolve, reject);
      }

      // 状态为rejected，执行onRejected，传入失败的原因
      if (this.state === "rejected") {
        let x = onRejected(this.reason);
        resolvePromise(promise2, x, resolve, reject);
      }

      // 当状态state为pending时
      if (this.state === "pending") {
        // onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        });
        // onRejected传入到失败数组
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        });
      }
    });

    return promise2;
  }

  catch() {}
}

function resolvePromise(promise2, x, resolve, reject) {
  // 循环引用报错
  if (x === promise2) {
    // reject报错
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 防止多次调用
  let called;
  // x不是null 且x是对象或者函数
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      // A+规定，声明then = x的then方法
      let then = x.then;
      // 如果then是函数，就默认是promise了
      if (typeof then === "function") {
        // 就让then执行 第一个参数是this   后面是成功的回调 和 失败的回调
        then.call(
          x,
          (y) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            // resolve的结果依旧是promise 那就继续解析
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            reject(err); // 失败了就失败了
          }
        );
      } else {
        resolve(x); // 直接成功即可
      }
    } catch (e) {
      // 也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(e);
    }
  } else {
    resolve(x);
  }
}
