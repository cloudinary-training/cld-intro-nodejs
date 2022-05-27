require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//DOCS: https://cloudinary.com/documentation/image_transformations

// Resize an asset
// console.log(cloudinary.url("cheesecake.jpg", {transformation: {width: 300, crop: "scale"}}));

// Crop an asset
// console.log(cloudinary.url("cheesecake.jpg", {transformation: {width: 300, height: 300, crop: "pad"}}));

// Crop with gravity
// console.log(cloudinary.url("dog.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto"}}));

// Auto format
// console.log(cloudinary.url("AllyCat.jpg", {transformation: {fetch_format: "auto"}}));

// Auto quality
// console.log(cloudinary.url("robot.jpg", {transformation: {quality: "auto"}}));

// Rounding
// console.log(cloudinary.url("dog.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto", fetch_format: "auto", quality: "auto", radius: "max"}}));

// Borders
// console.log(cloudinary.url("sample.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "auto", fetch_format: "auto", quality: "auto", radius: "max", border: "10px_solid_rgb:bde4fb"}}));

// Auto background color
// console.log(cloudinary.url("face.jpg", {transformation: {width: 300, height: 300, crop: "pad", fetch_format: "auto", quality: "auto", background: "auto"}}));

// Color effect
// console.log(cloudinary.url("face.jpg", {transformation: {width: 300, height: 300, crop: "thumb", gravity: "face", fetch_format: "auto", quality: "auto", effect: "tint:40:magenta"}}));

// Improve effect
// console.log(cloudinary.url("lake.jpg", {transformation: {effect: "improve:outdoor"}}));
// Artistic filter
// console.log(cloudinary.url("lake.jpg", {transformation: {effect: "art:zorro"}}));

// Overlays - Text over image
// console.log(cloudinary.url("cheesecake.jpg", {transformation: [{width: 300, height: 300, crop: "thumb", gravity: "auto"},
// {overlay: {font_family: "Arial", font_size: 30, text: "Delicious!"}, color: "lime", height: "30", gravity: "south_west", x: 5, y: 5}]}));
// Overlays - Image over video
// console.log(cloudinary.url("dog.webm", {resource_type: "video", transformation: [{width: 400, crop: "scale"},
// {overlay: "cloudinary_logo", height: "50", gravity: "south_east", x: 10, y: 10}]}));
