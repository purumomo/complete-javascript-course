//类型转换 typer conversation
const inputYear = '1991'; // 因为这是一个字符串 所以不会被当作成数字
console.log(Number(inputYear),inputYear);//手动转换
console.log(Number(inputYear) + 18);

const inputYearShuzi = 1991;//这种情况就可以添加成功
console.log(inputYearShuzi + 18);

//尝试把字符串直接转换为数字
console.log(Number('JJBOM'));//NaN 代表无效数字
console.log(typeof NaN);//这里能输出数字 也表示它是一个无效数字 但是也是一个数字

console.log(String(23), 23);


//强制转换 type coercion
console.log('I AM' + 123 + 'YEARS OLD');
console.log('23' - '10' - 3);
console.log(23 * 10);
console.log("23" * "10");

let n = '1' + 1;
n = n -1;
console.log(n);

