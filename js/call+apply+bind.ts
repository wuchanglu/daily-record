Object.defineProperty(Function.prototype, "myCall", {
  enumerable: false,
  writable: false,
  value(context, ...args) {
    const that = context || Window;
    Object.defineProperty(that, "_fn", {
      enumerable: false,
      value: this,
    });
    const res = that["_fn"](...args);
    delete that["_fn"];
    return res;
  },
});

function Test(a) {
  console.log(this.name, a);
}
//@ts-ignore
Test.myCall({ name: "章三" }, 1111);
