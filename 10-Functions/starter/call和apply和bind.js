const nanhang = {
    airline:'nanhang',
    iataCode:'NH',
    bookings:[],
    book:function(flightNumber,name){
        console.log(`${name} 订购了一个座位
        ${this.iataCode}${flightNumber}`)
    this.bookings.push({航班:`${this.iataCode}
    ${flightNumber}`,name})
    },
};


nanhang.book(123,'JJBOM');
nanhang.book(145,'JohnWick');

//重新分配一个新的航空公司
const dongHang = {
    airline:'donghang',
    iataCode:'DH',
    bookings:[],//接受前面航空公司的booking
};

//但是之前的this只会指向不同的航空公司 那么怎么办呢
const book = nanhang.book;
// book(32,'Yoshida naoki'); 不起作用
//call函数中的第一个参数就是我们想要指向的内容 call可以改变指向s
book.call(dongHang,32,'Yoshida naoki')

console.log(nanhang)
book.call(nanhang,239,'DAJJI JIER');

const xiangganghangkong = {
    airline:'HK airline',
    iataCode:'HKA',
    bookings:[]
}
book.call(xiangganghangkong,843,'MADS da');

//apply method
const flightdata = [432,'DAvid'];
book.apply(xiangganghangkong,flightdata)
console.log(xiangganghangkong);

//这里的call和上面一样
book.call(xiangganghangkong,...flightdata);

//----------------------------------------------------------

//bind method (绑定)
const bookNH = book.bind(nanhang);
const bookDH = book.bind(dongHang);
const bookXG = book.bind(xiangganghangkong);
bookNH(23,'Steven Silk')

//设置好了第一步的参数 就可以直接用 更简单 现在只需要传入乘客的名字
const bookNH23 = book.bind(nanhang,23);
bookNH23('MO MO');
bookNH23('Natsu mi');

//使用事件监听器
nanhang.planes = 200;
nanhang.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// nanhang.buyPlane()

//添加bind方法 使它指向上面那个this
document.querySelector('.buy').
addEventListener('click',nanhang.buyPlane.bind(nanhang));




//部分应用
const addShui = (value,rate) => value + value*rate;
console.log(addShui(100,0.1));

const addVAT = addShui.bind(null,0.23);

console.log(addVAT(100))
console.log(addVAT(23))
//小的挑战 -- 创建一个返回函数的函数

const 加税 = function(值){
    return function(率){
        console.log(值 + 值*率)
    };
}
加税(100)(0.1)
