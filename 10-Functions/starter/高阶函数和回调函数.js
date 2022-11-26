//高阶函数怎么工作的

const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
};

const upperF = function(str){
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
};

//高阶函数
const zhuanHuan = function(str,fn){
    console.log(`原始字符串:${str}`)
    console.log(`转换字符串:${fn(str)}`)

    console.log(`是由${fn.name}转换的`)//.name是函数名
};

zhuanHuan('js is good language',upperF);
zhuanHuan('js is good language',oneWord);

//js会经常使用回调函数 并且很重要
const hight5 = function(){
    console.log('👏')
}

//addE是高阶函数
//hight5是一个被调用的 叫做回调函数
document.body.addEventListener('click',hight5);

['JJ','ADSsdaa','wdfads'].forEach(hight5);