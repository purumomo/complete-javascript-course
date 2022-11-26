const greet = function(greeting){
    return function(name){
        console.log(`${greeting},${name}`)
    };
}

//这个greeter其实代表着上面那个reurn function
//也是闭包 closer
const greeter = greet('HEY')
greeter('Joooo')
greeter('JJBOM')
greeter('A')

greet('HAHA')('JJ'); //HAHA JJ

//挑战 把上面的函数用箭头函数做出来
const 招呼 = (打招呼) =>(名字) =>{
    console.log(`${打招呼},${名字}`)
};

招呼('你好')('鸡鸡')