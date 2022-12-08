const movements = [430, 1000, 700, 50, 90];
console.log(movements);

//EQUALITY
console.log(movements.includes(-500)); // 因为不存在所以false

//CONDITION
console.log(movements.some(mov => mov === -500));//和上面的includes一样

//这样看来some可以在很大的范围内进行筛选
const 任意取款 = movements.some(mov => mov > 100);
console.log(任意取款);

const account4 = {
    movements: [1,2,3,4,5,-1],
}
//Every方法
console.log(movements.every(mov => mov >0)); //true
console.log(account4.movements.every(mov => mov >0)); //false

//Separate callback 单独回调
const 取钱 = mov => mov > 0 ;
console.log(movements.some(取钱))
console.log(movements.every(取钱))
console.log(movements.filter(取钱))