//闭包 是一个很难理解的部分
//闭包只会自动发生在某些情况下 不会像函数一样可以直接被创建出来
const Sbooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount}名乘客`)
    };
};

const booker = Sbooking(); //这是一个全局作用域
//下面这些可以归咎于全局作用域里的子作用域
booker()//1名乘客
booker()//2名乘客
booker()//3名乘客

//这很奇怪 因为按照道理booker函数已经是完成了一次调用了
//这里的解释就是 把passengerCount这个变量 属于到了booker函数里
//还有一个解释就是 只要 内部函数调用外部函数的变量 这个外部函数并不会出栈
//我的理解 在有了闭包以后 这个函数可以直接关闭前面的函数 并且连接到里面的变量 进行提取使用
console.dir(booker)//可以通过这个方式来查看函数属性里的内容 是个内部属性只能这样子开始访问


