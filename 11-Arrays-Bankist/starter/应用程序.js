'use strict';
/////////////////////////////////////////////////
// BANKIST 小程序

/////////////////////////////////////////////////
// 账户数据
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
  owner:'jj',
  movements:[1000,2,3,4,5],
  interestRate:1,
  pin:1,
}
const account = [account1, account2, account3, account4,account5];
/////////////////////////////////////////////////
// 所使用的元素
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// 所调用的函数 
//函数1 调用js用来更改html上的数值显示
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;


  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//函数2  创建一个累加使用Reduce的函数 来更改html上的总和
const labelBalance = document.querySelector('.balance__value');
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
 
//函数3 用来显示支出和收入额度
const calcDisplaySummary = function (acc) {
  const 收入 = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${收入}＄`;

  const 支出 = acc.movements
  .filter(mov => mov <= 0)
  .reduce((acc,mov) => acc + mov,0);
  labelSumOut.textContent = `${Math.abs(支出)}＄`;

  const 利息 = acc.movements.filter(mov => mov>0)
  .map(deposit => deposit * acc.interestRate/100)
  .filter((int,i,arr) => {
    // console.log(arr);
    return int >= 1;
  })
  .reduce((acc,int) => acc + int,0);
  labelSumInterest.textContent = `${利息}＄`

};
const 用户名缩写 = function (acc){
  acc.forEach(function (acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
}
用户名缩写(account);

const updateUI = function (acc){
  // 显示存取钱
  displayMovements(acc.movements);
  //显示Balance
  calcDisplayBalance(acc);
  //显示总账
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////
// 登录界面
let 当前账户;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();//必须要加上这个 这是以前的知识点
  console.log('已经登录了')

  当前账户 = account.find(acc => acc.owner === inputLoginUsername.value);
  console.log(当前账户);
  if (当前账户?.pin === Number(inputLoginPin.value)) {
    //登录显示UI
    labelWelcome.textContent = `欢迎回来,${当前账户.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //清除字段
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //更新UI
    updateUI(当前账户);
    console.log('登陆成功');
  }
});

/////////////////////////////////////////////////
// 转账功能
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = account.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    当前账户.balance >= amount &&
    receiverAcc?.username !== 当前账户.username
  ) {
  }
  //转换账户
  当前账户.movements.push(-amount);
  receiverAcc.movements.push(amount);
  //更新UI
  updateUI(当前账户);
});

/////////////////////////////////////////////////
// 关闭账户功能
btnClose.addEventListener('click',function(e){
  e.preventDefault();

  if (
    inputCloseUsername.value === 当前账户.username &&
    Number(inputClosePin.value) === 当前账户.pin
  ) {
    const index = account.findIndex(acc => acc.username === 当前账户.username);
    console.log(index);
    //.indexOF(23)
    //删除账户
    account.splice(index, 1);
    //隐藏UI
    containerApp.style.opacity = 0;
  } /////////////////////////////////////////////////
  // 关闭账户功能
  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
// 申请贷款功能
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  
  if(amount > 0 && 当前账户.movements.some(mov => mov >= amount * 0.1)){
    //添加movments
    当前账户.movements.push(amount);

    //updateUI
    updateUI(当前账户)
  };
});

let sorted = false;
/////////////////////////////////////////////////
// 实现排序功能
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(当前账户.movements, !sorted);
  sorted = !sorted;
});