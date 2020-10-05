// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


let ipcRenderer = require('electron').ipcRenderer;

var max = document.getElementById('max');
if (max) {
    max.addEventListener('click', () => {
        //发送最大化命令
        ipcRenderer.send('window-max');
    })
}

//最大化图标切换
ipcRenderer.on('main-window-max', (event) => {
	max.setAttribute('src', './source/images/fullscreen-exit-line.png');
});
ipcRenderer.on('main-window-unmax', (event) => {
	max.setAttribute('src', './source/images/fullscreen-line.png');
});

var min = document.getElementById('min');
if (min) {
    min.addEventListener('click', () => {
        //发送最小化命令
        ipcRenderer.send('window-min');
    })
}

var close = document.getElementById('close');
if (close) {
    close.addEventListener('click', () => {
        //发送关闭命令
        ipcRenderer.send('window-close');
    })
}