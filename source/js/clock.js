/* 
* Version 2.0
* 1. 将本地存储的变量设置JSON格式，避免以后变量越来越多造成的性能影响
* 2. 添加了默认值，默认倒计时的时间为 17：30，默认倒计时内容为“距离下班还剩”，默认结束提示为“到点了，开冲”
* 3. 布局稍微往上抬高了一点
*/

var configRushTime = localStorage.getItem("configRushTime");
configRushTime = JSON.parse(configRushTime);
if(configRushTime == undefined || configRushTime == "" || configRushTime == null){
  var defaultSetting = {
    'targetHours': 17,
    'targetMins': 30,
    'targetShow': "距离下班还剩",
    'targetFnishShow': '到点了！开冲'
  }
  defaultSetting = JSON.stringify(defaultSetting);
  localStorage.setItem("configRushTime",defaultSetting);
  defaultSetting = JSON.parse(defaultSetting);
  configRushTime = defaultSetting;
}


var lightFlag = localStorage.getItem('lightFlag');
if (lightFlag == '' || lightFlag == undefined || lightFlag == null) {
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.opacity = '100%';
}else{
  document.body.style.backgroundColor = '#333439';
  document.body.style.opacity = '50%';
}

function btn2() {
  if (lightFlag == '' || lightFlag == undefined || lightFlag == null) {
    localStorage.setItem('lightFlag','true');
    location.reload();
  }else{
    localStorage.setItem('lightFlag','');
    location.reload();
  }
}


var show = document.getElementById("show").getElementsByTagName("span");

var targetHours = configRushTime.targetHours;
var targetMins = configRushTime.targetMins;
var targetShow = configRushTime.targetShow;
var targetFnishShow = configRushTime.targetFnishShow;

var showTextBox = document.getElementById('showTextBox');

showTextBox.innerHTML = targetShow;



function btn1(){
  window.location.href = './config.html';
}


var target = new Date();
target.setHours(targetHours);
target.setMinutes(targetMins);
target.setSeconds(0);
target.setMilliseconds(0);

setInterval(function () {
  var time = new Date();

  // var time = new Date('2020-9-27 18:00');
  var num = target - time;

  if (num > 0) {
    num = num % (24 * 60 * 60 * 1000);
    var hour = parseInt(num / (60 * 60 * 1000));
    hour = hour < 10 ? '0' + hour : hour;
    num = num % (60 * 60 * 1000);
    var minute = parseInt(num / (60 * 1000));
    minute = minute < 10 ? '0' + minute : minute;
    num = num % (60 * 1000);
    var second = parseInt(num / 1000);
    second = second < 10 ? '0' + second : second;

    // show[0].innerHTML=day;
    show[0].innerHTML = hour;
    show[1].innerHTML = minute;
    show[2].innerHTML = second;

  } else {
    var showText = document.getElementById('show');
    showText.innerHTML = targetFnishShow;
  }
}, 100)