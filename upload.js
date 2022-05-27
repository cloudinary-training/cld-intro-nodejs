require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// DOCS: https://cloudinary.com/documentation/image_upload_api_reference

//////
// Basic Upload Method
//////
// cloudinary.uploader.upload("./assets/cat.jpg")
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});


//////
// Resource Type
//////
// cloudinary.uploader.upload("./assets/dog.webm", {resource_type: "auto"})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});


// cloudinary.uploader.upload("./assets/dog.mp4", {resource_type: "video", public_id: "dog"})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader.upload("./assets/BLKCHCRY.TTF",
// 	{resource_type: "raw", use_filename: true, unique_filename: false})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});


//////
// Public ID - Naming Options
//////
// cloudinary.uploader.upload("./assets/cat.jpg", {use_filename: true, unique_filename: true})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader.upload("./assets/cat.jpg", {use_filename: true, unique_filename: false})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader.upload("./assets/cat.jpg", {public_id: "ZeldaCat"})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

//////
// Folder
//////
// cloudinary.uploader.upload("./assets/cheesecake.jpg", {public_id: "food/my_favorite/cheesecake"})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader.upload("./assets/dog.jpg", {folder: "pets/my_favorite"})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

//////
// Upload Source Options
//////
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/5/56/Chocolate_cupcakes.jpg")
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader.upload("s3://my-bucket/my-path/example.jpg")
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader.upload("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=")
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader.upload("ftp:user1:mypass@ftp.example.com/sample.jpg")
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});
