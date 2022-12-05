
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for of方法
for(const [i,x] of movements.entries()){
    if(x > 0){
        console.log(`${i+1}:你存取了${x}`)
    }else(
        console.log(`${i+1}:你取出了${Math.abs(x)}`)//取绝对值的方法
    );
};

console.log('----FOREACH----')

//for each方法 每次循环数组的时候 都会迭代
movements.forEach(function(x,i,array){//顺序很重要
    if(x > 0){
        console.log(`${i+1}:你存取了${x}`)
    }else(
        console.log(`${i+1}:你取出了${Math.abs(x)}`)//取绝对值的方法
    );
});
//0:function(200)
//1:function(450)
//2:function(400)
//...

//ForEach 结合映射Map和Sets
const currencies = new Map ([
    ['USD','United Stated dollar'],
    ['EUR','Euro'],
    ['GBP','Pound sterling'],
]);

//Map方法
currencies.forEach(function(value,key,map){
    console.log(`${key}:${value}`);
});

//Sets方法
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR','EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value,key,map){
    console.log(`${value}:${key}`);
});