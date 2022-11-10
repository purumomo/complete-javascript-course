'use strict';

var x = 1;
let y = 2;
const z = 3;

//使用了windows自带的声明
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//----------------
//this的问题 通常就是谁调用this的情况下就指向谁
console.log(this);//指向全局对象

const calcAge1 = function(birthYear){
  console.log(2037 - birthYear);
  console.log(this); //显示undefine
};
calcAge1(1991);

const calcAge2 = (birthYear) => {
  console.log(2037-birthYear);
  console.log(this);
}
calcAge2(1992);//显示window 这是因为arrow函数没有自己的关键词 因为window是全局变量 无法指向所以只能指向全局window

// JJ.calcAge2();//指向了jj这个对象
// const Ma = {
//   year:2017,
// };
// Ma.calcAge = JJ.calcAge2; //方法借用
// Ma.calcAge(2017);

// const f = JJ.calcAge2;//把函数变成一个值
// f();//undeifne 和calAge2()是一样的

//创建一个arrow函数


const JJ = {
  firstName: 'DD',
  year: 1991,
  calcAge2: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //解决办法1 -- 处理this都是undefine的情况
    const self = this; //给表达式加一个声明
    const isqianxinian = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);//false
    };

    //解决办法2-- 处理this用在箭头函数的情况 
    const isqianxinian1 = () => {
      console.log(this);//还是指向了这个函数
      console.log(this.year >= 1981 && this.year <= 1996);//false
    };
    isqianxinian();
    isqianxinian1();
  },
  //改为function(){} 函数表达式就可以了
  
  greet:  () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

JJ.greet();//hey undefined 这也是因为arrow function没有自己的key造成的
JJ.calcAge2();

//argument 用法key
const addExpr1 = function(a,b){
  console.log(arguments);
  return a+b;
};
addExpr1(3,4);
addExpr1(3,4,6,3,4);

var addArrow1 = (a,b) => {
  console.log(arguments);
  return a+b;
};

// addArrow1(1,2,3,4);//会显示arguments没有define
