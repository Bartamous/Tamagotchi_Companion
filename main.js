// JavaScript source code
console.log('Hello Foo');

const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.enc.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Tamagotchi Companion',
        width: isDev ? 1000 : 500,
        height: 600,

    })

    //open dev tools if in prod env
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })
})

//if not mac quit when closed
app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
})