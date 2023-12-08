/**
 * 检查对象是否为空(对于不可枚举属性没有处理到)
 * @param target
 * @returns
 */
export const checkIsEmptyObject = (target: any) => {
  if (!target || typeof target !== "object") {
    throw new Error("请传入正确的数据类型");
  }
  try {
    return Boolean(Object.keys(target).length);
  } catch (error) {
    //目前覆盖的对象类型数据不够广
    return JSON.stringify(target) === "{}" || JSON.stringify(target) === "[]";
  }
};
