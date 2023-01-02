///////////////////////////////////////
// 编码挑战#1

/*
1.使用构造函数实现一个Car，一个car有make和speed属性。
2. 实施“加速”方法，将汽车速度提高 10，并将新速度记录到控制台；
3. 实施“刹车”方法，将汽车速度降低 5，并将新速度记录到控制台；
4. 创建 2 个汽车对象并尝试对每个对象多次调用“加速”和“制动”。

数据车 1：'BMW' 以 120 公里/小时的速度行驶
数据车 2：时速 95 公里的“梅赛德斯”

祝你好运😀
*/

const car = function(Maker,speed){
    this.Maker = Maker;
    this.speed = speed;
};

const 宝马 = new car('宝马', 370);
console.log(宝马);
const 奔驰 = new car('奔驰', 280);
console.log(奔驰);

car.prototype.加速 = function(){
    this.speed += 10;
    console.log(`${this.Maker} 正在加速到${this.speed}`);
};
car.prototype.减速 = function(){
    this.speed -= 5;
    console.log(`${this.Maker} 正在正在减速到${this.speed}`);
};

奔驰.加速()
宝马.减速()
宝马.减速()
宝马.减速()
宝马.减速()