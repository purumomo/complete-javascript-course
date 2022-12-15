//日期的计算
const 未来 = new Date(2037, 10, 19, 15, 23);
console.log(+未来); //2142228180000

const 计算过去 = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = 计算过去(new Date(2037, 3, 24), new Date(2037, 3, 14)); //9.57777
console.log(days1);
