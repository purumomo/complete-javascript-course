const day = 'monday';

switch (day){
    case 'monday': //day 对应上面的值
        console.log('Play piano');
        console.log('Go to have a sex');
        break;  //如果注释掉这里 那么
    case'tuesday':
        console.log('Play RainbowSex');
        break;
    case'wednesday':
    case'thursday':
        console.log('Write code examples');
        break;
    case'friday':
        console.log('We need go home');
        break;
    case'Weekend':
        console.log('time to sleep');
        break;
    default:
        console.log('你需要打飞机')
    }

//如果用if else 来实现; 等号必须是===
// if (day === 'monday'){
//     console.log('Play piano');
//     console.log('Go to have a sex');
// }else if (day === 'tuesday'){
//     console.log('Play RainbowSex');
// }else if (day === 'wednesday'){
// }else if (day === 'thursday'){
//     console.log('Play RainbowSex');
// }else if (day === 'friday'){
//     console.log('We need go home');
// }else if (day ==='Weekend'){
//     console.log('time to sleep');
// }else{
//     console.log('你需要打飞机');
// }

