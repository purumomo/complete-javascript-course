'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//让所有按钮都发生反应

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


logo.className = 'jones';

//第一个功能 点击Learn more滑动到第一个窗口
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  const s = section1.getBoundingClientRect();
  console.log(s);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/widhth vieport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //滑动
  //第一种方法
  // window.scrollTo(
  //   s.left + window.pageXOffset,
  //   s.top + window.pageYOffset
  //   );

  //第二种方法
  window.scrollTo({
    left:s.left + window.pageXOffset,
    top:section1.top + window.pageYOffset,
    behavior:'smooth',
  });
  section1.scrollIntoView({ behavior: 'smooth'});
});




// //事件的种类 
// //mouseenter
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter',function(e){
//   alert('addEventListener:Great!!!!')
// });
// //mouseenter的老派做法 效果一样
// const ah1 = function(e){
//   alert('addEventListener:Great!!!!');
//   // h1.removeEventListener('mouseenter');
// };

// h1.addEventListener('mouseenter',ah1);
// setTimeout(() =>h1.removeEventListener('mouseenter',ah1,3000))


//创建随机颜色
//讲解这个的原因是为了了解dom树的传播
//参考DOM冒泡的阶段
//这里是关于捕获的内容

const randomInt = (min,max) => 
  Math.floor(Math.random() * (max - min + 1) + min);
const 随机颜色 = () => 
  `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

  document.querySelector('.nav__link').addEventListener
  ('click',function(e){
      this.style.backgroundColor = 随机颜色()
      console.log('LINK',e.target,e.currentTarget); //这里是发生事件的地方
      console.log(e.currentTarget === this);

      // e.stopPropagation(); //停止传播
    });

  document.querySelector('.nav__links').addEventListener
    ('click',function(e){
      this.style.backgroundColor = 随机颜色();
      console.log('CONTAINER',e.target,e.currentTarget);
    });
  document.querySelector('.nav').addEventListener
  ('click',function(e){
    this.style.backgroundColor = 随机颜色();
    console.log('NAV',e.target,e.currentTarget);
  },
  true
  );