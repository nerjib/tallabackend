const express = require('express')
const http = require('http')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const Users = require('./src/controllers/users')
const Projects = require('./src/controllers/projects')
const Contractors = require('./src/controllers/contractors');
const LocalReports = require('./src/controllers/localreports');
const Report = require('./src/controllers/reportform')
const multer = require('multer');
const cloudinary = require('cloudinary');
const Analytics = require('./src/controllers/analytics');
const Reports = require('./src/controllers/reports');
const Activity = require('./src/controllers/activitiesform')
const Performance = require('./src/controllers/performance')
const Monitors = require('./src/controllers/monitors')
const MonitorsRep = require('./src/controllers/monitorsReport')
const Chart = require('./src/controllers/charts/charts')



app.use(cors())

http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


dotenv.config();


app.use(express.static(path.join(__dirname, 'public')));


const storage = multer.diskStorage({
  distination: function (req, file, cb) {
    cb(null, './src');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/gif'||'image/png') {
    cb(null, true);
  } else {
    cb(new Error('image is not gif'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
      res.headers('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
      return res.status(200).json({});
    }
    next();
  });
  
app.get('/', function(req,res){
res.send('Welcome to talla')
})
app.use('/api/v1/chart', Chart);
app.use('/api/v1/users', Users);
app.use('/api/v1/monitors', Monitors);
app.use('/api/v1/projects', Projects);
app.use('/api/v1/contractors', Contractors);
app.use('/api/v1/analytics', Analytics);
app.use('/api/v1/reports', Reports);
app.use('/api/v1/monitorsreports', MonitorsRep);
app.use('/api/v1/performance', Performance);


app.post('/api/v1/reportform', upload.single('image'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, function (result) {
     console.log(req.file);
    Report.createReport(req, res, result.secure_url);
  });
});


//app.post('/api/v1/activityform',  (req, res) => {
//console.log(req)
// cloudinary.uploader.upload(req.body.image, function (result) {
  //   console.log(result.secure_url);
   // Activity.createReport(req, res, result.secure_url);
  //});
//});

app.post('/api/v1/activityform', upload.single('image'), (req, res) => {
 // console.log(req.body)
   cloudinary.uploader.upload(req.file.path, function (result) {
      console.log(result.secure_url)
     // res.send({imgurl:result.secure_url})
     Activity.createReport(req, res, result.secure_url);
    });
  });
  
  app.post('/api/v1/weeklyactivityform', upload.single('image'), (req, res) => {
    // console.log(req.body)
      cloudinary.uploader.upload(req.file.path, function (result) {
         console.log(result.secure_url)
        // res.send({imgurl:result.secure_url})
        Activity.createWeeklyReport(req, res, result.secure_url);
       });
     });
   
  app.post('/api/v1/upload', upload.single('image'), (req, res) => {
   // console.log(req.body)
     cloudinary.uploader.upload(req.file.path, function (result) {
      //  console.log(result.secure_url)
        res.send({imgurl:result.secure_url})
    //   Activity.createReport(req, res, result.secure_url);
      });
    });
  
app.post('/api/v1/activityform1', (req, res) => {
     Activity.createActivity(req, res);
  });

  app.post('/api/v1/weeklyactivityform1', (req, res) => {
    Activity.createWeeklyActivity(req, res);
 });

//Change daily report image
 app.post('/api/v1/updatedailyreport', upload.single('image'), (req, res) => {
  // console.log(req.body)
    cloudinary.uploader.upload(req.file.path, function (result) {
       console.log(result.secure_url)
      // res.send({imgurl:result.secure_url})
      Activity.UpdateDailyReport(req, res, result.secure_url);
     });
   });

   app.post('/api/v1/updateweeklyreport', upload.single('image'), (req, res) => {
    // console.log(req.body)
      cloudinary.uploader.upload(req.file.path, function (result) {
         console.log(result.secure_url)
        // res.send({imgurl:result.secure_url})
        Activity.UpdateWeeklyReport(req, res, result.secure_url);
       });
     });
  


module.exports = app;