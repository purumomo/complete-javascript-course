//创建日期
const 现在 = new Date();
console.log(现在); //Thu Dec 15 2022 12:04:49 GMT+0800

console.log(new Date('Thu Dec 15 2022 12:04:16')); //Thu Dec 15 2022 12:04:16 GMT+0800
console.log(new Date('December 24,2015')); //Thu Dec 24 2015 00:00:00 GMT+0800
console.log(new Date(account6.movementsDates[0])); //Tue Nov 19 2019 05:31:17 GMT+0800

//月份从0开始
console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0800
console.log(new Date(2037, 10, 33)); //Thu Dec 03 2037 00:00:00 GMT+0800

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sun Jan 04 1970 08:00:00 GMT+0800

//处理日期
const 未来 = new Date(2037, 10, 19, 15, 23);
console.log(未来);
console.log(未来.getFullYear()); //2037
console.log(未来.getMonth()); //10
console.log(未来.getDate()); //19
console.log(未来.getDay()); //4
console.log(未来.getHours()); //15
console.log(未来.getMinutes()); //23
console.log(未来.getSeconds()); //0
console.log(未来.toTimeString()); //15:23:00 GMT+0800 (中国标准时间)
console.log(未来.getTime()); //2142228180000

console.log(new Date(2142228180000)); //Thu Nov 19 2037 15:23:00 GMT+0800 (中国标准时间)

console.log(Date.now()); //1671077725096

未来.setFullYear(2040);
console.log(未来); //Mon Nov 19 2040 15:23:00 GMT+0800 (中国标准时间)
