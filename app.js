const electron = require('electron');
if (require('electron-squirrel-startup')) return app.quit();
const updater = require('update-electron-app');
const path = require('path');
function createWindow() {
    const window = new electron.BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'index.js')
        }
    });
    window.loadFile('index.html');
}
electron.app.whenReady().then(() => {
    createWindow();
    if (process.platform == 'win32') {
        updater({
            notifyUser: false
        });
    }
    electron.app.on('activate', () => {
        if (electron.BrowserWindow.getAllWindows().length == 0) createWindow();
    });
    electron.app.on('window-all-closed', () => electron.app.quit());
});