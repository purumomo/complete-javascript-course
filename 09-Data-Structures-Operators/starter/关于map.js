//Map的key可以是任意类型

const rest = new Map();
rest.set('name','Classical Musci');
rest.set(1,'Firenze,Italy');
rest.set(2,'listawg,pPEaf');

// console.log(rest.set(2,'jjbom,yindu'));
//.set可以往Map里面添加东西
rest
.set('种类',['上海菜','四川菜','日本难吃的料理'])
.set('开业时间',11)
.set('关门时间',23)
.set(true,'我们开业了')
.set(false,'我们关门了');

//get 用来获取key从而得到values
console.log(rest.get('name')); //'Classical Musci'
console.log(rest.get(true));//我们开业了
console.log(rest.get(1));//'Firenze,Italy'

//有趣的练习 如果获得true 对应开业 如果获得false 对应关门
const time = 10;
console.log(rest.get(time >= rest.get('开业时间') 
&& time <= rest.get('关门时间')  ? true : false ));

//删除其中的元素
console.log(rest.has('种类')) //检查是否含有
rest.delete(2);

const arr = [1,2];
console.log(rest);
console.log(rest.size);//查询长度
// rest.clear(); 和set一样 清除全部
rest.set(arr,'test');
rest.set(document.querySelector('h1','Heading'))
console.log(rest);

console.log(rest.get(arr));//undefine 1，2在堆中 ，arr在栈中

const qa = new Map([
    ['题目','什么是世界上最好的编程语言?'],
    [1,'C'],
    [2,'Java'],
    [3,'Javascript'],
    ['正确',3],
    [true,'正确 🎇'],
    [false,'再来一次'],
]);

console.log(qa);
//把对象转换成map
console.log(Object.entries('开业时间'));
const aaMap = new Map([
    Object.entries('开业时间')
]);
console.log(aaMap);

//迭代 = 必须是对象转换成了可迭代对象的时候才可以使用循环
// for (const [key,value] of qa){
//     //只输出key是数字的回答
//     if(typeof key === 'number')console.log(`回答${key}:${value}`);
// };

// const answer = Number(prompt('你的答案'));
const answer = 3;
// console.log(answer);

// //只输出boolean的回答
// console.log(qa.get(qa.get('正确') === answer));

//把map 转换成 arr
console.log([...qa]);