require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Crop an asset
console.log(cloudinary.url("laughing-woman", {transformation: {
    width: 1000, 
    aspect_ratio: "1:1",
    crop: "crop",
    gravity: "auto"
}}));

//Resize an asset
console.log(cloudinary.url("woman-hiker", {transformation: {
    width: 300, 
    crop: "scale"
}}));