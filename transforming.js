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
