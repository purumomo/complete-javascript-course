const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/////////////////////////////////
// 编码挑战#2


//1. 遍历 game.scored 数组并将每个球员的姓名连同进球号码一起打印到控制台（：“Goal 1: Lewandowski”）
for (const [i,x] of game.scored.entries()){
    console.log(`Goal ${i+1}:`+ x); 
};

//2. 使用循环 计算倍率的平均数，打印在控制台（我们已经研究过如何计算平均数，如果不记得可以去检查）
//意思就是把倍率加起来除以3
const beilv = Object.values(game.odds);
let ave = 0;  
for(const odd of beilv){
  ave = ave + odd;
};
console.log(ave/beilv.length);

// 3. 将 3 个赔率打印到控制台，但格式很好，如下所示：
//       拜仁慕尼黑获胜几率：1.33
//       平局几率：3.25
//       多特蒙德的胜利几率：6.5
// 直接从游戏对象中获取团队名称，不要对其进行硬编码（“draw”除外）。提示：注意赔率和游戏对象如何具有相同的属性名称😉
const entries = Object.entries(game.odds);
console.log(entries)

const keys = Object.keys(game.odds);
const values = Object.values(game.odds);

for(const [keys,values] of entries){
  const duiwuzhi = keys === 'x' ? '平局' : `胜利${game[keys]}` //循环team1 team2的时候 也把他的值循环出来了
  console.log(
    `${duiwuzhi} 倍率 :${values}`
  );
};

// 额外题目：创建一个名为“scorers”的对象，其中包含作为属性得分的球员的姓名，
//  以及作为值的进球数。在这个游戏中，它看起来像这样：
//       {
//         纳尔比：1，
//         胡梅尔斯：1，
//         莱万多夫斯基：2
//       }

// 祝你好运😀
// *

const players = game.scored;
const scorers = {};
for (const player of players) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);