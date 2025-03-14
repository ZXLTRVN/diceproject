const { app, BrowserWindow, ipcMain } = require('electron') //imports two electron modules with CommonJS module syntax

//'app' controls the app's event lifecycle and 'BrowserWindow' creates and manages app windows

const path = require('node:path')

const createWindow = () => {
  // Create the browser window.
  //this function loads web page into a new BrowserWindow instance
  const win = new BrowserWindow({
    width: 736,
    height: 977,
    icon: path.join(__dirname, "images", "cherry.ico"),
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Make sure this is enabled
      nodeIntegration: false, // Also ensure nodeIntegration is false for security
    },
  });

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
  //quits the app when all windows are closed (Windows and Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})