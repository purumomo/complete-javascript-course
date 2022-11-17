//值的集合
//创建一个Sets 首字母要大写
const orderSet = new Set([
    'mantou',
    'doujiang',
    'dabian',
    'hanbao',
]);

//他也是可以迭代的
console.log(orderSet);

console.log(new Set(['JJBOM']));
//查看长度 不是length
console.log,(orderSet.size);

//有的话就会true 反之false
console.log(orderSet.has('jjb'));
console.log(orderSet.has('mantou'));
//添加要素
orderSet.add('doujiang');
console.log(orderSet.has('doujiang'));
//删除要素
orderSet.delete('hanbao');
console.log(orderSet.has('hanbao'));
//是否也可以像数组那样查询序号？
// console.log(orderSet[0]);//不行显示undefine
//不需要这样做的原因是不需要他们按照顺序排列 只要Set里面有就行了

//删除所有的元素
// orderSet.clear();
// console.log(orderSet);//set(0)

for(const x of orderSet){
    console.log(x);
};

//例子1 数组转换
const zhiYuan = ['qiantai','chufang','xiongrendeshuhusu','shangsi','shangsi','shangsi'];
const jihe = [...new Set(zhiYuan)]; //需要加一个new
console.log(jihe);

//如果我们只想知道有几种职位
console.log(jihe.length); //4种

console.log(
  new Set([
    'qiantai',
    'chufang',
    'xiongrendeshuhusu',
    'shangsi',
    'shangsi',
    'shangsi',
  ]).size//4种
);


















