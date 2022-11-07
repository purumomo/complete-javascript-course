'use strict';
//这个游戏的规则就是 扔骰子
//扔到非1的数据 加分到100就赢


//step1 让这个分数归零 同时让骰子消失 这里用了一个#来选择对象 因为有2个score
//但是也可以getElementById('.score--0')
const dice = document.querySelector('.dice');
const fenShu1 = document.querySelector('#score--0');
const fenShu2 = document.querySelector('#score--1');
const Sc1 = document.querySelector('#current--0');//分数
const Sc2 = document.querySelector('#current--1');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn-hold');

let currenScore = 0;

document.querySelector('.btn--new').addEventListener('click',function(){
    //归0
    fenShu1.textContent = 0;
    fenShu2.textContent = 0;
    //让骰子dice消失
    dice.classList.add('hidden');//使用这一步的时候需要在CSS里创建style 
});

//加入扔骰子的功能
buttonRoll.addEventListener('click',function(){
    //启动扔骰子
    const shuZi = Math.trunc(Math.random() * 6 + 1);
    //根据骰子显示的数字 来显示骰子的图像
    dice.classList.remove('hidden');
    dice.src = `dice-${shuZi}.png`; //新东西 添加了src的用法
    //if true 切换到第二个玩家
    if(Sc1.textContent != 1){
        currenScore = currenScore + shuZi;
        Sc1.textContent = currenScore;
    }else  {
      currenScore = currenScore + shuZi;
      Sc2.textContent = shuZi;
    };
});

