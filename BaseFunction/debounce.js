function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// test

function task() {
  console.log("run task");
}

const debounceTask = debounce(task, 1000);

debounceTask();
setTimeout(() => {
  debounceTask();
}, 200);
