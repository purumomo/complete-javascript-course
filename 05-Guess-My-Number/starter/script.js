'use strict';

//DOM 的查询功能
// console.log(document.querySelector('.message').textContent);


//又被称作为是DOM 可以从class里？取值
//用一个message的key去取值 以下三个同理 然后更改值
// document.querySelector('.message').textContent = '恭喜这是一个正确的数据!😊';
// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 21; 
// console.log(document.querySelector('.guess').value);

//下一步要做的是 把网页上的数字给它记录到控制台里
//使用事件监听器 这种东西是早已写在浏览器api里的东西 所以我们只需要直接将它调用就行

let Sscore = 20; //这里只能用let
let Snumber = Math.trunc(Math.random()*20+1);
let highscore = 0;

//创造新的功能让代码更好读 可以理解为创建一个新的函数
const displayMessage = function(message){
document.querySelector('.message').textContent = message;
};

//addEventListener是最常用的 在括号里输入type类型即可
//他的逻辑是 
//先选出包含check的DOM元素
//然后给它加上监听函数 并且配上一个默认函数
document.querySelector('.check').addEventListener('click',function(){
  //加入一个Number函数
  const guess = Number( document.querySelector('.guess').value);


//body这样的元素 不需要使用. 但是选择class或者DOM的时候 需要.
  if(!guess){
    displayMessage('.🈲你需要先输入一个数据😟');

    //当数据猜对时
    }else if(guess === Snumber){
    displayMessage('🎇恭喜你输入了正确的数据🎇');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = Snumber;
    highscore = highscore + 1;
    document.querySelector('.highscore').textContent = highscore

    //当数据不对时
    }else if (guess !== Snumber){
                if (Sscore > 1) {
                    displayMessage(
                      guess > Snumber ? '比这个数据大' : '比这个数据小'
                    );
                  Sscore = Sscore - 1; //同时减一分
                  document.querySelector('.score').textContent = Sscore;
                } else {
                  displayMessage ('你输辣');
                  document.querySelector('.score').textContent = 0;
                };

    }else if(guess<Snumber){
        if (Sscore > 1){
            displayMessage('比这个数据小'); //同时减一分
            Sscore = Sscore - 1;
            document.querySelector('.score').textContent = Sscore;
        }else{
            document.querySelector('.message').textContent = '你输辣';
            document.querySelector('.score').textContent = 0;
        };
    };
  }
);

document.querySelector('.again').addEventListener('click',function(){
    //需要重新赋值 不能用const而是用let
 Sscore = 20;
 Snumber = Math.trunc(Math.random() * 20 + 1);
 document.querySelector('.score').textContent = Sscore;
 document.querySelector('.number').textContent = Snumber;
 document.querySelector('.number').textContent = '?';
 document.querySelector('.number').style.width = '15rem';
 document.querySelector('body').style.backgroundColor = '#000000';
 displayMessage('Start guessing...');
}
);
// 编码挑战#1

/*
实现游戏重设置功能，让玩家可以做出新的猜测！ 方法如下：
1. 选择具有“again”类的元素并附加一个单击事件处理程序
2.在handler函数中，恢复score和SNumber变量的初始值
3.恢复消息、数字、分数和猜测输入栏的初始条件
4. 也恢复原来的背景颜色（#222）和数字宽度（15rem）

祝你好运😀
*/

//重构代码是为了更好的阅读代码