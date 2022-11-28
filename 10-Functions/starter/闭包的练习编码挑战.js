/*
这更像是一个思维挑战而不是编码挑战🤓
以下面的 IIFE 为例，在函数的末尾，附加一个事件侦听器，每次单击 BODY 元素时，
将选定的 h1 元素（'header'）的颜色更改为蓝色。 不要再次选择 h1 元素！
现在向您自己（或您周围的人）解释为什么这有效！ 
把所有你需要的时间。 考虑一下回调函数的确切执行时间，以及这对本示例中涉及的变量意味着什么。
祝你好运😀
*/

(function () {
  const 标题 = document.querySelector('h1');
  标题.style.color = 'red';
  

  document.querySelector('body').addEventListener('click',function(){
    标题.style.color = 'blue';
  })
})();
