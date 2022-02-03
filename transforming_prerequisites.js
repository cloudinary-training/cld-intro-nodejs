require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload("./assets/cheesecake.jpg", {public_id: "cheesecake"})
	.then(()	 => {console.log("✓ cheesecake")})
	.catch(error => {console.log("× cheesecake (" + error.message + ")")});
cloudinary.uploader.upload("./assets/dog.jpg", {public_id: "dog"})
	.then(()	 => {console.log("✓ dog")})
	.catch(error => {console.log("× dog (" + error.message + ")")});
cloudinary.uploader.upload("./assets/Ally.jpg", {public_id: "AllyCat"})
	.then(()	 => {console.log("✓ AllyCat")})
	.catch(error => {console.log("× AllyCat (" + error.message + ")")});
cloudinary.uploader.upload("./assets/face.jpg", {public_id: "face"})
	.then(()	 => {console.log("✓ face")})
	.catch(error => {console.log("× face (" + error.message + ")")});
cloudinary.uploader.upload("./assets/lake.jpg", {public_id: "lake"})
	.then(()	 => {console.log("✓ lake")})
	.catch(error => {console.log("× lake (" + error.message + ")")});
cloudinary.uploader.upload("./assets/cloudinary_logo.svg", {public_id: "cloudinary_logo"})
	.then(()	 => {console.log("✓ cloudinary_logo")})
	.catch(error => {console.log("× cloudinary_logo (" + error.message + ")")});
cloudinary.uploader.upload("./assets/dog.webm", {public_id: "dog", resource_type: "video"})
	.then(()	 => {console.log("✓ dog.webm")})
	.catch(error => {console.log("× dog.webm (" + error.message + ")")});
cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/robot.jpg", {public_id: "robot"})
	.then(()	 => {console.log("✓ robot")})
	.catch(error => {console.log("× robot (" + error.message + ")")});
