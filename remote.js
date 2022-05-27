require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//DOCS: https://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url

console.log(cloudinary.url("https://upload.wikimedia.org/wikipedia/commons/8/84/Chocolate_Cake_Flourless_%281%29.jpg", {type: "fetch"}));

console.log(cloudinary.url("remote-media/images/dolphin.jpg", {transformation: [
	{width: "300", zoom: "300", crop: "thumb"}
]}));