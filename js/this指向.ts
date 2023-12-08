var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  },
};

//示例1
console.log(foo.bar()); //foo.value 走的Reference，并且Reference的base-value指向的是foo 是一个Object类型 所以this指向了foo
//示例2
console.log(foo.bar()); //foo.value 走的Reference，并且Reference的base-value指向的是foo 是一个Object类型 所以this指向了foo
//示例3
console.log((foo.bar = foo.bar)()); //走的getValue this指向全局环境，非严格模式下
//示例4
console.log((false || foo.bar)()); //走的getValue this指向全局环境，非严格模式下
//示例5
console.log((foo.bar, foo.bar)()); //走的getValue this指向全局环境，非严格模式下

/**
 * 
 函数调用的时候确定this的取值方式
    1.计算 MemberExpression 的结果赋值给 ref

    2.判断 ref 是不是一个 Reference 类型
        2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)

        2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)

        2.3 如果 ref 不是 Reference，那么 this 的值为 undefined
    3. 如果ref不是一个 Reference 类型 则this 的值为 undefined
 */
