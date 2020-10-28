const { app, BrowserWindow, Menu } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html');

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
  // win.webContents.openDevTools()
}

// menu
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Keluar',
        click(){
          app.quit();
        }
      }
    ]
  }
];

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
