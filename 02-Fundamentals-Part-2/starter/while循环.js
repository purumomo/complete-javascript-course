// //举重循环 的for循环版本
// for(let i=0;i<=10;i++){
//     console.log(`举重了${i}次🏋️‍`)
// }

// //while循环
// let i=0;
// while(i<=10){
//     console.log(`举重了${i}次🏋️‍`);
//     i++;
// }

//扔骰子 扔到一个6 就停止
let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`你roll了${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice ===6){
        console.log('可以结束循环');
    }
};