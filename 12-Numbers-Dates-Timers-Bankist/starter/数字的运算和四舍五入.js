//数学的运算

//幂的运算 SQRT
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

//Math中的求最大值
console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

console.log(Math.min(5, 18, 23, 11, 2)); //NaN

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314....

//之前的生成随机值
console.log(Math.trunc(Math.random() * 6) + 1);

const 随机整数 = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(随机整数(10, 20));

//四舍五入
console.log(Math.trunc(23.123)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.9)); //24
console.log(Math.ceil(23.9)); //24

//返回一个小于等于给定数字最小的整数
console.log(Math.floor(23.9)); //23
console.log(Math.floor('23.9')); //23

console.log(Math.trunc(-23.9)); //-23
console.log(Math.floor(-23.9)); //-24

//小数 tofixed 会返回一个字符串而不是数字 保留小数点后两位
console.log((2.7).toFixed(0)); //是一个字符串3
console.log((2.345).toFixed(3)); //2.345
console.log(+(2.345).toFixed(2)); //2.35
