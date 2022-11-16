//for循环 + 和减少一些属性方便写

const duixiang = {
    a:'aaasd',
    b:'bdwdaad',
};

const weekdays = ['mon','tes','awl','jjbom','wdlonmak'];
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //加强对象
  duixiang,
  //略写属性
  [weekdays[0]]:{
    shuxing:1,
  }
};


//一般循环
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(let i=0;i<=menu.length-1;i++){
//     console.log(menu[i]);
// }

// //for of循环不需要计数器  只是给你当前的元素
// for (const item of menu) console.log(item);

// //当你需要输出索引+元素的时候
// for(const item of menu.entries()){
//     console.log(item);
// };

//解构
for(const[i,el] of menu.entries()){
    console.log(`${i +1}:${el}`);
};