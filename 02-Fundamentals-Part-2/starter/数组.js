const friend1 = 'jj';
const friend2 = 'gg';
const friend3 = 'cc';

//创建数组的两种方法
const friends = ['jj','aa','peter'];
console.log(friends);
//用已有方法调用
const year = new Array (1991,1229,1988,2020);
console.log(year);
console.log(friends[0],friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

//也可以通过插入一个元素来满足替换
friends[2] = 'Jay';
console.log(friends);

const firstName = 'CCA';
const CCA = [firstName,'BAC','Programmer',2077-1997,friends]
console.log(CCA);

//练习
const calcAge2 = function (birthYear){
    return 2077 - birthYear;
}

const years = [1990,1992,1997,1969,1940,2020];
const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[2]);
const age4 = calcAge2(years[years.length-1]);
console.log(age1,age2,age3,age4);

const ages = [age1,age2,age3,age4];
console.log(ages);



