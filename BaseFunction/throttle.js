function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

function task() {
  console.log("run task");
}

const throttleTask = throttle(task, 1000);

throttleTask();
setTimeout(() => {
  throttleTask();
}, 1500);
