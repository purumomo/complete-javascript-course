'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const account5 = {
//   owner: 'jj',
//   movements: [1000, 2, 3, 4, 5],
//   interestRate: 1,
//   pin: 1,
// };
const account6 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2022-12-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account7 = {
  owner: 'JJ',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 1,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account = [account6,account7];

'use strict';
/////////////////////////////////////////////////
// BANKIST 小程序

/////////////////////////////////////////////////
// 账户数据


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
//对时间进行格式化
const 格式化 = function(date,locale){
  const 计算过去 = (date1, date2) =>     
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const 过去 = 计算过去(new Date(),date);
  console.log(过去);

  if(过去 === 0) return '今天';
  if(过去 === 1) return '昨天';
  if(过去 <= 7) return `${过去} 天之前`
  // else{
  //   const 日 = `${date.getDate()}`.padStart(2, 0);
  //   const 月 = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const 年 = date.getFullYear();
  // return `${日}/${月}/${年}`;
  // };
  return new Intl.DateTimeFormat(locale).format(date);
};

//格式化数字函数

const formatCur = function(value,locale,currency){
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency, //使得每一个存取记录都可以
      }).format(value);
};

const displayMovements = function (acc, sort = false) 
{
  containerMovements.innerHTML = '';

  const movs = sort 
  ? acc.movements.slice().sort((a, b) => a - b) 
  : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]); 
    const displayDate = 格式化(date,acc.locale);

    const 格式化mov = formatCur(mov,acc.locale,acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${格式化mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//函数2  创建一个累加使用Reduce的函数 来更改html上的总和
const labelBalance = document.querySelector('.balance__value');
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc,mov) => 
  acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance,
  acc.locale,acc.currency);
};

//函数3 用来显示支出和收入额度
const calcDisplaySummary = function (acc) {
  const 收入 = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(收入, acc.locale, acc.currency);


  const 支出 = acc.movements
    .filter(mov => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(支出), acc.locale, acc.currency);


  const 利息 = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(
    利息,acc.locale,acc.currency);
};

const 用户名缩写 = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
用户名缩写(account);

//设置一个自动登出系统的功能
const 登录计时 = function(){
  const tick = function () {
    //并且把它转换成每分每秒
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);
      //调用时间 每秒钟都显示
      //调用并显示到ui
      labelTimer.textContent = `${min}:${sec}`;
      //减少一秒
      time--;
      //当只剩下0秒的时候 登出并且可视化
      if (time === 0) {
        clearInterval(timer);
        labelWelcome.textContent = `请重新登录,${当前账户.owner.split(' ')[0]}`;
        containerApp.style.opacity = 0;
      };

  };
  //设置一个5分钟时间
  let time = 30;
  tick();
  const timer = setInterval(tick, 1000);
  
  return timer;
};

const updateUI = function (acc) {
  // 显示存取钱
  displayMovements(acc);
  //显示Balance
  calcDisplayBalance(acc);
  //显示总账
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////
// 登录界面
let 当前账户;

//假设登入
// 当前账户 = account6
// updateUI(当前账户);
// containerApp.style.opacity = 100;

//创建一个API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  weekday: 'long', //添加了这一行 会显示As of Thursday, December 15, 2022 at 4:00 PM
};

const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat
// (当前账户.locale,
//   options
//   ).format(now); //这里的locale是代表着当地语言 当地环境



btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //必须要加上这个 这是以前的知识点
  console.log('已经登录了');





  当前账户 = account.find(acc => acc.owner === inputLoginUsername.value);
  console.log(当前账户);
  if (当前账户?.pin === Number(inputLoginPin.value)) {
    //登录显示UI
    labelWelcome.textContent = `欢迎回来,${当前账户.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //创建一个新的时间

    //清除字段
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    登录计时();
    //更新UI
    updateUI(当前账户);
    console.log('登陆成功');
  }
});

/////////////////////////////////////////////////
// 转账功能
btnTransfer.addEventListener('click', function (e) {
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
  //添加一个贷款时变动时间功能

  当前账户.movementsDates.push(new Date().toISOString());
  receiverAcc.movementsDates.push(new Date().toISOString());

  //更新UI
  updateUI(当前账户);
});

/////////////////////////////////////////////////
// 关闭账户功能
btnClose.addEventListener('click', function (e) {
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
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  //转换为四舍五入
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && 当前账户.movements.some(mov => mov >= amount * 0.1)) {
    //添加了时间间隔
    setTimeout(function () {
      //添加movments
      当前账户.movements.push(amount);

      当前账户.movementsDates.push(new Date().toISOString());
      //updateUI
      updateUI(当前账户);
    },3000);
  }
});

let sorted = false;
/////////////////////////////////////////////////
// 实现排序功能
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(当前账户.movements, !sorted);
  sorted = !sorted;
});

//假设你没有Movements这个代码块
//你需要从UI上面获取数值 并且SUM怎么办?

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    //从结果中获取数组
    document.querySelectorAll('.movements__value'),
    //映射这个初始函数转换成我们想要的带有数字的数组
    el => el.textContent.replace('€', '')
  );
  console.log(movementsUI);
  movementsUI2 = [...document.querySelectorAll('.movements__value')];
});


//给偶数行上色
labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//初始化日期
//初始化常规数字
const num = 3884764.23

const options1 = {
  style:'currency',
  unit:'celsius',
  currency:'EUR',
  // useGrouping:false,
};


console.log('US:', new Intl.NumberFormat
('en-US').format(num));//US: 3,884,764.23
console.log('Germany:', new Intl.NumberFormat
('de-DE').format(num));//Germany: 3,884,764.23
console.log('Syria:', new Intl.NumberFormat
('ar-SY').format(num));//Syria: ٣٬٨٨٤٬٧٦٤٫٢٣
console.log(
  navigator.language,
  new Intl.NumberFormat
(navigator.language,options)
.format(num));//zh-CN 3,884,764.23

