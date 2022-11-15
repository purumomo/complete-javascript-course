//...放在左边是打包 放在右边是解包!!!!
//第一部分 ---- 解构
const arr = [1, 2, 3, ...[4, 5, 6]];

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others); // 1，2 [3,4,5,6]
//这个others把其他数字变成了一个数组 所以有点像是解构

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderPasta: function (sucai1, sucai2, sucai3) {
    console.log(`你的意大利面材料使用了${sucai1},${sucai2},${sucai3}`);
  },
  orderPizza: function (zhuyaochengfen, ...qitachengfen) {
    console.log(zhuyaochengfen, qitachengfen);
  },
};

//其余元素otherFood必须是最后一个元素
const [pizza, , JJBBA, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, JJBBA, ...otherFood);

//对象解构得时候 不能用...
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//第二部分 ---- 函数 把所有的数字打包到一个数组中
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum = sum + numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(4, 2, 4, 15, 1);
add(2, 9, 13, 5);

const x = [23, 5, 7];
add(...x); //先拆开 后合并
//...放在左边是打包 放在右边是解包!!!!
restaurant.orderPizza('caimeidanggao', 'aadddwww', 'jidan', 'yangcong');
restaurant.orderPizza('123');
