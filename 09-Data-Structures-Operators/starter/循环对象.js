//循环属性名称 key
//Object.keys()方法可以直接获得对象的属性名（键）
//循环一个数组


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


//属性名称 用Obeject.keys 
const shuxing = Object.keys(restaurant.openingHours);
console.log(shuxing);

//获得开业日的长度
let openStr = `我们要开${shuxing.length}天的营业,在`;
for(const day of shuxing){
    openStr = openStr + `${day}`
}

console.log(openStr);

//属性值
const value  = Object.values(restaurant.openingHours);
console.log(value);

//全部对象Entire 遍历
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for(const [keys,{open,close}] of entries){
    console.log(`在${keys}这天，我们开放在${open}时间，结束于${close}`);
};