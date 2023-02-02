/* eslint-disable import/no-anonymous-default-export */
import getbtc from "../../utils/btc"
import getnp from "../../utils/spotify"
export default {
    commands: {
        // echo: {
        //     description: 'prints the given text to the console',
        //     usage: 'echo <text>',
        //     fn: (...args) => args.join(" ")
        // },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'about me.',
            usage: 'about',
            fn: () => {
                return "hi, alaa is here :) enjoy discovering my first made tool :)\n--- \n"
            }
        },
        languages: {
            description: 'languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    \n---\n
                    HTML5, CSS3, JavaScript, Python, C, R \n---\n
                `
            }
        },
        skills: {
            description: 'skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    \n---\n
                    programming           
                    video-editing    
                    photo-editing    
                    football as well :p\n---\n
                `
            }
        },
        // projects: {
        //     description: 'projects I have worked on.',
        //     usage: 'projects',
        //     fn: () => {
        //         return `
        //             \n---\n
        //             'ashterm'                         | 'terminal portfolio'   | 'javascript'
        //             'octocolor'                       | 'github profile color' | 'javascript'
        //             'kanna-chan'                      | 'Discord-Bot'          | 'python'
        //             'wordinal'                        | 'wordle-on-terminal'   | 'javascript'
        //             'weeby.py'                        | 'API-wrapper'          | 'python'
        //             'gitbanner'                       | 'banner-generator'     | 'javascript'\n---\n
        //         `
        //     }
        // },
        // editor: {
        //     description: 'details about my current editor',
        //     usage: 'editor',
        //     fn: () => {
        //         return `
        //             Editor: Visual Studio Code\n
        //             Theme : Catpuccin\n
        //             Font  : Consolas
        //         `
        //     }
        // },
        instagram: {
            description: 'opens my instagram.',
            usage: 'instagram',
            fn: () => {
                window.open('https://instagram.com/alaabrm', '_blank')
                return "opening instagram ..."
            }
        },
        facebook: {
            description: 'opens my facebook.',
            usage: 'facebook',
            fn: () => {
                window.open('https://facebook.com/alaaboubrima', '_blank')
                return "opening facebook..."
            }
        },
        twitter: {
            description: 'opens my twitter.',
            usage: 'twitter',
            fn: () => {
                //window.open('https://twitter.com/_asheeshh', '_blank')
                //return "opening twitter ..."
                return "sorry, I got no twitter :/"
            }
        },
        github: {
            description: 'opens my github profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/alaaboubrima', '_blank')
                return "opening github account..."
            }
        },
        discord: {
            description: 'opens my discord account.',
            usage: 'discord',
            fn: () => {
                window.open('https://discord.com/channels/@ALAA#4247', '_blank')
                return "opening discord account..."
            }
        },
        
        // repo: {
        //     description: "Opens this website's github repository.",
        //     usage: 'repo',
        //     fn: () => {
        //         window.open("https://github.com/asheeeshh/AshTerm", '_blank')
        //         return "opening repository..."
        //     }
        // },
        // spotify: {
        //     description: 'Get info about my recently played song.',
        //     usage: 'spotify',
        //     fn: async () => {
        //         const item = await getnp()
        //         return `
        //             Now Playing/Recently Played\n
        //             ---\n
        //             Song: ${item.song}\n
        //             Artist: ${item.artist}\n---\n
        //         `
        //     }
        // }
    },
    overwrites:{
        
        //  help: {
        //       description: 'list of all available commands',
        //       usage: 'help',
        //   },
         echo: {
             description: 'prints the given text to the console',
             usage: 'echo <text>',
             fn: (...args) => args.join(" ")
         },
        cd: {
            description: 'change directory.. in your imagination :D!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'list files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'clears the terminal',
            usage: 'clear'
        },
         btc: {
             description: 'check the bitcoin price at this moment.',
             usage: 'btc',
         }
    }
}
