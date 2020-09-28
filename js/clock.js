var flag = 0;

function btn2() {
  if (flag == 0) {
    document.body.style.backgroundColor = '#3f3f3f';
    document.body.style.opacity = '50%';
    flag = 1;
  }else{
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.opacity = '100%';
    flag = 0;
  }
}


var show = document.getElementById("show").getElementsByTagName("span");

var targetHours = localStorage.getItem('targetHour');
var targetMins = localStorage.getItem('targetMins');

if(targetHours == undefined || targetMins == undefined){
  targetMins = 30;
  targetHours = 17;
}

function btn1(){
  window.location.href = './config.html';
}

setInterval(function () {
  var time = new Date();

  // var time = new Date('2020-9-27 18:00');
  var target = new Date();
  target.setHours(targetHours);
  target.setMinutes(targetMins);
  target.setSeconds(0);
  target.setMilliseconds(0);

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
    show[0].innerHTML = 0 + '0';
    show[1].innerHTML = 0 + '0';
    show[2].innerHTML = 0 + '0';
  }
}, 100)