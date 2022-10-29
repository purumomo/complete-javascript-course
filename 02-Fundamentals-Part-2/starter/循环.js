//健身房 会重复撸铁
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');
// console.log('lutieeeee');

//若条件为true 可以一直run
// for(let rep = 2;rep <=100;rep++){
//     console.log(`一起来健身 🏋️‍${rep}`);
// }

//数组的循环

const array2 = [
];

const arrayJJ = [
    'JJ',    
    2000-1200,
    'shooter',
    'womler',
    ['shuzu','zuhe','zhuzuhe'],
    true,
];


// for (let i=0;i<=arrayJJ.length-1;i++){
//     console.log(arrayJJ[i],typeof arrayJJ[i]); //遍历出arrayJJ的所有元素，和他们的类型
//     array2[i] = typeof arrayJJ[i];//把他们的类型放到新的数组里 填充类型数组

//     //用添加元素进行的填充类型数组
//     array2.push(typeof arrayJJ);
// }
// console.log(array2);

const years = [1999,1922,1933,2044,2077];//计算年龄，并且储存到一个新的数组中
//先进行遍历 然后再进行添加
const shuzu1 = [];
for(let i=0;i<=years.length-1;i++){
    shuzu1.push(2022-years[i]);
}
console.log(shuzu1);

console.log('----Only STRING------');
//continue and break这两个的用法
//continue 继续 break 完全中止
for(let i=0;i<=arrayJJ.length-1;i++){
    if(typeof arrayJJ[i] !== 'string') continue;

    console.log(arrayJJ[i] , typeof arrayJJ[i]);
}

console.log('----Break with number----');
for(let i=0;i<=arrayJJ.length-1;i++){
    if(typeof arrayJJ[i] === 'number') break;

    console.log(arrayJJ[i] , typeof arrayJJ[i]);
}
