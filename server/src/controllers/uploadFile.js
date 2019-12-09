const multer = require('multer')
const express = require('express');
const tools = require('../tools/index');
const IMAGE = require('../models/images');
const app = express()
 const checkFileType = (file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') cb(null, true)
  else cb(null, false)
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/uploadsImages')
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname)
    },
  })
  const upload = multer({
    storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  });

app.post('/upload',upload.single('files'),(req,res) => {
  console.log('sss'+req.file);
  file = req.file;
  if(tools.isEmpty(file)){
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  if(file.size === 0){
    return res.status(400).json({ msg: 'is not a file'});
  }
  IMAGE.insertImage('AddImage',{userId : 1, path : file.path})
  .then((resp) => {
    if(resp)
      res.send(file);
  }).catch((err)=>{
    res.send(err);
  })
});
module.exports = app;
