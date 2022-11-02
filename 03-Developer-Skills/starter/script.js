// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;
if (x === 32) {
  console.log("1111");
}

const calcAge2 = (birthyear) => 2077 - birthyear;
console.log(calcAge2(1997));

//第一种就是用liveserver来实现服务器
//第二种可以使用Nodejs node -v 查看版本
// npm install live-server
//安装npm liveserver → npm install live-server-g

//