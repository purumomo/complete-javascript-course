
function qieshuiguo(shuiguo){
    return shuiguo * 4;
}


function shuiguozhizaoji(pingguo,lizi){
    const pingguopian = qieshuiguo(pingguo);
    const lizipian = qieshuiguo(lizi);

    const shuchu = `加入苹果${pingguo} 和 梨子${lizi} 然后
    生成苹果屑${pingguopian} 和梨子屑${lizipian} 就可以了`
    return shuchu;
}

console.log(shuiguozhizaoji(1,2));