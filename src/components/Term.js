import Terminal from 'react-console-emulator'
import commands from '../components/Commands/commands.js'
import React from 'react'
import figlet from 'figlet';
import getbtc from '../utils/btc'
import getbtc2 from '../utils/btc2'


export default function Term() {
    const cmds = commands.commands
    const owrs = commands.overwrites
    const terminal = React.createRef()
    const [prompt, setPrompt] = React.useState('you@/alaa:~$ ')
    const [home, sethome] = React.useState('alaa')
    const [dir, setdir] = React.useState({
        'alaa': []
    })


    
    return (
        <Terminal
            ref={terminal}
            welcomeMessage={[
                "welcome!",
                "---",
                "type 'help' to see a list of commands.",
                "---",
                "type 'adv' to see an advanced list of commands.",
                "---",
                "try starting with 'btc' to check the bitcoin price at this moment",
                "---",
            ]}
            commands={{
                btc: {
                    description: 'check the bitcoin price at this moment',
                    usage: 'btc',
                    fn: async () => {
                        const rate = await getbtc()
                        const rate1 = await getbtc2()
                        terminal.current.pushToStdout("")
                        return('btc is now: '+rate+' usd, '+'last update was at: '+rate1+'(GMT+0).\n---\n')
                    }
                },
                echo: {
                    description: 'prints the given text to the console',
                    usage: 'echo <text>',
                    fn: (...args) => args.join(" ")
                },
                clear: {
                    description: 'clears the terminal',
                    usage: 'clear',
                    fn: () => {
                        terminal.current.clearStdout()
                    }
                },
                
                cd: {
                    description: 'change directory.. in your imagination :D!',
                    usage: 'cd <directory>',
                    fn: (...args) => {
                        if (args.length===1 && args[0]==='..') {
                            if (prompt === 'you@/alaa:~$ ') {
                                return 'cannot go up'
                            } else {
                                setPrompt(prompt.substring(0, prompt.lastIndexOf('/'))+":~$ ")
                                sethome(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                                //console.log(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                                //console.log(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1))
                                //console.log(prompt.lastIndexOf('/'))
                                return 'changed directory'
                            }
                        } else {
                            if (dir[home].includes(args[0])) {
                                setPrompt(`${prompt.slice(0, -4)+ "/" + args.join('/') + ":~$ "}`)
                                sethome(args.join('/'))
                                //console.log(prompt.slice(0, -4)+ "/" + args.join('/'))
                                return 'changed directory'
                            } else {
                                return 'cannot find directory'
                            }
                        }
                        
                    }
                },
                ls: {
                    description: 'list of all the files in current directory',
                    usage: 'ls',
                    fn: () => {
                        if (dir[home].length === 0) {
                            return 'nothing here :(\nuse mkdir to create a new directory inside this one.'
                        } else {
                            return dir[home].join('\n')
                        }
                    }

                },
                mkdir: {
                    description: 'make a directory',
                    usage: 'mkdir <directory>',
                    fn: (...args) => {
                        if (args.length===1) {
                            setdir({
                                ...dir,
                                [home]: [...dir[home], args[0]],
                                [args[0]]:[]
                            })
                            //console.log(dir)
                            return `created directory ${args[0]}.`
                        } else {
                            return 'invalid arguments'
                        }
                    }
                },
                adv: {
                    description: 'List all available commands',
                    usage: 'adv',
                    fn: () => {
                        return `
                            ${Object.keys(owrs).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${owrs[cmd].description}${" ".repeat(45-owrs[cmd].description.length)} | ${owrs[cmd].usage}`).join('\n')}
                        `
                    }
                },
                help: {
                    description: 'List all available commands',
                    usage: 'help',
                    fn: () => {
                        return `
                            ${Object.keys(cmds).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${cmds[cmd].description}${" ".repeat(30-cmds[cmd].description.length)}`).join('\n')}
                        `
                    }
                },
                ...cmds
            }}
            promptLabel={prompt} 
            autoFocus
            style={{
                backgroundColor:null,
                minHeight: null,
                maxHeight: null,
                overflow: 'auto',
                height: '100%',
                width: '100%',     
            }}
            styleEchoBack='fullInherit'
            
            contentStyle={{ color: '#ffb86c' , fontWeight: 'normal', paddingLeft: null}} // Text colour
            promptLabelStyle={{ color: '#ff5555' , fontWeight:'normal'}} // Prompt label colour
            inputTextStyle={{ color: '#f1fa8c' , fontWeight: 'normal'}}
            messageStyle={{ color: '#8be9fd' , fontWeight: 'normal', paddingLeft: null}}
            scrollBehavior='auto'
            noDefaults
           
        />
    )
    
}