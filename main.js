const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width:800,
    height:600,
    webPreferences: {
      nodeIntegration: true,
       enableRemoteModule: true
    },
    icon: path.join(__dirname, '/icons/notee.png')
  })

  win.loadFile('index.html')
}

function fullscreenClick() {
  var window = electron.remote.getCurrentWindow();
  window.setFullScreen(true)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

Menu.setApplicationMenu(null)