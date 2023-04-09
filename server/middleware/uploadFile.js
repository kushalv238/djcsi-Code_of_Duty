const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage ({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        const ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

const upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if(file.mimetype == "application/pdf") callback(null, true);
        else {
            console.log("Only pdf files supported");
            logEvents('File Type error: Only pdf files supported', 'mongoErrLog.log');
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024*1024*2
    }
})

module.exports = upload