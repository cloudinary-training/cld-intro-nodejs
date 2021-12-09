require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.url("food/my_favorite/cheesecake"));
console.log(cloudinary.url("dog", {resource_type: "video"}));

console.log(cloudinary.image("food/my_favorite/cheesecake"));

console.log(cloudinary.video("dog"));
