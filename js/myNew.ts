export const myNew = (fn: Function, args: any[]) => {
  //创建一个对象
  const res = {};
  //将该对象的_proto_设置为构造函数的prototype
  Object.setPrototypeOf(res, fn.prototype);
  //将对象作为this去执行构造函数
  fn.apply(res, args);
  //返回新对象
  return res;
};
