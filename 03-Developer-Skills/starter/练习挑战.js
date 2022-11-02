/////////////////////////////////
// 编码挑战#1

/*
给定一系列预测的最高温度，温度计会显示一个带有这些温度的字符串。

示例： [17, 21, 23] 将打印“... 1 天后达到 17ºC ... 2 天后达到 21ºC ... 3 天后达到 23ºC ...”

创建一个函数“printForecast”，它接收一个数组“arr”，并将上面的字符串记录到控制台。

使用问题解决框架：了解问题并将其分解为子问题！

测试数据 1：[17、21、23]
测试数据 2：[12、5、-5、0、4]
*/

const data1 = [17, 21, 23];
const data2 = [12,5,-5,0,4];

const printForecast = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(i + 1 + "天以后达到" + `${arr[i]}` + "ºC");
    };
}
printForecast(data2);
