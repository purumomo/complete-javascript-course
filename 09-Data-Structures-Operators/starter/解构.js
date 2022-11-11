'use strict';

//解构数组
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//首先创建需要的数组
//写一个订购食物的函数
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
}
const arr = [1,2,3,4];
const a = arr [0];
const b = arr [1];
const c = arr [2];

const [x,y,z] = arr; //赋值给数组的时候 x,y,z自己会成为数组的第一个元素 
//并且它并不是一个数组
console.log(x,y,z);
console.log(arr);

//解构的例子
let [main,,second] = restaurant.categories;
console.log(main,second);
const temp = main;
main = second;
second = temp;
console.log(main,second);

[main,second] = [second,main]; //因为是数据 可以直接替换
console.log(main,second);

//接受两个函数的返回值
const [starter, maindish] = restaurant.order(2,0);
console.log(starter,maindish);

//关于嵌套 就是一个数组位于另一个数组 嵌套解构
const shuzu = [2,3,4,[5,6]];
// const [i,,j] = shuzu;
// console.log(i,j); 2 4
const [i,,,[j,k]] = shuzu;
console.log(i,j,k); //2 5 6

//默认值
const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);//8 9 1
