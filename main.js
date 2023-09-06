const { app, BrowserWindow, ipcMain, webContents, BrowserView } = require('electron');
const fs = require('fs');
const path = require('path');
let first;

const createWindow = () => {
    const options = {
        width: 640,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration : true,
            contextIsolation: false
        }
    };
    first = new BrowserWindow(options);
    first.loadFile('index.html');
    first.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow();
    let apples = 10;

    ipcMain.on('reqCount', (e) =>{
        e.reply('count', apples);
    });
    ipcMain.on('reqSteal', (e) =>{
        apples--;
        e.reply('count', apples);
    });
    ipcMain.on('reqBroadcast', (e) => {
        // const contents = webContents.getAllWebContents();
        // for (const c of contents)
        // {

        //     c.send('count', apples);
        // }
        
        first.loadFile('calendar.html');
    });

    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

