const obj = {
  a: "1",
  b: "2",
};
// 不支持值为undefined、函数和循环引用的情况
const cloneObj = JSON.parse(JSON.stringify(obj));

function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 如果出现循环引用，则 返回缓存的对象，防止递归进入死循环
  if (cache.has(obj)) return cache.get(obj);
  // 使用对象所属的构造函数再建一个新对象
  let cloneObj = new obj.constructor();
  cache.set(obj, cloneObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache);
    }
  }

  return cloneObj;
}

// test

const testObj = { name: "OK", address: { x: 100, y: 100 } };
testObj.a = testObj;
testObj.tttt = "我的";
const newObj = deepClone(testObj);
console.log(newObj.address === testObj.address);
console.log(newObj);

// 方法一 深拷贝通常使用JSON.parse(JSON.stringify(object))来实现， 但是该方法也是有局限性的：

// 会忽略undefined
// 会忽略symbol
// 不能序列化函数
// 不能解决循环引用的对象

// 方法二  MessageChannel 方案
function structuralClone(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = (ev) => resolve(ev.data);
    port1.postMessage(obj);
  });
}
var obj2 = { a: 1, b: { c: 2 } };
obj2.b.d = obj2.b;
// 注意该方法是异步的 // 可以处理 undefined 和循环引用对象
const test2 = async () => {
  const clone = await structuralClone(obj2);
  console.log(clone);
  console.log(clone === obj2);
};
test2();
