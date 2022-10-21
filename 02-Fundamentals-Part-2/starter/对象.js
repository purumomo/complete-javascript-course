//之前学的数组 是中括号 和对象最大的不同就是指定元素的顺序十分重要
const array = [
    'name',
    'job',
    'sexual',
    20000-1999,
]


//这样你就有一个对象了 是花括号
const jjbom = {
    firstName : 'CCC',
    LastName : 'D',
    age: '1991-1200',
    job: 'D',
    friends:['Michael','peter','mmbom']

}

console.log(jjbom);
 
//那么如何从对象中获得属性呢 使用句号
console.log(jjbom.LastName,jjbom.age);
console.log(jjbom['job']);

const nameKey = 'Name';
console.log(jjbom['first' + nameKey]);
console.log(jjbom['last' + nameKey]);

//使用提示功能 prompt里输入值 = jjbom[放到这里面]
// const interestIn = prompt('你想要知道JJBOM的什么?请从firstName,LastName,age,job,friends中选择')
// console.log(jjbom[interestIn]);

// if(jjbom[interestIn]){
//     console.log(jjbom[interestIn]);
// }else{
//     console.log('不存在')
// }

//对象增加
jjbom.location = 'China';
jjbom.twitter = 'asdffggh';
console.log(jjbom);

//challenge 写出'jjbom有3个好朋友，其中他的最好的好朋友叫做mmbom'
console.log(`${jjbom.firstName}
有${jjbom.friends.length}个好朋友，
然后他的最好的朋友是${jjbom.friends[0]}`);
