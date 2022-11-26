/////////////////////////////////
// 编码挑战#1

/*
让我们构建一个简单的投票应用程序！

民意调查有一个问题、一组可供人们选择的选项，以及一个包含每个选项的回复数的数组。此数据存储在下面的启动器对象中。

以下是您的任务：



提示：使用您在本节和上一节中学到的许多工具😉

奖励：使用“displayResults”方法显示测试数据中的 2 个数组。同时使用 'array' 和 'string' 选项。不要将数组放在 poll 对象中！那么在这种情况下 this 关键字应该是什么样子呢？

奖励测试数据 1：[5、2、3]
奖励测试数据 2：[1、5、3、9、6、1]

祝你好运😀
*/


/* 
1. 在“poll”对象上创建一个名为“registerNewAnswer”的方法。该方法做了两件事：
  1.1。显示提示窗口，供用户输入所选选项的编号。提示应如下所示：
        你最喜欢的编程语言是什么？
        0：JavaScript
        1：蟒蛇
        2：生锈
        3：C++
        （写选项号）
  
  1.2.根据输入数字，
  更新 answers 数组。例如，如果选项为 3，则将数组的位置 3 处的值增加 1。
  确保检查输入是否为数字以及该数字是否有意义（例如答案 52 没有意义，对吗？）
*/


const 投票 = {
    问题:'你最喜欢的编程语言是什么？ 只能输入一个数字'+'\n0:javascript,\n1:Python,\n2:Rust,\n3:C++',
    选项:['0:javascript','1:Python','2:Rust','3:C++'],
    答案:new Array(4).fill(0),
    registerNewAnswer:function(){
        //获取答案的数字
        const answer = Number((prompt(`${this.问题}`)));
        console.log(answer);
        //检查输入的类型
        typeof answer === 'number'
         && answer <this.答案.length 
         && this.答案[answer]++;
        this.displayResults();
        this.displayResults('string');
        },

    displayResults:function(type = 'array'){
        if(type === 'array'){
            console.log(this.答案)
        }else if(type === 'string'){
            console.log(`投票的结果是${this.答案.join(', ')}`);
        };
    },
};

//2. 每当用户点击“Answer poll”按钮时调用此方法。
const poll按钮 = document.querySelector('.poll')
poll按钮.addEventListener('click',投票.registerNewAnswer.bind(投票));

//3. 创建一个显示投票结果的方法“displayResults”。
//该方法将字符串作为输入（称为“类型”），可以是“字符串”或“数组”。
//如果 type 是 'array'，只需使用 console.log() 显示结果数组。
//这应该是默认选项。如果 type 为 'string'，
//则显示类似“Poll results are 13, 2, 4, 1”的字符串。

//4. 在每个“registerNewAnswer”方法调用结束时运行“displayResults”方法。

投票.displayResults.call({答案:[5,2,3]},'string');
投票.displayResults.call({答案:[1,5,3,9,6]},'string');