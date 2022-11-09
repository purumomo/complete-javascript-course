'use strict';

//全局变量 可由内到外 但无法reverse
function calAge(birthyear){
    const age = 2037 - birthyear;

    function printAge (){
      let output = `${quanJuBianLiang} you are ${age},borin in ${birthyear}`;
      console.log(output);

      if (birthyear >= 1981 && birthyear <= 1996) {
        var millenial = true;
        //用同样的名字创建新的变量
        const quanJuBianLiang = 'dajj'; 

        //重新赋值给外部块
        output = 'new output';

        const str = `oh, and you're a millenial,${quanJuBianLiang}`;
        console.log(str);

        function add(a,b){
            return a+b;  
        };
      };
    // console.log(str);Const let的块作用域变量只会在块内有用
    //   console.log(millenial);var的作用域不太一样 他的范围是整个函数
    // add(2,3);添加函数也只能在块作用于里使用 严格模式下
    console.log(output); //同一个变量可以重新定义成另一个变量
    };
    printAge();
    return age;
}

const quanJuBianLiang = 'jj';
calAge(1987);

//讨论提升变量hositing

// console.log(me);
// console.log(job);
// console.log(year); 这种情况都不行 因为const 和 let 不可以被hositing 他们是定义了的值

var me = 'jjbom';
let job = 'programmer';
const year = 1997;

//函数 在声明函数之前调用
console.log(add(2,3));

function add(a,b){//只有这种可以hosisting
    return a+b;
};
const addE = function (a,b){
    return a+b;
};

const addA = (a,b) =>{
    return a+b;
};

//例子
console.log(number);//这里提升变量导致var number = undifine; undifine = false
//如果number = false
if(!number)deleteShoppingCar();
var number = 10;
function deleteShoppingCar(){
    console.log('删除了JJ')
};

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //true
console.log(z === window.z); //true
