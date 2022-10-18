//计算一个人需要多久才能换驾照

const age = 10;

//判断语句 (这里的变量如果是TRUE) 输出{}
if(age >= 18){
    console.log(`Sara can drive`);
}else{
    const yearLeft = 20 - age;
    console.log(`Sara is too young need 
    ${yearLeft} years to drive`);
}

//创建变量
const birthYear = 1991;
let century;
if (birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

// challenge 2;
const Mark = 23.9;
const John = 28.3;
if(Mark > John){
    console.log("Mark's BMI is higher than John's")
}else {
    console.log("John's BMI is higher than Mark's")
}

// ===判断 和==有不同 使用等号时 最好用===
const age1 = '18';
if (age1 === 18) console.log("you can have drink beer(===)");
if (age1 == 18) console.log("you can have drink beer(==)");

const favorite = Number(prompt('Whats your favorite number?')); 
console.log(favorite);
console.log(typeof favorite);
if (favorite === 23){//这里最开始没有显示的原因是prompt默认输入的值为String 所以在上面我们添加了那个
    console.log("thats cool!!!!");
}else if (favorite === 7){
    console.log("7 is also a good number");
}else {
    console.log("number is not a good number");
}

if (favorite !== 23){ //记住!=的意思是不等
    console.log('Why not 238?????');
    
}

//AND 的用法 就是等一都为true 才会 true 
//AND = 逻辑与 OR = 逻辑或

const age2 = 16;
if (age2 >= 20){
    console.log(false);
}else if(age2 < 30){
    console.log(true);
}