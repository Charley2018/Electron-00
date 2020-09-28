//设置cookie
function setStorage() {
    var target0 = document.getElementById('value0').value;
    var target1 = document.getElementById('value1').value;
    localStorage.setItem('targetHour', target0);
    localStorage.setItem('targetMins', target1);
    window.location.href = './index.html';
};


function cancel() {
    window.location.href = './index.html';
}
