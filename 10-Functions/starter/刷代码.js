


strs = ['flower', 'flow', 'flight'];


var longestCommonPrefix = function () {
    let 第一个 = strs[0];
    if (strs.length == 0) {
        return '';
    };
    if(strs.length == 1){
        return strs[0];
    }
  //遍历所有数组
for (let i = 1; i <= strs.length - 1; i++) {
    let 下一个 = strs[i];
    let j=0
    for(;j<= 下一个.length-1;j++){
        if(下一个[j] != 第一个){
            第一个 = 第一个.slice(0,j);
            break;
        };
    };
    if(strs.includes(第一个)){
        第一个 = 第一个.slice(0,j)
    }
}return 第一个;
};

longestCommonPrefix(strs);