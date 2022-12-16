const jwt = require('jsonwebtoken')

const verifyUser = (req, res,next)=>{
    if(!req.headers.authorization){
        let err=new Error('Authorization token is missing ')
        res.status(400)
        next(err)
    }
    token=req.headers.authorization.split(' ')[1]
    console.log(token)


}

module.exports={ verifyUser }