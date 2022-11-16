//连接运算符(opetional chainning) ?. 这个经常和无效运算符一起使用
//如果某个属性不存在.... 然后就会返回undefine
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
};

//我们在一个webapi中无法知道一个餐厅是否在星期一的时候开放
if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);//会得到undefine.open的错误 因为没有

//使用了连接运算符
console.log(restaurant.openingHours.mon?.open);//只有当都存在的时候 才会不显示undefine

//如果没有使用连接运算符
console.log(restaurant.openingHours?.mon?.open);//就会出现错误

//例子1 // 算出这个数组在几点开门 因为有些没有Open 这样子更方便
const days = ['mon','tues','wedne','thu','fri','sat','sun'];
for (const item of days){
    const open = restaurant.openingHours[item]?.open || 'closed';//||closed 可以添加默认值
    console.log(`在${item}这一天，我们在${open}点开门`);
};

//方法method 检查一个方法是否存在
console.log(restaurant?.order?.(0,1) ?? '没有这个函数');
console.log(restaurant?.orderPasta?.(0,1) ?? '没有这个函数');

//数组array 检查一个数字是否存在
console.log(days[9] ?? '没有这个数组')









