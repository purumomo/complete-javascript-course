//5 falsy values:0 '',undegined,null,NaN; 
//上面为虚假值的定义

console.log(Boolean(0));//FASLE
console.log(Boolean(undefined)); //FALSE
console.log(Boolean(null)); //FALSE
console.log(Boolean('JJBOM')); //TRUE
console.log(Boolean({})); //TRUE

const money = 0;
if(money){//这里js就在判断你的true和false的值了
    console.log("you are rich");
}else{
    console.log("go to sleep");
};



let height = 1;//这里目前是一个undefined的值 0的话不会是任何值
if(height){
    console.log('yeah height is defined');
}else{
    console.log('height is undefined');
}
