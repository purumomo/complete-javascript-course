'use strict';
//这个游戏的规则就是 扔骰子
//扔到非1的数据 加分到100就赢

//step1 让这个分数归零 同时让骰子消失 这里用了一个#来选择对象 因为有2个score
//但是也可以getElementById('.score--0')
const player0El = document.querySelector('.player--0');
const player0E2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const fenShu1 = document.querySelector('#score--0');
const fenShu2 = document.querySelector('#score--1');
const Sc1 = document.querySelector('#current--0'); //分数
const Sc2 = document.querySelector('#current--1');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let currentScore, huoyueshuju, playing, dabifen; //这里可以重新声明变量

const chuShiHua = function () {
  dabifen = [0, 0];
  currentScore = 0;
  huoyueshuju = 0;
  playing = true;

  Sc1.textContent = 0;
  Sc2.textContent = 0;
  fenShu1.textContent = 0;
  fenShu2.textContent = 0;
  dice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player0E2.classList.remove('player--winner');
  player0E2.classList.remove('player--active');
};
chuShiHua(); // 加载页面时就可以使用这个函数

//切换玩家
const qiehuan = function () {
  document.getElementById(`current--${huoyueshuju}`).textContent = 0;
  huoyueshuju = huoyueshuju === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active'); //新东西 切换class的内容
  player0E2.classList.toggle('player--active'); //新东西 切换class的内容
};

//重建游戏 点击按钮时全部归0 并且可以
document.querySelector('.btn--new').addEventListener('click', function () {
  //四个数据都归0
  fenShu1.textContent = 0;
  fenShu2.textContent = 0;
  //让骰子dice消失
  dice.classList.add('hidden'); //使用这一步的时候需要在CSS里创建style
});

<<<<<<< HEAD
const quanJuBianLiang = 'jj';
calAge(1987);

//讨论提升变量hositing

// console.log(me);
// console.log(job);
// console.log(year); 这种情况都不行 因为const 和 let 不可以被hositing 他们是定义了的值

var me = 'jjbom';
let job = 'programmer';
const year = 1997;

//函数 在声明函数之前调用
console.log(add(2,3));

function add(a,b){//只有这种可以hosisting
    return a+b;
};
const addE = function (a,b){
    return a+b;
};

const addA = (a,b) =>{
    return a+b;
};

//例子
console.log(number);//这里提升变量导致var number = undifine; undifine = false
//如果number = false
if(!number)deleteShoppingCar();
var number = 10;
function deleteShoppingCar(){
    console.log('删除了JJ')
};

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //true
console.log(z === window.z); //true
=======
//加入扔骰子的功能
buttonRoll.addEventListener('click', function () {
  if (playing === true) {
    //启动扔骰子
    const shuZi = Math.trunc(Math.random() * 6 + 1);
    //根据骰子显示的数字 来显示骰子的图像
    dice.classList.remove('hidden');
    dice.src = `dice-${shuZi}.png`; //新东西 添加了src的用法
    //if true 切换到第二个玩家 这里比较难
    if (shuZi !== 1) {
      currentScore = currentScore + shuZi;
      //用getId来切换玩家
      document.getElementById(`current--${huoyueshuju}`).textContent =
        currentScore;
    } else {
      //当数字等于1时 1.原来的玩家数字归0 2，切换背景 3.从第二个玩家开始
      qiehuan();
    }
  }
});

//添加hold功能
buttonHold.addEventListener('click', function () {
  if (playing) {
    //1.添加current分数到全局分数
    dabifen[huoyueshuju] += currentScore;
    console.log(dabifen[huoyueshuju]);
    document.getElementById(`score--${huoyueshuju}`).textContent =
      dabifen[huoyueshuju];
    //2.检查分数是否大于100 是的话完成游戏 并且禁止点击按钮用if true 来解决
    if (dabifen[huoyueshuju] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${huoyueshuju}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${huoyueshuju}`)
        .classList.remove('player--active');
    } else {
      qiehuan();
    }
  }
});

//加入重置功能
btnNew.addEventListener('click', chuShiHua);
>>>>>>> 1e4805064a72c618b40c5adf13af67e4f76dabc3
