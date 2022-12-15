//BigInt 原始数据类型 是es2020出现的新的
console.log(2 ** 52 - 1); //4503599627370495
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 + 1); //9007199254740992
console.log(2 ** 53 + 2); //9007199254740994
console.log(2 ** 53 + 3); //9007199254740996
console.log(2 ** 53 + 4); //9007199254740996 这些数字都不准确 所以有了BigInt

console.log(428937498272375203572472034); //4.289374982723752e+26
console.log(428937498272375203572472034n); //428937498272375203572472034n
console.log(BigInt(428937498272375203572472034)); //428937498272375209566666752n

//Operations
console.log(10000n + 10000n); //20000n
console.log(892374832019724073048n * 8340237183408309n);
const huge = 2389748923774134n;
const num = 23;
console.log(huge * BigInt(num)); //54964225246805082n

console.log(20n > 15); //true
console.log(2n === 20); //false
console.log(typeof 20n); //bigint
console.log(20n == '20'); //true

console.log(huge + 'is REALLY big !!');

//除法的显示
console.log(10n / 3n); //3n
console.log(10 / 3); //3.3333333333333335
