module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg',
            config: {
                icon: 'logo.icns'
            }
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                options: {
                    name: 'discord-rpc',
                    productName: 'Discord RPC',
                    icon: 'logo.png'
                }
            }
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    name: 'discord-rpc',
                    productName: 'Discord RPC',
                    icon: 'logo.png'
                }
            }
        },
        {
            name: '@electron-forge/maker-wix',
            config: {
                description: 'Discord RPC app',
                exe: 'discord-rpc.exe',
                language: 1042,
                manufacturer: 'Team int',
                name: 'Discord RPC',
                ui: {
                    chooseDirectory: true
                }
            }
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'discord-rpc',
                exe: 'discord-rpc.exe',
                setupIcon: 'logo.ico',
                setupExe: 'DiscordRpcSetup.exe'
            }
        }
    ],
    packagerConfig: {
        name: 'Discord RPC',
        executableName: 'discord-rpc',
        icon: 'logo'
    }
}
