    //   //传统模式里 需要连接到html中 需要在html里加入<script>
      
    //   // 在这里添加alert语句 就可以让你打开对应html的同时 弹窗对应语句
    //   let js = 'amazing';
    //   if (js === 'amazing') alert('JJBOM is javascript is boom');
    //   //关于如何显示计算结果 必须加入console语句 并且会显示在控制台里面
    //   //就像搭桥一样
    //   40+12;
    //   console.log(40+12); 
    //   console.log(1+1+1+1);

    //变量的运用 就像把东西放到盒子里（变量） 在外面写上标签 这样更方便寻找
    let js = 'zhi'
    console.log(40+12); 

    console.log("jonas");
    console.log(142345231);

    let firstName = "jonas";
    console.log(firstName);

    let vaa = "bianliangzhi";
    console.log(vaa);

    //驼峰命名规则 camelCase 并且不能以数字开头
    let first = 'aaaaa';
    let firstNameLikeThisYouKnow = "shouzimubudaxie";

    let panDuan = true;
    console.log(panDuan);
    //typeof 可以查询变量的属性
    console.log(typeof true);
    console.log(typeof firstName);
    console.log(typeof vaa);

    //动态输入更改值
    js = 'Yes!';
    console.log(js);

    //const let var 的用法以及区别 let声明变量!! const声明常量!!
    //如果你的变量不需要更改(比如年龄) 就用__? 这样也能减少编码错误
    //优先const 其次let 不要用var
    let age = 30;
    age = 31; //这里就更改了量了
    console.log(age);

    const age2 = 1990;
    // age2 = 1999; const是无法更改变量的值的 同时也不能是一个空值
    console.log(age2);
    var job2 = 'programmer';
    console.log(job2);

    //根据年份算他的年龄
    const birthYear = 1997;
    const sexual = 'male';
    const Now = 2022;
    const myAge = Now - birthYear;
    console.log(birthYear,myAge,sexual);

    //输出名字 带空格的
    const firstNameIs = 'chaoRen';
    const LastNameIs = 'JJBOM';
    console.log(firstNameIs +' '+ LastNameIs);

    let x = 5 + 3 * 111;
    x += 1123;
    //值也是可以更具顺序更改的
    x++;
    console.log(x);
    console.log(x>Now);

    const bijiaozhi1 = 100;
    const bijiaozhi2 = 200;
    console.log(bijiaozhi1 -1 >= bijiaozhi2 - 101);

    //你甚至可以同时声明2个变量；
    let bianliang1,biangliang2;
    bianliang1 = bianliang2 = 20 - 10 + 5;
    console.log(bianliang1,bianliang2);

    //字符串的连接
    const firstNameCao = 'CAO';
    const job = 'fontEndEngineer';


                     