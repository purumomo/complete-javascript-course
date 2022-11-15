/////////////////////////////////
// 编码挑战#1
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
    team1: 1,
    x: 3.25,
    team2: 2,
  },
};
/*
我们正在构建一个足球投注应用程序（我的美国朋友的足球😅）！

假设我们从 Web 服务获取有关某个游戏的数据（如下）。在这个挑战中，我们将使用数据。所以这是你的任务：

1.为每支球队创建一个球员数组（变量'players1'和'players2'）✔
2.任何球员阵列中的第一个球员是守门员，其他球员是场上球员。对于拜仁慕尼黑（第 1 队），创建一个包含守门员姓名的变量 ('gk')，以及一个包含所有剩余 10 名场上球员的数组 ('fieldPlayers')✔
3. 创建一个数组“allPlayers”，包含两支球队的所有球员（22 名球员）✔
4. 比赛期间，拜仁慕尼黑（1队）使用了3名替补球员。因此，创建一个新数组 ('players1Final')，其中包含所有原始 team1 球员以及 'Thiago'、'Coutinho' 和 'Perisic'✔
5. 基于game.odds对象，为每个奇数创建一个变量（称为'team1'、'draw'和'team2'）
6. 编写一个函数（'printGoals'），接收任意数量的球员姓名（不是数组）并将每个球员姓名连同总进球数（传入的球员姓名数）打印到控制台)
7. 赔率低的队伍获胜的可能性更大。打印到控制台哪个团队更有可能获胜，而不使用 if/else 语句或三元运算符。

6 人的测试数据：使用球员“戴维斯”、“穆勒”、“莱万多夫斯基”和“基米希”。然后，再次使用来自 game.scored 的玩家调用该函数

祝你好运😀*/

//1为每支球队创建一个球员数组（变量'players1'和'players2'）✔
const [players1,players2] = game.players;
//2.任何球员阵列中的第一个球员是守门员，其他球员是场上球员。对于拜仁慕尼黑（第 1 队），
//创建一个包含守门员姓名的变量 ('gk')，以及一个包含所有剩余 10 名场上球员的数组 ('fieldPlayers')✔
const [gk,...fieldPlayers] = players1;
//3. 创建一个数组“allPlayers”，包含两支球队的所有球员（22 名球员）✔
const allplayers = [...players1,...players2];
//4. 比赛期间，拜仁慕尼黑（1队）使用了3名替补球员。因此，创建一个新数组 ('players1Final')，其中包含所有原始 team1 球员以及 'Thiago'、'Coutinho' 和 'Perisic'✔
const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5. 基于game.odds对象，为每个奇数创建一个变量（称为'team1'、'draw'和'team2'） 解构内容 {变量名:数值} = 提取对象
const {odds:{team1,x:draw,team2}} = game;

//6. 编写一个函数（'printGoals'），收到任意数字和球员姓名（所以不是数组）
//然后打印每个球员姓名，和进球数到控制台 
const printGoals = (...players) =>{
    // for(let i=0;i<=players.length-1;i++){
    //     console.log(players.length[i]);
    // };
    console.log(`进了${players.length}个球`);
};
printGoals(...game.scored);

//7. 赔率低的队伍获胜的可能性更大。打印到控制台哪个团队更有可能获胜，而不使用 if/else 语句或三元运算符。
//or||return 第一个true   and&& return第一个 false

//-----fangfa1--------
// if (team1 < team2) 
// console.log('team2获胜的几率大');
// else{
//     console.log('team1获胜的几率大');
// };

//-----fangfa2--------
team1 < team2 && console.log('team1获胜的几率大'); //返回第一个false
team2 < team1 && console.log('team2获胜的几率大'); //返回第一个false
