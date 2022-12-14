//数字分隔符 数字可以加下划线 Str 小数点后是不行的
const 太阳的直径 = 287_460_000_000;
console.log(太阳的直径); //287460000000

const 价格 = 345_99;
console.log(价格); //34599 又一次的无视了这个值

const transferFee1 = 15_00;
const transferFee2 = 1_500;

// const PI = 3.141__5219 这种是不被允许的
// console.log(PI)

console.log(Number('230000')); //230000
console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); //230
