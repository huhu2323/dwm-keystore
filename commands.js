
/**
 * Command list
 */
export default {
    set: {
        cmd: 'SET',
        help: 'Command to store a value. e.g. SET key value'
    },
    get: {
        cmd: 'GET',
        help: 'Command to retrieve a value. e.g. GET key'
    },
    del: {
        cmd: 'DEL',
        help: 'Command to delete a value. e.g. DEL key'
    },
    flush: {
        cmd: 'FLUSH',
        help: 'Command to store all values to a file.'
    },
    help: {
        cmd: 'HELP',
        help: 'Command to print all existing command.'
    },
    exit: {
        cmd: 'EXIT',
        help: 'Command to stop application.'
    }
}