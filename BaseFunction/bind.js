Function.prototype.myBind = function (oThis) {
  if (typeof this !== "function") {
    return;
  }
  var self = this,
    args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return self.apply(
      oThis,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
};

function foo() {
  console.log(this.a);
}
var obj = { a: 2 };
var bar = foo.myBind(obj);
bar();
