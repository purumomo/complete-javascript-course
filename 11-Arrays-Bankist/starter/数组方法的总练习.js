const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, 
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'jj',
  movements: [1000, 2, 3, 4, 5],
  interestRate: 1,
  pin: 1,
};

const account = [account1,account2,account3,account4,account5]
//1.
//总共存入银行多少钱
const bank存钱总数 = account
.map(acc => acc.movements)
.flat()
.filter(mov => mov >0)
.reduce((sum,i) => sum+i,0);
console.log(bank存钱总数);
//2.
//有多少的账户存款在银行右1000美元
const 上千美元存款记录 = account
  .flatMap(acc => acc.movements)
  // .filter(mov => mov >= 1000).length

  //也可以用reduce来做
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(上千美元存款记录);

//关于累加的说明 这里只返回了0
//a++是先返回a 再执行a+1 ， ++a是先执行a+1 再返回a
let a =10;
// console.log(a++); //10
console.log(++a); //11
console.log(a)//11
//3.
//创建一个对象 用reduce
const {存款,取款} = account
.flatMap(acc => acc.movements)
.reduce(
    (sums,cur) => {
    // cur > 0 ? sums.取款 += cur : sums.存款 += cur;
    // return sums;
    sums[cur >0 ? '存款' : '取款'] += cur;
    return sums;
},{取款:0,存款:0});

console.log(存款,取款);
//4.
//创建一个简单的函数来转换字符串 标题大小
// this is a nice title -> This is a Nice Title
const 标题大小 = function(title){
    const 大写化 = str => word[0].toUpperCase() + word.slice(1);
    const 例外 = ['a','an','the','but','or','on','in','with'];
    //首先将所有的字符串小写
    //再将首字母进行大写
    const 转换第一个 = title.toLowerCase().split(' ')
    .map(word => 例外.includes(word) ? word : word[0].toUpperCase()+ word.slice(1))
    .join(' ');
    return 转换第一个;
}
console.log(标题大小('this is a nice title'));
console.log(标题大小('this is a LONG title but not too long'));
console.log(标题大小('and here is another title with an EXAMPLE'));






/////////////////////////////////////
// 编码挑战 #4

/*
朱莉娅和凯特仍在研究狗，这次他们正在研究狗是吃得太多还是太少。
吃得太多说明狗狗现在的食物份量大于推荐份量，吃得太少则相反。
吃适量意味着狗当前的食物份量在推荐份量以上 10% 和以下 10% 的范围内（见提示）。


测试数据：
TEST DATA:


祝你好运😀 */

// 1. 遍历包含狗对象的数组，并为每只狗计算推荐的食物份量并将其作为新属性添加到对象中。
//  不要创建新数组，只需遍历数组即可。
//   Forumla: recommendedFood = weight ** 0.75 * 28. 
//   (结果以克食物为单位，体重需要以公斤为单位)

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog =>( dog.推荐食物分量 =  (Math.round((dog.weight ** 0.75 * 28)*100)/100).toFixed(2)));
console.log(dogs);

// 2. 找到 Sarah 的狗，并在控制台记录它吃得太多还是太少。 
// 提示：有些狗有多个主人，所以你首先需要在主人数组中找到 Sarah，所以这个有点棘手（故意的）🤓

const saradogs =
  (dogs.find(dog => dog.owners.includes('Sarah')).curFood -
  dogs.find(dog => dog.owners.includes('Sarah')).推荐食物分量) >0 ?
  '吃的太多' : '吃的太少';   
console.log(saradogs)

// 3. 创建一个包含所有吃得太多的狗的主人的数组 ('ownersEatTooMuch') 
// 和一个包含所有吃得太少的狗的主人的数组 ('ownersEatTooLittle')。

const ownersEatTooMuch = dogs
.filter(chi =>chi.curFood - chi.推荐食物分量 > 0)
.map(dog => dog.owners)
.flat();
// for(const x of ownersEatTooMuch)
console.log(ownersEatTooMuch.slice(0,2)+ '和' + ownersEatTooMuch.slice(-1) + '的狗吃得太多了');

const ownersEatTooLittle = dogs
  .filter(chi => chi.curFood - chi.推荐食物分量 < 0)
  .map(dog => dog.owners)
  .flat();
// for (const y of ownersEatTooLittle) 
// console.log(`${y}的狗吃得太少了`);
console.log(
  ownersEatTooLittle.slice(0, 2) +
    '和' +
    ownersEatTooLittle.slice(-1) +
    '的狗吃得太少了'
);
// 4. 为在 3. 中创建的每个数组在控制台上记录一个字符串，如下所示：
// “Matilda、Alice 和 Bob 的狗吃得太多了！” 和“莎拉、约翰和迈克尔的狗吃得太少了！”

// 5. 记录到控制台是否有任何狗吃了推荐的食物量（正确或错误）
console.log(dogs.some(dog => dog.curFood === dog.推荐食物分量));

//6. 记录到控制台是否有任何狗吃了 OKAY 量的食物（只是 true 或 false）
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.推荐食物分量 * 0.9 &&
      dog.curFood < dog.推荐食物分量 * 1.10
  )
);
// 7. 创建一个数组，其中包含正在吃 OKAY 食物的狗（尝试重复使用 6 中使用的条件。）
const 正在吃推荐食物量的狗 = dogs
.filter(dog =>dog.curFood > dog.推荐食物分量 * 0.9 && dog.curFood < dog.推荐食物分量 * 1.1)
.map(gou => gou.owners)
.flat()
console.log(正在吃推荐食物量的狗)
// 8. 创建 dogs 数组的浅表副本，并按推荐的食物份数升序排序（请记住，这些份数在数组的对象内）
const 推荐食物分量的排序 = dogs
.slice()
.sort((a,b) => a.推荐食物分量 - b.推荐食物分量);
console.log(推荐食物分量的排序)
// 提示 1：使用许多不同的工具来解决这些挑战，您可以使用总结讲座在它们之间进行选择😉
// 提示 2：在推荐部分上下 10% 的范围内意味着：当前 >（推荐 * 0.90）&& 当前 <（推荐 * 1.10）。 基本上，当前部分应在推荐部分的 90% 到 110% 之间。

