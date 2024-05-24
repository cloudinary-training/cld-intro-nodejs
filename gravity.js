require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Compass-style gravity
console.log(cloudinary.url("skateboarder", {transformation: {
    height: 400, 
    crop: "crop",
    gravity: "north_east"
}}));

//Facial Detection - Single face
console.log(cloudinary.url("happy-couple", {transformation: {
    width: 500,
    height: 500, 
    crop: "thumb",
    gravity: "face"
}}));

//Facial Detection - Multiple faces (Thumbnail)
console.log(cloudinary.url("happy-couple", {transformation: {
    width: 500,
    height: 500, 
    crop: "thumb",
    gravity: "faces"
}}));

//Facial Detection - Multiple faces (Fill)
console.log(cloudinary.url("happy-couple", {transformation: {
    width: 500,
    height: 700,
    crop: "fill",
    gravity: "faces"
}}));

//Automatic gravity (Profile photo transformation)
console.log(cloudinary.url("laughing-woman", {transformation: {
    // aspect_ratio: "1:1", 
    height: 300,
    width: 300,
    crop: "thumb",
    radius: "max",
    gravity: "face",
    fetch_format: "png"
}}));

//Automatic gravity focused on subject
console.log(cloudinary.url("boat-and-lake", {transformation: {
    aspect_ratio: 0.7,
    width: 750,
    crop: "fill",
    gravity: "auto:subject"
}}));

//NOTE: YOU CANNOT DYNAMICALLY GENERATE OBJECT-BASED GRAVITY URLS SUCH AS EXAMPLE BELOW
//THE TRANSFORMATIONS NEED TO BE EAGERLY GENERATED
//RUN THE FOLLOWING CODE FIRST TO SUCCESSFULLY RUN THE NEXT EXAMPLE
// cloudinary.uploader
// .explicit("kitchen", 
//   { type: "upload",
//     eager: [
//       { width: 300,
//         crop: "crop", 
//         gravity: "auto:cake"
//     }]})
// .then(result=>console.log(result));

//Automatic gravity focused on object (cake)
console.log(cloudinary.url("kitchen.jpg", {transformation: {
    width: 300,
    crop: "crop",
    gravity: "auto:cake"
}}));
