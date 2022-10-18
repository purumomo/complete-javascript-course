//接下来讲一下表达式的问题 
3 + 4
1991 
true && false && !false //他们都可以算是一个表达式

if(23 > 10){
    const str = '23 is bigger'; //这一行是一个语句 但是'23 is bigger 是一个表达式'
}
// const me = 'jones';//这也是一个表达式
// console.log(`Im $ {2038-1997} years old if (23 > 10)`);


//三目运算符 可以让if else变得更简单
const age = 12;
// age >= 18 ? console.log('I can marriage'): 
// console.log('I like to drink water');

//去检查是否成年 
const drink = age >= 18 ? '成年了' : '没成年'; //这里整个运算符现在是一个表达式 //一个表达式生产一个值
console.log(drink);


let drink2;
if(age >= 18){
    drink2 = '成年了';
}else{
    drink2 = '没成年';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? '成年了' : '没成年'}`);

//code challenge#4 计算小费tip 账单bill
//%15的消费 tip bill 数据

// if 50<bill<300  tip = 0.15;

// if different tip=0.2;

const bill = 430;
let tip;
if(bill>50 && bill<300){
    tip = 0.15*bill;
}else{
    tip = 0.2*bill;
}
const total = bill + tip;
console.log(`the bill was ${bill},the tip was ${tip},the total value is ${total}`);


const bill2 = 275;
const tip2 = bill2 >=50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;

console.log(`the bill was ${bill2},the tip was ${tip2},the total value is ${bill2 + tip2}`);