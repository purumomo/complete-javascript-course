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