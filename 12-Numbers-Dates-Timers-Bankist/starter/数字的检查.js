console.log(23 === 23.0); //true

//基数 10 - 0 to 9
//Binary base 2 - 0 1 计算在js里会很奇怪
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

//把字符串转换成数字
console.log('23'); //23
console.log(Number('23')); //23
console.log(+'23'); //23

//对文本进行分析并且结构化
console.log(Number.parseInt('30px', 10)); //30
console.log(Number.parseInt('e23', 10)); //NaN

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

// console.log(parseFloat('2.5rem')) //2.5
// 检查是否是一个数字
console.log(Number.isNaN(20)); //false 因为这是一个常规的值
console.log(Number.isNaN('20')); //false 因为这是一个常规的值
console.log(Number.isNaN(+'20X')); //true
//控制台中输入23/0 也会出现Infinity
console.log(Number.isNaN(23 / 10));

console.log(Number.isFinite(23 / 10)); //true

//检查是否是数字的isFinite
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //falses
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(123.0)); //true
