// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  Menu.setApplicationMenu(null);
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 280,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },
    frame: false //无边框
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
  
  let ipcMain = require('electron').ipcMain;
  //接收最小化命令
  ipcMain.on('window-min', function() {
      mainWindow.minimize();
  })
  //接收最大化命令
  ipcMain.on('window-max', function() {
      if (mainWindow.isMaximized()) {
          mainWindow.restore();
      } else {
          mainWindow.maximize();
      }
  })
  //接收关闭命令
  ipcMain.on('window-close', function() {
      mainWindow.close();
  })

  mainWindow.on('maximize', function () {
    mainWindow.webContents.send('main-window-max');
   })
   mainWindow.on('unmaximize', function () {
     mainWindow.webContents.send('main-window-unmax');
   })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
