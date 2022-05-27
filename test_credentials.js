require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//Getting started DOCS: https://cloudinary.com/documentation/how_to_integrate_cloudinary
//Node.js SDK: https://cloudinary.com/documentation/node_integration

console.log(cloudinary.config().cloud_name);
console.log(cloudinary.config().api_key);
console.log(cloudinary.config().api_secret);
