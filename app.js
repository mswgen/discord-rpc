const { app, BrowserWindow } = require('electron');
if (require('electron-squirrel-startup')) return app.quit();
const updater = require('update-electron-app');
const path = require('path');
function createWindow() {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'index.js')
        }
    });
    window.loadFile('index.html');
}
app.whenReady().then(() => {
    createWindow();
    if (process.platform == 'win32') {
        updater({
            notifyUser: false
        });
    }
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length == 0) createWindow();
    });
    app.on('window-all-closed', () => app.quit());
});