//async awit 非常重要，以后会用到异步调用
const run1ci = function(){
    console.log('只搞一次')
};
run1ci();

//需要只进行一次函数的运行的时候 使用 IIFE 如下
(function(){
    console.log('这次只会跑一次')
    const isPrivate = 23;
})();

// console.log(isPrivate)//错误的原因是因为 全局不能作用于方块内的内容 反之即可
//箭头函数
(() => 
    console.log('这次只会跑一次')
)();

//为了 想要访问的隐私数据的时候 可以像下面这样创建一个块
{
    const isPrivate = 23;
    var notPrivate = 46
}

// console.log(isPrivate);会出现 没有定义IsPrivate
console.log(notPrivate)