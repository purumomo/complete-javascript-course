//数组方法-添加元素!!
const friends1 = ['kngiht','superman','blackman','jjbom'];
const newlength = friends1.push('jayjay');//add一个元素在数组最后
console.log(friends1);
// console.log(newlength);//得出长度
friends1.unshift('hollushi');//add一个元素在数组最前
console.log(friends1);

//数组方法-删除元素!!
friends1.pop();//delete数组中的最后一个元素
console.log(friends1);

friends1.shift();//delete数组中的第一个元素
console.log(friends1);

friends1.push('mimi');
console.log(friends1.indexOf('jjbom'));//indexOf查询下标
console.log(friends1.includes('jjbom'));//includes查询是否有 
console.log(friends1.includes('mimi'));//返回true和false