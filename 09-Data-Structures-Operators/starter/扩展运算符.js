//扩展运算符


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function(sucai1,sucai2,sucai3){
    console.log(`你的意大利面材料使用了${sucai1},${sucai2},${sucai3}`);
  },
};


const arr = [11,12,13];
const badNewArr = [13,4,21,arr[0],arr[1],arr[2],];
console.log(badNewArr);

for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
};

const newArr = [1,2,...arr];//...取出arr里的所有数字
console.log(newArr);

//记录所有人的记录
console.log(...newArr);
console.log(1,2,3,4,5,...newArr);//这在编写数组里很有用

//扩展运算符可以从数组中提取所有元素 而且她不会创建新的变量
const newMenu = [...restaurant.mainMenu, 'JJBB'];
console.log(newMenu);

//复制数组
const shuzu = [...restaurant.mainMenu];
//加入两个数组 包含启动菜单和主菜单
const menuaerfa = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menuaerfa);

//扩展运算符适用于所有可以迭代的对象 (数组，字符串，映射，集合)不是对象
const str = 'JJBom';
const letters = [...str,'','S.'];
console.log(letters);
console.log(...str);
// console.log('j','o',`${...str}`); //多个值用逗号分割，只在传递数组或者构建新数组的时候反应

//制造意大利面函数
// const chenfen = [
//   prompt('来做意大利面! sucai?'),
//   prompt('来做意大利面! sucai2?'),
//   prompt('来做意大利面! sucai3?'),
// ];

// console.log(chenfen);
// restaurant.orderPasta(...chenfen);

//对象
const newRes = {foundedin :115514,...restaurant,founder:'GUisdjaisdjaw'};
console.log(newRes);

//数组的浅拷贝 同样也可以使用
const resCopy = {...restaurant};
resCopy.name = 'JJJJJJRRR';
console.log(resCopy);
console.log(restaurant);