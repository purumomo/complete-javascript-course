// //函数表达式 = 年龄计算式
// const CC = function (year){
//     birthday = 2022 - year;
//     return birthday;
// }

// const shuchu1 = CC(11111);
// console.log (shuchu1);

//箭头函数的常规写法
const hanshu = canshu => 2037 - canshu;
const shuchu = hanshu(1991);
console.log(shuchu);

//计算一个人离退休还有多久
const jisuantuixiu = (firstName,startWorkYear) => {
    const age = 65 - startWorkYear; 
    return `${firstName} retires in ${age} years`;
};

console.log(jisuantuixiu('CAO',23));