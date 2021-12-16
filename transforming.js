require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Resize an asset
// console.log(cloudinary.image("cheesecake.jpg", {transformation: {width: 300, crop: "scale"}}));

// Crop an asset
// console.log(cloudinary.image("cheesecake.jpg", {transformation: {width: 300, height: 300, crop: "pad"}}));

// Crop with gravity
// console.log(cloudinary.image("dog.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto"}}));

// OPTIONAL - Add Ally cat to your account
// cloudinary.uploader.upload("./assets/Ally.jpg", {public_id: "AllyCat"},
// 	function(error, result) {console.log(result, error)});
// Auto format
// console.log(cloudinary.url("AllyCat.jpg", {transformation: {fetch_format: "auto"}}));

// OPTIONAL - Add the robot to your account
// cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/robot.jpg",
// 	{public_id: "robot"}, function(error, result) {console.log(result, error)});
// Auto quality
// console.log(cloudinary.url("robot.jpg", {transformation: {quality: "auto"}}));

// Rounding
// console.log(cloudinary.image("dog.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto", fetch_format: "auto", quality: "auto", radius: "max"}}));

// Borders
// console.log(cloudinary.url("sample.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto", fetch_format: "auto", quality: "auto", radius: "max", border: "10px_solid_rgb:bde4fb"}}));

// OPTIONAL - Add the "face" image to your account
// cloudinary.uploader.upload("./assets/face.jpg", {public_id: "face"},
// 	function(error, result) {console.log(result, error)});
// Auto background color
// console.log(cloudinary.url("face.jpg", {transformation: {width: 300, height: 300, crop: "pad", fetch_format: "auto", quality: "auto", background: "auto"}}));

// Color effect
// console.log(cloudinary.url("face.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "face", fetch_format: "auto", quality: "auto", effect: "tint:40:magenta"}}));

// OPTIONAL - Add the lake to your account
// cloudinary.uploader.upload("./assets/lake.jpg", {public_id: "lake"},
// 	function(error, result) {console.log(result, error)});
// Improve effect
// console.log(cloudinary.url("lake.jpg", {transformation: {effect: "improve:outdoor"}}));
// Artistic filter
// console.log(cloudinary.url("lake.jpg", {transformation: {effect: "art:zorro"}}));

// OPTIONAL - Add the Cloudinary logo to your account
// cloudinary.uploader.upload("./assets/cloudinary_logo.svg", {public_id: "cloudinary_logo"},
// 	function(error, result) {console.log(result, error)});
// Overlays - Image over video
// console.log(cloudinary.url("dog.mp4", {resource_type: "video", transformation: [{width: 400, crop: "scale"},
// {overlay: "cloudinary_logo", height: "50", gravity: "south_east", x: 10, y: 10}]}));
// Overlays - Text over image
// console.log(cloudinary.url("cheesecake.jpg", {transformation: [{width: 300, height: 300, crop: "thumb", gravity: "auto"},
// {overlay: {font_family: "Arial", font_size: 30, text: "Delicious!"}, color: "lime", height: "30", gravity: "south_west", x: 5, y: 5}]}));