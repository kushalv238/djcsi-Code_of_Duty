var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var imgSchema = require('./model.js');
var fs = require('fs');
var path = require('path');
var multer = require('multer');
const looksSame = require('looks-same');

app.set("view engine", "ejs");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB Connected"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

app.get('/', (req, res) => {
    imgSchema.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items: data})
    })
});


app.post('/', upload.single('image'), (req, res, next) => {

    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
             item.save();
            res.redirect('/');
        }
    });
});

var port = process.env.PORT || '3000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})



compare();

async function compare()
{
    const Jimp = require("jimp");
    async function crop() { // Function name is same as of file name
        // Reading Image
        const image = await Jimp.read
        ('C:\\Users\\harsh\\Desktop\\ekyc\\Capture.JPG');
        image.crop(-10, -10, 410, 350)
        .write('C:\\Users\\harsh\\Desktop\\ekyc\\crop.JPG');
        
     }
     
     
     console.log("Image is processed successfully");

     const img1 = await Jimp.read("crop.jpg")
     const img2 = await Jimp.read("16 kb pp.jpg");

   // console.log(`distance       ${Jimp.distance(img1, img2)}`);
    //console.log(`diff.percent   ${Jimp.diff(img1, img2).percent}\n`);
   const dist = Jimp.distance(img1, img2)
   if(dist > 0.3)
   {
    console.log("Not same");
   }
   else 
   console.log("Same");
}




