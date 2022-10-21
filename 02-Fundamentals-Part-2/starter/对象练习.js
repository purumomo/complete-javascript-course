// 编码挑战#3

/*
让我们回到 Mark 和 John 来比较他们的 BMI！ 这一次，让我们使用对象来实现计算！ 请记住：BMI = 质量 / 高度 ** 2 = 质量 /（高度 * 高度）。 （质量为公斤，高度为米）

1. 为它们中的每一个创建一个具有全名、质量和高度属性的对象（Mark Miller 和 John Smith）
2. 在每个对象上创建一个“calcBMI”方法来计算 BMI（两个对象上的方法相同）。 将 BMI 值存储到属性中，并从方法中返回它。
3. 登录到具有较高BMI的控制台，连同全名和相应的BMI。 示例：“John Smith 的 BMI (28.3) 高于 Mark Miller 的 (23.9)！”

测试数据：标记重 78 kg，高 1.69 m。 John 体重 92 kg，身高 1.95 m。*/

const MarkMiller = {
    fullname : 'MarkMiller',
    weights : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI = this.weights / this.height;
        return this.BMI;
    },
};


const JohnSmith = {
    fullname : 'JohnSmith',
    weights : 92,
    height : 1.95,
    calcBMI : function(){
        this.BMI = this.weights / this.height;
        return this.BMI;
    },
};
MarkMiller.calcBMI(); //写好的函数不调用 结果就是Undefined
JohnSmith.calcBMI();

if(MarkMiller.BMI > JohnSmith.BMI){
    console.log(`${MarkMiller.fullname}'s BMI (${MarkMiller.BMI}) 
    is higher than JohnSmith.BMI${JohnSmith.BMI} `)
}else{
    console.log(`${JohnSmith.fullname}'sBMI(${JohnSmith.BMI})
    is higher than MarkMiller's BMI ${MarkMiller.BMI} `)
}