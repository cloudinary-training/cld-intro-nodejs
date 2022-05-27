require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//DOCS: https://cloudinary.com/documentation/backups_and_version_management

// Upload and ensure asset is backed up
// cloudinary.uploader.upload("./assets/cat.jpg", {backup: true})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});
