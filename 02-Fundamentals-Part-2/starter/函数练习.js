//新的体操 每队比赛3次 计算3次的平均分 求每支球队的平均分
//只有一个团队赢 他的分数至少是平均分数的倍 否则没人胜出
//calcAverge 可以计算任何三个值的平均值
const calcAverge = (point1,point2,point3) => {
    const caculate = (point1+point2+point3)/3
    return caculate;
}
// console.log(calcAverge(1,2,3));
//比较平均分大小
const checkWinner = (avergeD,avergeK) => {
    if (avergeD >= avergeK * 2){
        console.log(`D胜利,${avergeD}对${avergeK}!🏆`);
    }else if (avergeD <= avergeK * 2){
        console.log(`K胜利,${avergeK}对${avergeD}!🏆`);
    }else(console.log('平局'));
}
//test1
const avergeD = calcAverge(44,23,71);
const avergeK = calcAverge(65,54,49);
checkWinner(avergeD,avergeK);

//test2
averge1 = calcAverge(85,54,41);
averge2 = calcAverge(23,34,27);
checkWinner(averge1,averge2);