const {v4:uuid} = require('uuid')
const {format} = require('date-fns')
const fs =  require('fs')
const path =  require('path')

const log = (msg) =>{
    const logItem = `\n ${uuid()} \t ${format(new Date(),'yyyy-mm-dd \t hh:mm:ss' ) } \t ${msg}` 
    fs.appendFile(path.join(__dirname,'logs','event-logs.txt'),logItem, (err)=> console.log(err))
}


//  pure function is easily to test than impure function
module.exports= {log};