//创建随机颜色
//讲解这个的原因是为了了解dom树的传播
//参考DOM冒泡的阶段
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const 随机颜色 = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = 随机颜色();
  console.log('LINK', e.target, e.currentTarget); //这里是发生事件的地方
  console.log(e.currentTarget === this);

  // e.stopPropagation(); //停止传播
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = 随机颜色();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = 随机颜色();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
//这里是关于捕获的内容
