// ||代表着or 可以返回第一个true值

//逻辑运算符 可以使用任意数据类型 他们也可以返回任意数据类型
//被称作为 短路求值(short-ciruiting)
//下面这些没有被打印出来的 都是因为它们是false值
console.log('------ OR ------');
console.log(3 || 'JJ'); //3
console.log('' || 'JJBB'); //'jjbb'
console.log(true || 0); // true
console.log(undefined || null); //null



console.log('' || 0 || false || undefined || 'Hello' || 23 ||null); //打印哪个呢 hello


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza: function (zhuyaochengfen, ...qitachengfen) {
    console.log(zhuyaochengfen, qitachengfen);
  },
};

restaurant.numGuests = 0; // 0是false 值 所以被跳过
const kerenshuliang1 = restaurant.numGuests ? restaurant.numGuests:100;
console.log(kerenshuliang1);

//空值是空的 undefine 不是0也不是''
const zhengquekeren = restaurant.numGuests ?? 10;
console.log(zhengquekeren); //0

//?? 左侧是undefine 或者 null时 返回右侧
const kerenshuliang2 = restaurant.numGuests || 200;
console.log(kerenshuliang2);

console.log('------ AND ------');//返回第一个false
console.log(0  && 'JJJJ'); //都为false 返回第一个 就不搞了
console.log(1  && 'JJJJ'); //1是true 所以返回第二个false值

console.log('HHH' && 23 && null &&'jjjj'); 

if (restaurant.orderPizza){//检查orderpizza是否存在
    restaurant.orderPizza('mantou','doujiang');
};


restaurant.orderPizza && restaurant.orderPizza(('mantou', 'doujiang'));

//---新的3个逻辑运算符---
const res1 = {
    name:'piertezhi',
    numGuests:0,
};

const res2 = {
    name:'meituan',
    laoban:'Richard',
};

// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;
// res1.numGuests ||= 10;
// res2.numGuests ||= 20;

res1.numGuests ??=10; //返回非空
res2.numGuests ??=10; //返回非空

res1.laoban = res1.laoban && '<返回第一个false>';
res2.laoban = res2.laoban && '<返回第一个false>';

console.log(res1);
console.log(res2);


// res1.numGuests = res1.numGuests && 10;
// res2.numGuests = res2.numGuests && 10;







