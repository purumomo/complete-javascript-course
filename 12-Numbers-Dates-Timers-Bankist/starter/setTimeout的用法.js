//setTimeOut计时器 以及clearTimeOut计时器
//实际上是一个回调函数 3后输出
//这个也叫做javascript的异步
//它同时也是可以被取消的

const 材料 = ['辣椒','胡椒']
const 计时 = setTimeout((材料1,材料2) => console.log(`这是你的披萨，使用了${材料1}和${材料2}`),
3000,
...材料,
);
console.log('等待...');//然后3秒后出现

if(材料.includes('辣椒','胡椒')){
    clearTimeout(计时);
};

//设置超时 setInterval 可以使每隔${time}的时候执行一下函数里的内容
setInterval(function(){
    const now = new Date();
    console.log(now);
},3000)