// 问题一：
// 我们为一家制造智能家居温度计的公司工作。 我们最近的任务是：
//“给定一天的一系列温度，计算温度幅度。请记住，有时可能会出现传感器错误。”

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) 理解问题
// - 什么是温度幅度？ 答：最高温度和最低温度的区别
// - 如何计算最高和最低温度？
// - 什么是传感器错误？ 而做什么呢？

// 2) 分解成子问题
// - 如何忽略错误？
// - 在临时数组中查找最大值
// - 在临时数组中查找最小值
// - 从最大值（幅度）中减去最小值并返回

//如何找最大？ 方法1 先设定 第一个值为MAX 然后和它比较 如果大的话就保存
//同时做一个最小值
const calTA = function (temps) {
    let maxValue = temps[0];
    let minValue = temps[0];

    for (let i=0; i<= temps.length - 1; i++) {
    //如果不是一个数字类型 就返回
      if(typeof temps[i] !== 'number')continue;

      if (temps[i] > maxValue) {
        maxValue = temps[i];
      };
      if (temps[i] < minValue){
        minValue = temps[i];
      };
    };
    console.log(maxValue,minValue);
    return maxValue - minValue;
};

const aplitudue = calTA(temperatures);
console.log(aplitudue);
//----------------------------------------------------
//第二个问题 数组应该接受2个温度数组 如何合并2个数组

const calTA2 = function (t1,t2) {
    //连接数组的方法
    const temps = t1.concat(t2);

  let maxValue = temps[0];
  let minValue = temps[0];
  for (let i = 0; i <= temps.length - 1; i++) {
    //如果不是一个数字类型 就返回
    if (typeof temps[i] !== "number") continue;

    if (temps[i] > maxValue) {
      maxValue = temps[i];
    }
    if (temps[i] < minValue) {
      minValue = temps[i];
    }
  }
  console.log(maxValue, minValue);
  return maxValue - minValue;
};

const aplitudue2 = calTA2([3,4,5],[6,7,8]);
console.log(aplitudue2);


const celiang = function(){
    const celiangduixian = {
        type:'temp',
        unit:'celsius',
        value:prompt('degress celsius')
    }
    
    // console.warn(celiangduixian.value);
    // console.error(celiangduixian.vaule);
    // console.log(celiangduixian.value);

    const kelvin = celiangduixian.value+273;
    return kelvin;
}
console.log(celiang());