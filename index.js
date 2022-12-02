import { 
    defaultCommand, 
    deleteCommand, 
    exitCommand, 
    flushCommand, 
    getCommand,
    helpCommand,
    logsCommand,
    setCommand,
    arithmeticCommand } from './methods.js'
import commands from './commands.js'
import readline from 'readline'
import { logs } from './storage.js';


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
        let extra = cmd.split(' ')[3]
        
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
                flushCommand(key, val);
                asyncLoopInput();
                break;
            case commands.exit.cmd:
                exitCommand();
                break;
            case commands.help.cmd:
                helpCommand();
                asyncLoopInput();
                break;
            case commands.logs.cmd:
                logsCommand();
                asyncLoopInput();
                break;
            case commands.arith.cmd:
                arithmeticCommand(key, val, extra);
                asyncLoopInput();
                break;
            default:
                defaultCommand();
                asyncLoopInput();
                break;
        }
        
        // Save to logs
        logs.push(cmd);
    })
}

// Call the main method
asyncLoopInput();