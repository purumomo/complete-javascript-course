const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'jj',
  movements: [1000, 2, 3, 4, 5],
  interestRate: 1,
  pin: 1,
};
const account = [account1, account2, account3, account4, account5];
//flat方法
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

//flat方法只会搞定一层 flat(进入的层数)
const 深层arr = [[[1, 2], 3], [4, [5, 6]], [7, 8, 9], 6, 8];
console.log(深层arr.flat(2)); //[Array(2), 3, 4, Array(2), 7, 8, 9, 6, 8]

const accountMovement = account.map(acc => acc.movements);
console.log(accountMovement);
const 所有movmenets = accountMovement.flat(); //最后在一起
console.log(所有movmenets)
const overalBalance = 所有movmenets.reduce((acc,mov) => acc + mov,0);
console.log(overalBalance)

//chain起来
const overalBalance1 = account
.map(acc => acc.movements)
.flat()
.reduce((acc,mov) => acc + mov,0);
console.log(overalBalance1)

//flatmap方法 就是把flat和map拼了起来
const overalBalance2 = account
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance1);