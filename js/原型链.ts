/**
 * 每个实例对象都有自己的原型对象，可以通过__proto__属性去访问，
 * 这个原型对象和实例对象构造函数上的prototype是同一个对象
 * 然后这个原型对象也有它自身的原型对象，以此往上形成了原型链，
 * 终点是Object.prototype,Object.prototype的原型是null，语义上是空
 
 * 然后在我们访问对象属性的时候，会优先从对象自身查找，如果没有就沿着它的原型链往上查找
 * 如果查找到了对应的数据就返回，如果直到原型链终点都没找到就返回undefined
 
 * 在这个过程中需要注意的是获取对象的原型可以使用 Object.getPrototypeOf方法来获取
 * 然后Function函数也算是一个对象，然后他的原型等于他的prototypr
 */

function Person(name: string) {
  this.name = name;
}
Person.prototype.type = "人类";

const man1 = new Person("张三");

// Object.getPrototypeOf(man1) = Person.prototype
// Person.prototype.constructor = man1.constructor === Person
// man1.__proto__.__proto__ = Object.prototype
// man1.__proto__.__proto__.__proto__ = Object.prototype.__proto__ = null
