import { 
    defaultCommand, 
    deleteCommand, 
    exitCommand, 
    flushCommand, 
    getCommand,
    helpCommand,
    setCommand } from './methods.js'
import commands from './commands.js'
import readline from 'readline'


/**
 * 
 * Initialized required packages and imports needed
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Main method for app
 * 
 * @return void
 */
const asyncLoopInput = () => {
    
    // Start retrieving input
    rl.question('>>> ', (cmd) => {

        // Initialize variables for getting inputs
        let command = cmd.split(' ')[0]
        let key = cmd.split(' ')[1]
        let val = cmd.split(' ')[2]

        // Commands main conditions
        switch(command) {
            case commands.set.cmd:
                setCommand(key, val);
                asyncLoopInput();
                break;
            case commands.get.cmd:
                getCommand(key);
                asyncLoopInput();
                break;
            case commands.del.cmd:
                deleteCommand(key);
                asyncLoopInput();
                break;
            case commands.flush.cmd:
                flushCommand();
                asyncLoopInput();
                break;
            case commands.exit.cmd:
                exitCommand();
                break;
            case commands.help.cmd:
                helpCommand();
                asyncLoopInput();
                break;
            default:
                defaultCommand();
                asyncLoopInput();
                break;
        }
    })
}

// Call the main method
asyncLoopInput();