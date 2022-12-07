/////////////////////////////////////////////////
// 其余的学习的新方法和笔记

//map方法
//map可以返回数组
//forEach不能赋值给变量 但是map可以
const movements = [200, 450, -400, 3000, -650, -130, -70, 1300];

const EtoU = 1.1;

// const movementsUSd = movements.map(function(mov){
//   return mov * EtoU;
// //   return 23; //[23, 23, 23, 23, 23, 23, 23, 23]
// });

//用箭头函数替代上面
const movementsUSd = movements.map(mov => {
  mov * EtoU;
});

console.log(movements);
console.log(movementsUSd);

const movementsUSdfor = [];
for (const mov of movements) movementsUSdfor.push(mov * EtoU);
console.log(movementsUSdfor);

const AAA = movements.map((mov, i) => {
  if (mov > 0) {
    return `行为${i + 1}:你取了${mov}`;
  } else {
    return `行为${i + 1}:你存了${Math.abs(mov)}`;
  }
});
console.log(AAA);

//===================================================
//ForEach
//练习 获得首字母小写 后来使用foreach循环
const 创建用户名 = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) //map的用法 可以映射
      .join('');
  });
};
console.log(创建用户名(account));
console.log(account);

//===================================================
//Filter
//使用filter
const 存款 = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(存款);
//不适用filter
const 存款1 = [];
for (const mov of movements) {
  if (mov > 0) {
    存款1.push(mov);
  }
}
console.log(存款1);

//小挑战 写一个取款的函数
//使用filter
const 取款 = movements.filter(function (mov) {
  return mov < 0;
});
console.log(取款);
//不使用filter
const 取款1 = [];
for (const x of movements) {
  if (x < 0) {
    取款1.push(x);
  }
}
console.log(取款1);

//===================================================
//Reduce
console.log(movements);
const balance = movements.reduce(function (累加, 当前, i, 数组) {
  console.log(`迭代数据${i}:${累加}`);
  return 累加 + 当前;
}, 100);
console.log(balance);

//不使用Reduce的方法
let sum = 0;
for (const mov of movements) {
  sum = sum + mov;
}
console.log(sum);

//求数组中的最大值
//Reduce是为了简化数组变成一个简单的值
// console.log(movements);
// for(let i=0;i<=movements.length-1;i++){
//   let arr = [];
//   if(movements[i]<movements[i+1]){
//     arr.push(movements[i+1]);
//   }else{
//     arr.push(movements[i]);
//   }
// }return arr;
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max); //3000

// //方法链 尽量要少用
// const ETU = 1.1;
// console.log(movements);

// // 管道PIPLINE
// const 收集 = movements
// .filter(mov => mov > 0)
// .map(mov,i,arr => {
//     console.log(arr);
//     return mov * ETU;
// })
// .reduce((acc,mov) =>  acc + mov,0);
// console.log(收集);
