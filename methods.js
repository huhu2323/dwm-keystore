import commands from "./commands.js"
import fs from 'fs'
import { storage, DEFAULT_FILE } from './storage.js'

/**
 * Function for storing values
 * 
 * @param key 
 * @param value 
 * @return void
 */
export const setCommand = (key, value) => {
    storage[key] = value
}

/**
 * Function for retriving values
 * 
 * @param key
 * @return void
 */
export const getCommand = (key) => {
    if (storage[key] === undefined) {
        console.log('null')
    } else {
        console.log(storage[key])
    }
}

/**
 * Function for deleting values
 * 
 * @param key 
 * @return void
 */
export const deleteCommand = (key) => {
    delete storage[key]
}

/**
 * Function for saving all values to file
 * 
 * @return void
 */
export const flushCommand = () => {
    fs.writeFile(DEFAULT_FILE, JSON.stringify(storage), err => {
        if (err) {
          console.error(err);
        }
    });
}

/**
 * Function for exiting application
 * 
 * @return void
 */
export const exitCommand = () => {
    process.exit();
}

/**
 * Function for printing all commands
 * 
 * @return void
 */
export const helpCommand = () => {
    Object.entries(commands).forEach(([key, value]) => {
        console.log(`${value.cmd}: ${value.help}`)
    })
}

/**
 * Function for default, non-existing command
 * 
 * @return void
 */
export const defaultCommand = () => {
    console.log('noop')
}
