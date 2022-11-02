'use strict';

//DOM 的查询功能
console.log(document.querySelector('.message').textContent);


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
const Snumber = Math.trunc(Math.random()*20+1);
document.querySelector('.number').textContent = Snumber;


//addEventListener是最常用的 在括号里输入type类型即可
//他的逻辑是 
//先选出包含check的DOM元素
//然后给它加上监听函数
document.querySelector('.check').addEventListener('click',function(){
  //加入一个Number函数
  const guess = Number( document.querySelector('.guess').value);
  console.log(guess,typeof guess);//这里记录的东西为String




  if(!guess){
    document.querySelector('.message').textContent = '🈲你需要先输入一个数据😟';
    }else if(guess === Snumber){
    document.querySelector('.message').textContent = '🎇恭喜你输入了正确的数据🎇';
    }else if(guess>Snumber){
        if(Sscore > 0 ){
            document.querySelector('.message').textContent = '比这个数据大'; //同时减一分
            Sscore = Sscore - 1;
            document.querySelector('.score').textContent = Sscore;
        }else{
            document.querySelector('.message').textContent = '你输辣';
            document.querySelector('.score').textContent = 0;
        }
    }else if(guess<Snumber){
        if (Sscore > 0) {
            document.querySelector('.message').textContent = '比这个数据小'; //同时减一分
            Sscore = Sscore - 1;
            document.querySelector('.score').textContent = Sscore;
        } else {
            document.querySelector('.message').textContent = '你输辣';
            document.querySelector('.score').textContent = 0;
        }
    }
  }
);
