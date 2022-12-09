//FROM FILL

//传统的创建数组的方式

const arr = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7,8)); //[1, 2, 3, 4, 5, 6, 7, 8]

//空数组 + 填充数组
const x = new Array(7);
console.log(x); //[空属性 × 7]

console.log(x.map(() => 5)); // [空属性 × 7]


//填充数组的方法
// x.fill(1);  [1, 1, 1, 1, 1, 1, 1]
x.fill(1,3,5) //代表着从第3个开始填充 到第5个开始结束 
console.log(x); // [空属性 × 3, 1, 1, 空属性 × 2]

arr.fill(23,4,6); 
console.log(arr); //[1, 2, 3, 4, 23, 23, 7]

//Array from方法
const y = Array.from({length:7},() => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1]

const z = Array.from ( {length:7},(_,i) => i+1); //cur这个变量不一定一定要这样
console.log(z);

