'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, 年龄 ${age}, 出生于 ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //用同样的变量名创建变量
      const firstName = 'JJ';

      output = '新的输出';

      const str = `你出生在千禧年, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); 同样的只能由内到外查找值
    console.log(millenial); //用同样的变量名创建变量 他只会找最近的值
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// console.log(age);
// printAge(); 只能又内到外查找值 同时函数也是一个值 这里只管全局 所以error

// Variables
console.log(me); //没有定义变量的时候不会出现
// console.log(job); const 和 let是声明了的值 不能采取Hositing
// console.log(year);
