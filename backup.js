require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Upload and ensure asset is backed up
cloudinary.uploader.upload("./assets/cat.jpg", 
	{backup: true},
	function(error, result) {console.log(result, error); });