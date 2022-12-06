/////////////////////////////////////
// 编码挑战#1

/*
茱莉亚和凯特正在做一项关于狗的研究。于是他们每人询问了 5 位狗主人他们的狗的年龄，
并将数据存储到一个数组中（每个数组一个数组）。
目前，他们只想知道一只狗是成年狗还是小狗。 3岁以上为成犬，3岁以下为幼犬。

创建一个函数“checkDogs”，它接受 2 个狗的年龄数组（“dogsJulia”和“dogsKate”），
并执行以下操作：


并从该副本数组中删除 cat ages（因为改变函数参数是一种不好的做法）

4. 为两个测试数据集运行函数

提示：到目前为止，使用本节所有讲座中的工具😉

测试数据 1：Julia 的数据 [3, 5, 2, 12, 7]，Kate 的数据 [4, 1, 15, 8, 3]
测试数据 2：Julia 的数据 [9, 16, 6, 8, 3]，Kate 的数据 [10, 5, 6, 1, 4]

祝你好运😀*/

//1. Julia 发现第一只和最后两只狗的主人实际上养的是猫，而不是狗！因此，创建 Julia 数组的浅表副本，
const Julia1 = [3,5,2,12,7];
const Julia2 = [9, 16, 6, 8, 3];
const Kate1 = [4, 1, 15, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];

const copyOfJulia1 = Julia1.slice(0,Julia1.length-3);
const copyOfJulia2 = Julia2.slice(0,Julia1.length-3);
//2. 用 Julia 的（更正）和 Kate 的数据创建一个数组
const heBing1 = copyOfJulia1.concat(Kate1);
const heBing2 = copyOfJulia2.concat(Kate2);

//3. 对于剩下的每只狗，登录到控制台是成年狗（“1 号狗是成年狗，已经 5 岁了”）
//还是小狗（“2 号狗仍然是小狗🐶”）
console.log(heBing1)
console.log(heBing2)
const checkDogs = function (heBing1,heBing2) {
    gou = heBing1.concat(heBing2);
    for(const [i,x] of gou.entries()){
        if(gou[x] >= 3){
            console.log(`${i}号狗是成年狗，已经${gou[x]}岁了`);
        }else{
            console.log(`${i}号狗是小狗，已经${gou[x]}岁了`);
        };
    };
};

checkDogs(heBing1, heBing2);

/////////////////////////////////////
// 编码挑战 #2

/*
让我们回到朱莉娅和凯特对狗的研究。 这一次，他们想将狗的年龄转换为人类的年龄，
并计算他们研究中狗的平均年龄。

创建一个函数“calcAverageHumanAge”，它接受狗的年龄数组（“ages”），
并按顺序执行以下操作：



3. 计算所有成年狗的平均人类年龄（你应该已经从其他挑战中知道我们如何计算平均值😉）
4. 为两个测试数据集运行函数

测试数据 1: [5, 2, 4, 1, 15, 8, 3]
测试数据 2：[16、6、10、5、6、1、4]

祝你好运😀
*/

/*1. 使用以下公式计算狗的人类年龄：
如果狗 <= 2 岁，则 humanAge = 2 * dogAge。 
如果狗 > 2 岁，则 humanAge = 16 + dogAge * 4。*/
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 =  [16, 6, 10, 5, 6, 1, 4];
const 年龄数组 = ages1.concat(ages2);
console.log(年龄数组);
const 计算年龄 = function(){
  const 人类年龄 = [];
  for (let i = 0; i <= 年龄数组.length - 1; i++) {
    if (年龄数组[i] <= 2) {
      人类年龄.push(2 * 年龄数组[i]);
    } else if (年龄数组[i] > 2) {
      人类年龄.push(16 + 4 * 年龄数组[i]);
    }
  } //2.排除所有小于人类18岁的狗（这与饲养至少18岁的狗是一样的）
  const 大于人类18岁的狗 = [];
  let sum = 0;
  for (const x of 人类年龄) {
    if (x > 18) {
      大于人类18岁的狗.push(x);
      sum = sum + x;
    平均年龄 = sum / 大于人类18岁的狗.length;
    }
  }
  return 大于人类18岁的狗;
  //3. 计算所有成年狗的平均人类年龄（你应该已经从其他挑战中知道我们如何计算平均值😉）
};
console.log(计算年龄(年龄数组),`成年狗的平均年龄是:` + 平均年龄);


