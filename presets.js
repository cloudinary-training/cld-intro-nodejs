require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//DOCS: https://cloudinary.com/documentation/upload_presets

// Create an unsigned preset
// cloudinary.api.create_upload_preset(
// 	{ name: "unsigned-image", unsigned: true, tags: "unsigned", allowed_formats: "jpg,png" })
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// Create a signed preset
// cloudinary.api.create_upload_preset(
// 	{ name: "signed-image", unsigned: false, tags: "signed",allowed_formats: "jpg,png" })
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// Create a named transformation called "standard"
// cloudinary.api.create_transformation("standard", "w_150,h_150,c_thumb,g_auto")
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});
// Apply it to an image
// console.log(cloudinary.url("cheesecake.jpg", {transformation: ["standard"]}));
