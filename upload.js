require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//////
// Basic Upload Method
//////
// cloudinary.uploader.upload("./assets/cat.jpg", 
// 	function(error, result) {console.log(result, error)});


//////
// Resource Type
//////
// cloudinary.uploader.upload("./assets/dog.mp4", {resource_type: "auto"},
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("./assets/dog.mp4", {resource_type: "video"},
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("./assets/BLKCHCRY.TTF", {resource_type: "raw"},
// 	function(error, result) {console.log(result, error)});


//////
// Public ID - Naming Options
//////
// cloudinary.uploader.upload("./assets/cat.jpg", {use_filename: true, unique_filename: true},
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("./assets/cat.jpg", {use_filename: true, unique_filename: false},
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("./assets/cat.jpg", {public_id: "ZeldaCat"},
// 	function(error, result) {console.log(result, error)});


//////
// Folder
//////
// cloudinary.uploader.upload("./assets/cheesecake.jpg", {public_id: "food/my_favorite/cheesecake"},
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("./assets/dog.jpg", {folder: "pets/my_favorite"},
// 	function(error, result) {console.log(result, error)});


//////
// Upload Source Options
//////
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/5/56/Chocolate_cupcakes.jpg",
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("s3://my-bucket/my-path/example.jpg",
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=",
// 	function(error, result) {console.log(result, error)});

// cloudinary.uploader.upload("ftp:user1:mypass@ftp.example.com/sample.jpg",
// 	function(error, result) {console.log(result, error)});
