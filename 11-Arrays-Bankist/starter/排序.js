//字符串
const owners = ['jonas','zacj','Adm','Martha'];
console.log(owners.sort());
console.log(owners)

//数字
const movements = [200,450,-400,3000,-650,-130,70,1300];
console.log(movements);

//return < 0, A,B (保持顺序)
//return > 0, B,A (切换顺序)

// //下降
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
// });
// console.log(movements);

// //上升
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
// });
// console.log(movements);

movements.sort((a,b) => a - b);
console.log(movements)

movements.sort((a,b) => b - a);
console.log(movements)