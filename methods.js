import commands from "./commands.js"
import fs from 'fs'
import { storage, supportedFiletypes, logs, DEFAULT_FILETYPE, DEFAULT_FILENAME } from './storage.js'

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
export const flushCommand = (filetype, filename) => {

    // Initiate vars
    filename = filename ? filename : DEFAULT_FILENAME
    filetype = filetype ? filetype : DEFAULT_FILETYPE
    supportedFiletypes.includes(filetype) ? filetype : DEFAULT_FILETYPE
    let fileString = ''

    // Generate string
    switch (filetype) {
        case 'csv':
            fileString = jsonToCsv(storage)
            break;
        case 'json':
            fileString = JSON.stringify(storage)
            break;
    }

    // Write to disk
    fs.writeFile(filename + '.' + filetype, fileString, err => {
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
 * Function for printing all logs
 * 
 * @return void
 */
 export const logsCommand = () => {
    Object.entries(logs).forEach(([key, value]) => {
        console.log(value)
    })
}

/**
 * Function for default, non-existing command
 * 
 * @return void
 */
export const arithmeticCommand = (command, firstKey, secondKey) => {
    if (command && firstKey && secondKey && parseInt(storage[firstKey]) && parseInt(storage[secondKey])) {
        switch (command) {
            case 'add':
                console.log(parseInt(storage[firstKey]) + parseInt(storage[secondKey]))
                break;
            case 'min':
                console.log(parseInt(storage[firstKey]) - parseInt(storage[secondKey]))
                break;
            case 'mul':
                console.log(parseInt(storage[firstKey]) * parseInt(storage[secondKey]))
                break;
            case 'div':
                console.log(parseInt(storage[firstKey]) / parseInt(storage[secondKey]))
                break;
        }
    } else {
        console.log('noop')
    }
}

/**
 * Function for default, non-existing command
 * 
 * @return void
 */
export const defaultCommand = () => {
    console.log('noop')
}

/**
 * Function to convert object to CSV
 * 
 * @return string
 */
const jsonToCsv = (json) => {
    let result = ''
    Object.entries(json).forEach(([key, value]) => {
        let arrVal = [key, value];
        result += arrVal.join(',');
        result += '\n'
    })

    return result;
}