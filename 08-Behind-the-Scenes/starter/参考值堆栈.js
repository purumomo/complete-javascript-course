'use strict';

//---------参考值的运用
let age = 30;
let oldage = age;
age = 31;
console.log(age); //这里会输出31 因为指向值变了
console.log(oldage);//这里会显示30 因为oldage指向的是对应30岁的age

const me = {
  name:'jjbom',
  age:30,
}
const friend = me;
friend.age = 28;
console.log('Me',me); //两个都会指向同一个堆
console.log('friend',friend);
