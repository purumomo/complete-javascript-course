// 'use strict';

//---练习题

let lastName1 = 'DaJJ1hao';
let oldLastName = lastName1; //介于他结婚了
lastName1 = 'Valkeyuri';

console.log(lastName1);
console.log(oldLastName);

const Lucy = {
  firstName : 'Lucy',
  lastName: 'DAjjNUREN',
  age:27,
};

//浅拷贝{}方式1
const jiehunledeLucy = Lucy;
jiehunledeLucy.lastName = 'Valkeyuri';
console.log('jiehunzhiqian:', Lucy);
console.log('jiehunzhihou:',jiehunledeLucy);

// jiehunledeLucy = {};//也不可以作为空集直接使用 因为它是一个常量

const Lucy2 = {
  firstName: 'Lucy',
  lastName: 'DAjjNUREN',
  age: 27,
  family:['a','b'],
};

//浅拷贝{}方式2 新东西 被弹幕的人称作为浅拷贝 创建一个新的{}然后把值再放进去
const LucyCopy = Object.assign({}, Lucy2);
LucyCopy.lastName = 'AAAA'; //在这里更改值
LucyCopy.family.push('e','f'); //但是Object只能用户第一级 所以这里是添加一个数组的例子 这里相当于是添加到新的数组里 所有两个都改变了

console.log('jiehunzhiqian:', Lucy2);
console.log('jiehunzhihou:', LucyCopy);
