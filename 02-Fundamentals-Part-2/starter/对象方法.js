//函数也可以是一个值
//任何附加的函数对象 都叫做method
const jjbom = {
    firstName : 'JJ',
    lastName :'Boom',
    birthYear : 1991,
    job : 'programmer',
    friends : ['MM','BB','PP'],
    TAOTAO : false,

    // calcAge2: function(birthyear){
    //     return 2088 - birthyear;
    // }

    // calcAge: function(){
    //     console.log(this);
    //     return 2088 - this.birthYear;
    // }
    //添加新的属性 用this

    calcAge: function(){
        this.age = 2088 - this.birthYear;
        return this.age;
    },
    //challenge  这个方法应该返回一个字符串 包括所有jjbom的数据
    getSummary: function(){
    return `${this.firstName}is a ${this.calcAge()} years old ${this.job},
    and he have ${this.TAOTAO ? 'a' : 'not' }  TAOTAO.` ;
    },
};

//可以直接使用对象里的函数
//drycode原则→不要重复自己 不要重复自己所以有的变量就用this.111 来表示
// console.log(jjbom.calcAge());

// console.log(jjbom.age);
// console.log(jjbom.calcAge());
// console.log(jjbom.calcAge());
// console.log(jjbom['calcAge2'](1008));


console.log(jjbom.getSummary());
