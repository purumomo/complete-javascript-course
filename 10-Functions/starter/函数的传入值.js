const 航班 = 'JJBOM';
const CAO = {
    name:'CAOCAO',
    passport:23187478,
};

const checkIn = function(航班号,乘客){
    航班号 = 'LH322';
    乘客.name = 'MR.' + 乘客.name;
    if(乘客.passport === 23187478){
        alert('办理登机手续成功');
    } else{
        alert('错误的信息');
    }
};

checkIn(航班,CAO);
console.log(航班);
console.log(CAO);

//上面这些做的其实等于下面这些
//原始数据类型在调用栈的时候会生成副本，副本的改动不会影响原始值,引用类型在堆中直接被改变

航班号 = 航班;
const 乘客 = CAO;

//通过新的函数对之前的值进行更改
//使用相同的对象在这里会造成一些问题
const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000)
};

newPassport(CAO);
checkIn(航班,CAO);


//有两个，一个是根据值传递，一个是根据引用传递
//但是在javascript中 只会从在根据值传递！！！ 