//and or
const hasDL = true; //A
const hasV = true; //B

console.log(hasDL && hasV); //& 是和and 一个用法
console.log(hasDL || hasV); //| 是和or 一个用法
console.log(!hasDL);

const shouldDrive = hasDL && hasV;
// if (shouldDrive){
//     console.log('sara should have a licence');
// }else{
//     console.log('Someoneelse should dirve');
// }

const isTired = true;//添加一个判断条件
console.log(hasDL && hasV && isTired) ;


if (shouldDrive && hasV && !isTired){//对于那些否定的句子 我们可以使其为双否来达成目标
    console.log('sara should have a licence');
}else{
    console.log('Someoneelse should dirve');
}

//Challenge 
//有两个体操队 一个D 一个C
//进行3次比赛 分高的就可以获得冠军
//1.进行计算平均分 2.然后比较

const Dbouns1 = 97;
const Dbouns2 = 112;
const Dbouns3 = 88;

const Cbouns1 = 109;
const Cbouns2 = 50;
const Cbouns3 = 109;


const DBouns = (Dbouns1+Dbouns2+Dbouns3)/3
const CBouns = (Cbouns1+Cbouns2+Cbouns3)/3

if (DBouns > CBouns && DBouns >= 100){
    console.log('D WIN THIS GAME 🏆');
}else if (DBouns < CBouns && CBouns >= 100){
    console.log('C WIN THIS GAME 🏆');
}else if (DBouns === CBouns && DBouns>=100 && CBouns>=100){
    console.log('both win the🏆')
}
else{
    console.log('Noone is winner,Same!');
}


