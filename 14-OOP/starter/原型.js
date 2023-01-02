//原型
//JS中每一个函数都有自己的一个原型() 原型是一种特殊的对象
//当你在javascript中创建一个对象的时候，它会继承来自原型的属性和方法
//如果你在原型中定义了一个方法，则所有继承该原型的对象都可以有哪个方法

//原型继承
console.log(人.prototype);
人.prototype.calcAge = function () {
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
console.log(Jacl.species, Max.species); //类人猿 类人猿

console.log(Jacl.hasOwnProperty('firstName')); //true
console.log(Jacl.hasOwnProperty('species')); //false
