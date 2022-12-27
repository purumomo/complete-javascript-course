//关于选择元素
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const all = document.querySelectorAll('.section');
console.log(all);

document.getElementById('seciton--1');

//选择所有名字中有button的元素
const button = document.getElementsByTagName('button');
console.log(button);

//获取类元素
console.log(document.getElementsByClassName('btn'));

//增加元素
//创建和插入元素
//有一个快速创建元素的办法
//.insertAdjacenHTML
//创建了一个dom元素
const message = document.createElement('div');
message.classList.add('cookie-message'); //创建dom元素的时候 命名必须是- 不能有空格
// message.textContent = '我们使用cookied来改善功能';
message.innerHTML =
  '我们使用cookied来改善功能. <button class = "btn btn--close-cookie">Got it!</button>';
header.prepend(message);
// header.append(message);
header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//删除元素
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove()
    message.parentElement.removeChild(message);
  });
