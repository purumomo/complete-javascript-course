//方法链
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const ETU = 1.1;
console.log(movements);

// 管道PIPLINE
const 收集 = movements
.filter(mov => mov > 0) 
.map(mov,i,arr => { 
    console.log(arr);
    return mov * ETU;
})
.reduce((acc,mov) =>  acc + mov,0);
console.log(收集);