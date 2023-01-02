//原型继承以及内置对象的原型链
console.log(Jacl.__proto__);
//这里就是原型链的顶部
console.log(Jacl.__proto__.__proto__);
console.log(Jacl.__proto__.__proto__.__proto__); //到这一步就没有了

console.dir(人.prototype.constructor); //这里可以得到函数本身

//这里可以查询所有的方法
const arr = [1, 2, 3, 4, 5, 6]; // new Array === []
console.log(arr.__proto__); //[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__);

//添加了一个新的方法
//不要养成这个习惯 最好是用于自己的小项目
Array.prototype.jiba = function () {
  return [...new Set(this)];
};
console.log(arr.jiba()); //[1, 2, 3, 4, 5, 6]
const h1 = document.querySelector('h1');
console.dir(x => x + 1); //anonymous()
