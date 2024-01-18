// JavaScript source code
console.log('Hello Foo');

const { app, BrowserWindow } = require('electron');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Frienotchi',
        width: '500',
        height: '600',

    })

    mainWindow.loadFile();
}