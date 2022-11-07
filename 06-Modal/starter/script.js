'use strict';
//这一章的主要目的其实也是为了学习怎么创建类
//选择需要的元素 并且将他储存

const moKuai = document.querySelector('.modal');
const fuGai = document.querySelector('.overlay');
const ButtonClose = document.querySelector('.close-modal');
const ButtonOpen = document.querySelectorAll('.show-modal'); //注意这里选了所有的模块

//对这3个类进行遍历
// for(let i=0;i<=ButtonOpen.length-1;i++)
//对于遍历的这个数据 后面添加事件监听
// ButtonOpen[i].addEventListener('click',function(){
//     //应该在这里 添加显示窗口的代码
//     console.log('按钮点击了这里');
//     //选择窗口元素 这里用了一个新的classList.remove API 需要注意
//     //并且 选择类的时候不需要加上.逗号
//     moKuai.classList.remove('hidden');
//     fuGai.classList.remove('hidden');

// });

//写一个函数实现效率化 也便于理解
const openModal = function () {
  moKuai.classList.remove('hidden');
  fuGai.classList.remove('hidden');
};
const closeModal = function () {
  moKuai.classList.add('hidden');
  fuGai.classList.add('hidden');
};

for (let i = 0; i <= ButtonOpen.length - 1; i++) {
  ButtonOpen[i].addEventListener('click', openModal);
}

//现在添加隐藏事件
ButtonClose.addEventListener('click', closeModal);
//给点击覆盖层的时候添加关闭功能
fuGai.addEventListener('click', closeModal);

//还有一种关闭键盘的方法 使用箭头来控制 keydown的时候算三个
//此时的e 是一个形参
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  //同时 按Esc键的时候可以退出窗口 如何实现
  if (e.key === 'Escape') {
    if (!moKuai.classList.contains('hidden')) {
      closeModal();
    }
  }
});
