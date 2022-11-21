const airline = 'Psorchiel 911';
const plane = 'A330';

//字符串遍历
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B777'[0]);

//直接算长度
console.log(airline.length)//10
console.log('B777'.length)//4

console.log(airline.indexOf('S'))//当然如果不存在的情况下这里会显示-1
console.log(airline.indexOf('SD'));

console.log(airline.lastIndexOf('S'))//指定值最后一次出现的索引

console.log(airline.slice(4));//从第4个开始 输出后面的
console.log(airline.slice(4,6));//从第4个开始提取 结束于第6个


const danci = 'Data Structures and Modern Operators';
console.log(danci.slice(0,danci.indexOf(' ')));//提取第一个单词
console.log(danci.slice(danci.lastIndexOf(' ') + 1));//提取最后一个单词

console.log(danci.slice(-2));//从最后往前面数 如果加负值
console.log(danci.slice(1,-2));//从最后往前面数 如果加负值

// 练习 ----- 检查座位是不是中间的座位
// 如果字母里出现有b 或者 e 就是
const checkM = (seat) => {
    let Zhongjian = seat.slice(-1);
    if(Zhongjian === 'B' || Zhongjian === 'E' ){
        console.log('是中间位置')
    }
    else{
        console.log('不是中间位置')
    };
};
checkM('11B');
checkM('23C');
checkM('3E');

//JS用了包装的办法
console.log(new String('quanJI')); //输出以后很像一个对象

console.log(typeof new String('quanji'));//object
console.log(typeof new String('quanji').slice(1));//String 这里又变成了

//关于字符串的方法
const hangban = 'ZHONGGUO HANGKONG';
console.log(hangban.toLowerCase()); //变成小写
console.log(hangban.toUpperCase());//变成大写

const 乘客 = 'CaoFennngallde';
const 小写乘客 = 乘客.toLowerCase();
console.log(小写乘客);
const 正确乘客 = 小写乘客[0].toUpperCase() + 小写乘客.slice(1);
console.log(正确乘客);

//输入任意乘客的名字 然后转换成大小写正常
const Rname = (name) =>{
    const 正确名字 = name[0].toUpperCase() + name.slice(1);
    console.log(正确名字)
};
Rname('caofengNning');

//检查邮件 
const email = 'hEllo@gmail.com';
const loginEmail = 'Hello@gmail.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const xiujianEmail = lowerEmail.trim();
// console.log(xiujianEmail);

//trim 是取掉头部的空格
const normailizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normailizedEmail);//return true of false

//替换符号
const priceGB = '288,97￡';
const priceMY = priceGB.replace('￡','＄').replace(',','.');
console.log(priceMY);

//替换
const 广播 = '请所有人来到23号登机口登机,23号登机口!'
console.log(广播.replace('登机口','登机门'));

//正则表达式
console.log(广播.replace(/登机口/g,'登机门'))

//Booleans
const plane1  = 'A333 Asd';
console.log(plane1.includes('A333')); //因为包含所有true
console.log(plane1.includes('Boeing'));//false
console.log(plane1.includes('A3'));//true

if(plane1.startsWith('A333') && plane.endsWith('Asd')){
    console.log('这是我们的ASD新飞机');
};

//练习-----检查乘客的行李是否可以带上飞机
const checkBag = function(item){
    const wuping = item.toLowerCase();
    if(wuping.includes('小刀' || wuping.includes('防身用品') || wuping.includes('枪'))){
        console.log('这些东西不能够被带上飞机');
    }else {
        console.log('你可以登机了')      
    };
};
checkBag('我有一个笔记本，口袋，小刀');
checkBag('袜子，照相机');
checkBag('拿一些步枪作为防身用品');

//-------Split-------分割 很重要的用法 还有------join------
console.log('a+very+nice+string'.split('+'));
console.log('CAO FENGNING'.split(' '));

const [firstName,lastName] = 'Cao Fengning'.split(' ');
//--------join-------
//让lastName大写
const newName = ['Mr.',firstName,lastName.toUpperCase()].join('--')
console.log(newName);


//让每个名字的第一个字母大写化
const 大写化 = function(name){
    const biaozhunhua = name.split(' ');
    const daxie = [] //创造一个新的变量
    for(const x of biaozhunhua){
        // daxie.push(x[0].toUpperCase() + x.slice(1));//加到新的数组
        daxie.push(x.replace(x[0],x[0].toUpperCase()));//第二种方法
    };
    console.log(daxie.join(' '));//重新加入数组
};
大写化('jessica ann smith daviss');
大写化('Bob lambuergnt');
大写化('July Booob');

//填充字符串 padding string
const message = '去门23!';
console.log(message.padStart(25,'+').padEnd(30,'+'));
console.log('CAOaaaaa'.padStart(23,'+').padEnd(30,'+'));

//覆盖信用卡的名字 函数练习
const maskCard = function (number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length,'*');
};

//取出最后4个数字的用法
console.log(maskCard(123348532023));
console.log(maskCard('123982302490582032423'));

//重复 也就是复读
const message2 = ('因为坏的天气所以所有行榜都延迟了....');
console.log(message2.repeat(5));

const planesIn = function(n){
    console.log(`这里有${n}架飞机在等待${'✈'.repeat(n)}`)
};
planesIn(5);


// 编码挑战#4

/*
编写一个程序，接收用 下划线编写的变量名列表并将它们转换为 camelCase。

输入将来自插入到 DOM 中的文本区域（参见下面的代码），当按下按钮时会发生转换。

此测试数据（粘贴到 空白里） 按下按钮发生转换
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

应该产生这个输出（5 个单独的 console.log 输出）
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

提示 1：记住哪个字符在 textarea 中定义了一个新行😉
提示 2：该解决方案只需要对由 2 个单词组成的变量起作用，例如 a_b
提示 3：开始时不要担心 ✅。只有在变量名转换工作之后才能解决这个问题😉
提示 4：挑战是故意很难，所以开始观察解决方案，以防你被卡住。然后暂停并继续！

之后，用自己的测试数据进行测试！

祝你好运😀
*/
//创建一个新的文字窗口和按钮
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//读取数字
const shuju = document.querySelector('textarea');

//点击按钮事件
const button = document.querySelector('button');

button.addEventListener('click',function(){
    const shuju = document.querySelector('textarea').value;
    const rows = shuju.split('\n');
    console.log(rows);
    for(const [i,x] of rows.entries()){
        const [first,second] = x.toLowerCase().trim().split('_'); //所有小写去空格删掉_
        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✔'.repeat(i+1)}`);
    }
});

        // const 字符转换 = para => {
          //只能适用于一次字符串转换
          //   const i = para.indexOf('_');
          //   console.log(
          //     para[0].toLowerCase() +
          //       para.slice(1, i) +
          //       para[i + 1].toUpperCase() +
          //       para.slice(i + 2)
          //   );
        //   const rows = para.split('\n');
        // };
        // 字符转换(liang);