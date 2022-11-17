//一场球赛的时间与事件发生表
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/////////////////////////////////
// 编码挑战#3

/*
让我们继续使用我们的足球投注应用程序吧！ 这一次，我们有一张地图，其中记录了游戏期间发生的事件。 值是事件本身，键是每个事件发生的分钟数（一场足球比赛有 90 分钟加上一些额外时间）。


祝你好运😀
*/

//1. 为发生的不同游戏事件创建一个数组“event”（无重复）
const event1 = [...new Set(gameEvents.values())];
console.log(event1);

//2.比赛结束后，发现第64分钟的黄牌不公平。 所以从游戏事件日志中删除这个事件。
gameEvents.delete(64);
console.log(gameEvents);

//3. 将以下字符串打印到控制台：“平均每 9 分钟发生一次事件”（请记住，游戏有 90 分钟）
const zuihouyigeKey =[...gameEvents.keys()]; 
const x = zuihouyigeKey.length-1
// console.log(zuihouyigeKey[x]);
console.log(`平均每${zuihouyigeKey[x] / gameEvents.size}分钟发生一次事件`);

//4. 循环事件并将它们记录到控制台，标记它是在游戏的上半场还是下半场（45 分钟后）
//比如： [上半场] 17: ⚽️ 目标
for(const [key,value] of gameEvents){
    if(`${key}`<= 45){
    console.log(`[上半场] ${key},${value}`)}
    else{
    console.log(`[下半场] ${key},${value}`);
    };
};

//先获取key的值
// console.log(gameEvents.keys());