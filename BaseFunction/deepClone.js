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
