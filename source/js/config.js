/* 
* Version 2.0
* 1. 将本地存储的变量设置JSON格式，避免以后变量越来越多造成的性能影响
* 2. 添加了input默认填值
* 3. 布局稍微往上抬高了一点
*/


var configRushTime = localStorage.getItem("configRushTime");
configRushTime = JSON.parse(configRushTime);
console.log(configRushTime);
document.getElementById('value0').value = configRushTime.targetHours;
document.getElementById('value1').value = configRushTime.targetMins;
document.getElementById('value2').value = configRushTime.targetShow;
document.getElementById('value3').value = configRushTime.targetFnishShow;



//设置cookie
function setStorage() {
    var target0 = document.getElementById('value0').value;
    var target1 = document.getElementById('value1').value;
    var target2 = document.getElementById('value2').value;
    var target3 = document.getElementById('value3').value;
    var rushTimeConfig = {
        'targetHours': target0,
        'targetMins': target1,
        'targetShow': target2,
        'targetFnishShow': target3,
    }
    rushTimeConfig = JSON.stringify(rushTimeConfig);
    localStorage.setItem("configRushTime", rushTimeConfig);
    window.location.href = './index.html';
};


function cancel() {
    window.location.href = './index.html';
}


