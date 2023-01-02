const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file,cb)=>{
        cb(null, './uploads')
    },
    filename:(req, file,cb)=>{
        let ext = path.extname(file.originalname)
        cb(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
})

const imageFileFilter = (req, file, cb)=>{
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error('File format not supported.'), false)
    }
    cb(null, true)
}

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: {fileSize:2*1024*1024}
})

module.exports = upload