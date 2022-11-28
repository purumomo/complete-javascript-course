'use strict';

const yuYue1 = [];
const Booking = function(
    飞行号码,
    乘客号码 = 1,
    价格 = 乘客号码*199,){
    //需要给参数设默认值 才会在yuYue力显示undeifine
    // 乘客号码 = 乘客号码 || 1;
    // 价格 = 价格 || 199; 

    const yuYue = {
        飞行号码,
        乘客号码,
        价格,
    }
    console.log(yuYue);
    yuYue1.push(yuYue);
}

Booking('LH123');
Booking('LH123',10,800);
Booking('LH123',15);
Booking('LH123',20);

Booking('LH123',undefined,100);//更改第三个参数的时候可以将中间值列为Undefine

Booking('AB1334,10,1');