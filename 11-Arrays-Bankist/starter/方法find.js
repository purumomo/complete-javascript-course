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
const account = [account1, account2, account3, account4];

//Find 用来检查 
//和Filter 有点类似
//find就是用来寻找一个元素
//find函数只返回函数本身
arr = [1,2,3,4,5,6,7,8,-1]
const first = arr.find(mov => mov < 0);
console.log(arr);
console.log(first);
console.log(account);
const accounta = account.find(acc => acc.owner === 'Jessica Davis');
console.log(accounta);
