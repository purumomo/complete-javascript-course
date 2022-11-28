//有关闭包的两个例子

//----------第一个例子----------
let f;
const g =function(){
    const a = 11;
    f = function(){ //闭包
        console.log(a * 2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
};


g();//类比就是g变量在f变量的背包里面
f();
console.dir(f);

//重新分配f函数
h();
f();//此f非彼f 因为他是重新从h里面获取的变量
console.dir(f);

//----------第二个例子----------
const Bpassenger = function(n,wait){
    const perGroup = n / 3;

    //这里的函数独立进行
    setTimeout(function(){
        console.log(`${n}名乘客准备一起登机`);
        console.log(`一共有3组并且共有${perGroup}组乘客`)
    },wait * 1000)

    console.log(`即将在${wait}后开始登机`)
};
const perGroup = 1000;
Bpassenger(180,3);
// //一秒以后会启动这个函数
// setTimeout(function(){
//     console.log('TIMER');
// },1000);