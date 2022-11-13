//为了解构对象 我们需要用的花括号
//在很多参数的情况下 能够更好用
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours:{
    thu:{
        open:12,
        close:22,
    },
    fri:{
        open:11,
        close:23,
    },
    sat:{
        open:0,
        close:24,
    },
  },
  order:function(kaishiXuhao,zhuyaoXuhao){
    return [this.starterMenu[kaishiXuhao],this.mainMenu[zhuyaoXuhao]];
  },
  //一个点菜函数 注意这里的括号 function({数组的变量名}) 也就是解构
  //再给他加一个默认值
  orderPeisong:function({kaishiXuhao = 1,zhuyaoXuhao = 0,time = '20:00',address}){
    console.log(
      `收到订单${this.starterMenu[kaishiXuhao]} 和${this.mainMenu[zhuyaoXuhao]}
      会在${address}送到${time} `
    );
  },
  };
  restaurant.orderPeisong({
    time:'22:30',
    address:'BNB',
    zhuyaoXuhao:2,
    kaishiXuhao:1,
  });

    restaurant.orderPeisong({
      time: '22:00',
      address: 'AAA',
      zhuyaoXuhao: 1,
      //这一个没有设定值 直接就用的默认值
    });






  //从对象中提取变量-也是解构变量的基础 可以让你编写更少的代码
  //其实就是把花括号里的东西定义成了一个变量 把他输出 就得到花括号里的东西
  const {name,openingHours,categories} = restaurant;
//   console.log(name, openingHours, categories);

  const {name:restaurantName,openingHours:Hours,categories:tags} = restaurant;
  console.log(restaurantName,Hours,tags);//直接把对象的冒号前的数据中包含的东西输出了



//默认变量 
const {menu=[],starterMenu:starts = []} = restaurant;
console.log(menu,starts);//menu是空 starts对应startMenu startMenu又对应对象里的数据 所以有

//变异变量 Mutating
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};
({a,b} = obj);//花括号不能直接赋值 因为它是一个代码块 直接加入阔话
console.log(a,b);


//嵌套对象-从res对象    中取 Open和Close的两个变量
const { fri:{open:o,close:c} } = openingHours;
console.log(o,c);
