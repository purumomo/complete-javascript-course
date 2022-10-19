//function 把函数想成一个机器

function logger() {
    console.log('I need sleep');
}

//调用函数
logger(23);
logger();
logger();

//函数 方便调用 方便维护 dry code
function fruitMaker (apple,orange){
    const juice = `juice with ${apple} apple, and ${orange} orange`;
    return juice;
}

const applejuice = fruitMaker(5,0); //输入参数
console.log(applejuice);

const appleorangejuice = fruitMaker(2,4);
console.log(appleorangejuice);

// const num = Number('23');


//函数声明!-年龄计算器
function yearCaculator (birthyear){
return 2022 - birthyear;
} 

const age1 = yearCaculator(1969);
console.log(age1);

//函数表达式!-年龄计算器
const calcAge2 = function (birthday){
    return 2037 - birthday;
}

const age2 = calcAge2(1991);
console.log(age2);
//区别在于函数声明的时候 const age1 = yearCaculator(1969)可以放在函数前
//但是函数表达式不可以这样 所以我们最好使用第二种方法
console.log(age1,age2);