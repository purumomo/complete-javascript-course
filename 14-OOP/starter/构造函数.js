'use strict';

//构造函数 是一个完全正常的函数
//1,创建一个新的对象{}
//2,调用函数 this = {}
//3,将这个{} 连接到 原型
//4,从构造函数中自动返回
const 人 = function (firstName, birthYear) {
  this.firstName = firstName; //参数传递
  this.birthYear = birthYear;

  //绝对不要在构造函数中创建函数  X 降低性能
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};

const Jojp = new 人('JoJp', 1997);
console.log(Jojp); //人 {firstName: 'JoJp', birthYear: 1997}

const Max = new 人('Max', 1993);
const Jacl = new 人('Jacl', 1234);
console.log(Max, Jacl);

const ZhouJay = 'ZhouJay';
//instanceof 运算符用于检测构造函数的原型 是否出现在某一个实列对象的原型链上
console.log(Jojp instanceof 人); //true
console.log(ZhouJay instanceof 人); // false
