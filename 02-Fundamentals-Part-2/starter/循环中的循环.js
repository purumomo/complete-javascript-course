const shuzu = [
    'CCCAAAIII',
    'AD钙',
    2077-1997,
    'programmer',
    ['JJ','BB','jjbom'],
    true,
];

//逆向循环 4,3,2,1

// for(let i=shuzu.length-1;i>=0;i--){
//     console.log(shuzu[i]);
// };

//创造一个循环的循环 俯卧撑10次 有3种不同的练习 每一种重复5次
const fuwocheng = []
for(let exercise = 1;exercise <=3;exercise++ ){
    console.log(`-----Start Exercise-----${exercise}`);
    for(let duanlian = 1;duanlian <=5;duanlian++){
        console.log(`Exercise${exercise}:duanlian${duanlian}次🏋️‍`)
    }
}
