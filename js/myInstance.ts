function myInstanceof(left: any, right: Function) {
  if (typeof right !== "function") {
    throw new Error("类型错误");
  }

  try {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while (true) {
      if (!proto) return false;

      if (proto === prototype) return true;
      proto = Object.getPrototypeOf(proto);
    }
  } catch (err) {
    throw err;
  }
}
function Person() {
  this.name = "aaa";
}
console.log(myInstanceof(function () {}, Object));
console.log(myInstanceof(function () {}, Function));
console.log(myInstanceof(function () {}, Person));
console.log(myInstanceof(new Person(), Person));
console.log(myInstanceof([], Person));
console.log(myInstanceof(1, Number));
