'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, 年龄 ${age}, 出生于 ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //用同样的变量名创建变量
      const firstName = 'JJ';

      output = '新的输出';

      const str = `你出生在千禧年, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); 同样的只能由内到外查找值
    console.log(millenial); //用同样的变量名创建变量 他只会找最近的值
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);


// console.log(age);
// printAge(); 只能又内到外查找值 同时函数也是一个值 这里只管全局 所以error

// Variables
console.log(me); //没有定义变量的时候不会出现
// console.log(job); const 和 let是声明了的值 不能采取Hositing
// console.log(year);

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

var x = 1;
let y = 2;
const z = 3;

//使用了windows自带的声明
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);