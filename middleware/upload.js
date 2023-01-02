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


const upload = multer({storage: storage})

module.exports = upload