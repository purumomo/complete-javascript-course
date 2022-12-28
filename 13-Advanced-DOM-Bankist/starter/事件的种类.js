//事件的种类
//mouseenter
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener:Great!!!!');
});
//mouseenter的老派做法 效果一样
const ah1 = function (e) {
  alert('addEventListener:Great!!!!');
  // h1.removeEventListener('mouseenter');
};

h1.addEventListener('mouseenter', ah1);
setTimeout(() => h1.removeEventListener('mouseenter', ah1, 3000));
