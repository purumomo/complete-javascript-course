'use strict';

//构造函数 是一个完全正常的函数
//1,创建一个新的对象{}
//2,调用函数 this = {}
//3,将这个{} 连接到 原型
//4,从构造函数中自动返回
const 人 = function(firstName,birthYear){
    this.firstName = firstName; //参数传递
    this.birthYear = birthYear;

    //绝对不要在构造函数中创建函数  X 降低性能 你可以用原型
    this.calcAge = function(){
        console.log(2022 - this.birthYear);
    };
};

const Jojp = new 人('JoJp',1997);
console.log(Jojp); //人 {firstName: 'JoJp', birthYear: 1997}

const Max = new 人('Max',1993);
const Jacl = new 人('Jacl',1234);
console.log(Max,Jacl);


const ZhouJay = 'ZhouJay'
//instanceof 运算符用于检测构造函数的原型 是否出现在某一个实列对象的原型链上
console.log(Jojp instanceof 人); //true
console.log(ZhouJay instanceof 人)// false

//原型
//JS中每一个函数都有自己的一个原型() 原型是一种特殊的对象
//当你在javascript中创建一个对象的时候，它会继承来自原型的属性和方法
//如果你在原型中定义了一个方法，则所有继承该原型的对象都可以有哪个方法

//原型继承
console.log(人.prototype);
人.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};

//所有实例都共享这个方法
Jojp.calcAge(); //25
Max.calcAge(); // 29
//每一个对象都有这个
//将他设置成原型
console.log(Jacl.__proto__); 
console.log(Jacl.__proto__ === 人.prototype); //true

console.log(人.prototype.isPrototypeOf(Jacl)); //true
console.log(人.prototype.isPrototypeOf(Max)); //true
console.log(人.prototype.isPrototypeOf(人)); //false

//在原型上设置属性
人.prototype.species = '类人猿';
console.log(Jacl.species,Max.species); //类人猿 类人猿

console.log(Jacl.hasOwnProperty('firstName')); //true
console.log(Jacl.hasOwnProperty('species')); //false



//原型继承以及内置对象的原型链
console.log(Jacl.__proto__);
//这里就是原型链的顶部
console.log(Jacl.__proto__.__proto__);
console.log(Jacl.__proto__.__proto__.__proto__); //到这一步就没有了

console.dir(人.prototype.constructor)//这里可以得到函数本身

//这里可以查询所有的方法
const arr = [1,2,3,4,5,6] // new Array === []
console.log(arr.__proto__) //[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(arr.__proto__ === Array.prototype) //true

console.log(arr.__proto__.__proto__);

//添加了一个新的方法
//不要养成这个习惯 最好是用于自己的小项目
Array.prototype.jiba = function(){
    return[...new Set(this)]
};
console.log(arr.jiba()); //[1, 2, 3, 4, 5, 6]
const h1 = document.querySelector('h1');
console.dir(x=> x + 1); //anonymous()

//ES6 类CLASS

//类表达
// const PersonCL = class {

// }
//类声明
class PersonCL {
    constructor(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;  
    };
    //方法会被添加到原型中
    calcAge(){
        console.log(2022 - this.birthYear)
    }
}

const JJBOM = new PersonCL('JJBOM',1949);
console.log(JJBOM);//PersonCL {firstName: 'JJBOM', birthYear: 1949}
JJBOM.calcAge() //73
console.log(JJBOM.__proto__ === PersonCL.prototype)//true
PersonCL.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
}
JJBOM.greet(); //Hey JJBOM



//1.CLASS没有吊起 也就是可以在声明之前使用
//2.CLASS也是第一级 可以在函数中返回
//3.CLASS可以用严格模式进行