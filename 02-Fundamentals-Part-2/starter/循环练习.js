//创建一个叫bills的数组
const bill = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1110,
    86,
    52,
];
const tips = [];
const totals = [];

//用calcTip函数以后 .push加入在新的数组里 小费tips 和总额totals
//借过来的函数
const calcTip = (tip) => {
    if (tip >=50 && tip<=300){
        tip = tip*0.15;
        return tip;
    }else {
        tip = tip*0.2;
    }   return tip;
};

for(let i=0;i<=bill.length-1;i++){
    tips.push(calcTip(bill[i]));
    totals.push(bill[i]+tips[i]);
}
console.log(bill,tips,totals);

//-------------------------
//编写一个calAverage的函数 把arr的数组作为参数 
//求所有数字的平均值

const calAverge = (arr) => {
    //加入一个sum容器
    let sum = 0;
    //遍历
    for(let i=0;i<=arr.length-1;i++){
    //将所有值相加
    sum = sum + arr[i];
    }
    return sum/arr.length;
}
console.log(calAverge([99,12,16]));