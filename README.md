# KeyStore

A JS value storage system. 

## Pre-requisites

Please install NodeJS 16.xx or above

[NodeJS Download Link](https://nodejs.org/en/download/)

## Usage
```bash

# Command to store a value. e.g. SET key value
>>> SET name James
No output
This will save the value "James" in the key "name"

# Command to retrieve a value. e.g. GET key
>>> GET name
Output: James

# Command to delete a value. e.g. DEL key
>>> DEL name
No output
This will delete the value with the key "name"

# Command to store all values to a file.
>>> FLUSH
No output
This will output a file called out.json with all the values. The file name is configurable in the code.

# Command to print all existing command.
>>> HELP
Output: 
   SET: Command to store a value. e.g. SET key value
   GET: Command to retrieve a value. e.g. GET key
   DEL: Command to delete a value. e.g. DEL key
   FLUSH: Command to store all values to a file.
   HELP: Command to print all existing command.
   EXIT: Command to stop application.

# Command to stop application.
>>> EXIT
This will exit the application
```