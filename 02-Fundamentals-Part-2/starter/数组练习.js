//1.先写一个小费计算器函数
const calcTip = (tip) =>{
    if (tip >=50 && tip<=300){
        tip = tip*0.15;
        return tip;
    }else {
        tip = tip*0.2;
    }   return tip;
}

//一行解决
// const calcTip1 = (bill) => {
//     return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2
// }

console.log(calcTip(100));
//2.用以下数据加入数组
const bills = [125,555,44];

//3.创建一个数组tips 包含每个帐单的小费值
a = calcTip(125);
b = calcTip(555);
c = calcTip(44);
const tips = [a,b,c];
console.log(tips);

//4.创建一个包含小费的总值
const bonus = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bonus);