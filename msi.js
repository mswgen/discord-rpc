const { MSICreator } = require('electron-wix-msi');
const path = require('path');
const creator = new MSICreator({
    appDirectory: path.join(__dirname, 'out/win-ia32-unpacked'),
    outputDirectory: path.join(__dirname, 'out/msi'),
    exe: 'Discord RPC.exe',
    description: 'Discord RPC app',
    version: require('./package.json').version,
    name: 'Discord RPC',
    manufacturer: 'Team int',
    features: {
        autoUpdate: true,
        autoLaunch: false
    },
    arch: 'x86',
    ui: {
        chooseDirectory: true
    },
    appIconPath: path.join(__dirname, 'build/icon.ico')
});
creator.create().then(async () => {
    await creator.compile();
});