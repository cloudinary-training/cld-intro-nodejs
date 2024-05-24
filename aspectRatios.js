require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Crop an image to 16:9 aspect ratio
console.log(cloudinary.url("mussels-pot", {transformation: { 
    crop: "crop",
    aspect_ratio: "16:9"
}}));

// Crop an image to 1:1 aspect ratio
console.log(cloudinary.url("mussels-pot", {transformation: { 
    crop: "crop",
    aspect_ratio: "1:1"
}}));