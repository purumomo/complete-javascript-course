//严格模式 可以让你写更安全的代码 必须放在第一行 可以让开发者避免错误
'use strict';// 打开这个开关 会让你的代码错误更加清晰

let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log('I can drive');

//严格模式中 禁用了一些未来模式可能用到的一些定义
// const interface = 'audio';
// const private = 123;
// const if = 23; 