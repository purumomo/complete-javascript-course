//计算退休年龄 加上函数声明函数类型

const calcAge2 = function (birthyear){
    return 2037 - birthyear;
}

const retired = function (birthyear,firstname){
    const age = calcAge2(birthyear);
    const retirement = 65 - age;
    if(retirement >0 ){
        console.log(`you should retired in ${age} and named ${firstname}`);
        return retirement;
    }else{
        console.log(`${firstname} is already retired`);
        return -1;
    };
}

console.log(retired(1991,'jojo')); 
console.log(retired(1981,'mike')); 
console.log(retired(1950,'dio')); 
