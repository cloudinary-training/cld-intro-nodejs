require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Auto crop and auto gravity
console.log(cloudinary.url("golfer", {transformation: {
    width: 150, 
    aspect_ratio: "1:2",
    crop: "auto",
    gravity: "auto"
}}));

//NOTE: YOU CANNOT DYNAMICALLY GENERATE OBJECT-BASED GRAVITY URLS SUCH AS EXAMPLE BELOW
//THE TRANSFORMATIONS NEED TO BE EAGERLY GENERATED
//RUN THE FOLLOWING CODE FIRST TO SUCCESSFULLY RUN THE NEXT EXAMPLE
// cloudinary.uploader
// .explicit("man-and-camera", 
//   { type: "upload",
//     eager: [
//       { height: 800,
//         crop: "auto_pad", 
//         gravity: "auto:camera",
//         background: "auto",
//         aspect_ratio: "1:3"
//     }
// ]})
// .then(result=>console.log(result));

// Auto crop with pad and auto gravity focused on camera
console.log(cloudinary.url("man-and-camera.jpg", {transformation: {
    height: 800, 
    aspect_ratio: "1:3",
    crop: "auto_pad",
    gravity: "auto:camera",
    background: "auto"
}}));

