//余数运算符
console.log(5 % 2); //等于2余1
console.log(5 / 2); //5 = 2 * 2 + 2

console.log(8 % 3); //2
console.log(8 / 3); //2.66664
//可以判断是否是奇数偶数 因为偶数除以2余0
const 数字 = shu => {
  if (shu % 2 === 0) {
    console.log(`${shu}是一个偶数`);
  } else {
    console.log(`${shu}是一个奇数`);
  }
};
数字(123);
console.log(6 % 2); //5
