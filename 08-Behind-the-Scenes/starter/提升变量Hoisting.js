'use strict';

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// 三种函数的用法 Hosting 只有第一种声明函数方法可以
console.log(addDecl(2, 3));
// console.log(addExpr(2,3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example var的用法就是全局上都可以用 不管作用域
console.log(undefined);//!=代表的是false 但是 hoisting到了前面 它的值本身是undefine 所以输出
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('删除了所有产品');
}
