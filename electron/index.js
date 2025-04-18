//🛖 Packages Village

const {app, BrowserWindow , ipcMain} = require('electron')
const path = require("path");

let deeplinkingUrl;

app.setAsDefaultProtocolClient('localx');

app.on('open-url', function (event, url) {
  event.preventDefault();
  deeplinkingUrl = url;
});
 
let window
function createWindow() {

  window = new BrowserWindow({
    autoHideMenuBar: true,
    width: 740,
    height: 417,
    minWidth:740,
    minHeight:417,
    title: "LocalX",
    icon: __dirname + 'export/logo.ico',
    titleBarStyle: "hidden",
    autoHideMenuBar: true,
    frame: false,
    titleBarOverlay: {
      color: "#1f2937a4",
      symbolColor: "#fff",
  },
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag:true,
      }
  })
    window.loadURL('file://' + __dirname + '/export/app.html');    

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})



