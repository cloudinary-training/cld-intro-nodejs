require('dotenv').config()
const cloudinary = require('cloudinary').v2

//upload images to be worked with in this course, assign public ID for referencing
cloudinary.uploader.upload("assets/boat-and-lake.jpg", {public_id: "boat-and-lake"})

cloudinary.uploader.upload("assets/golfer.jpg", {public_id: "golfer"})

cloudinary.uploader.upload("assets/happy-couple.jpg", {public_id: "happy-couple"})

cloudinary.uploader.upload("assets/kitchen.jpg", {public_id: "kitchen"})

cloudinary.uploader.upload("assets/laughing-woman.jpg", {public_id: "laughing-woman"})

cloudinary.uploader.upload("assets/man-and-camera.jpg", {public_id: "man-and-camera"})

cloudinary.uploader.upload("assets/mussels-pot.jpg", {public_id: "mussels-pot"})

cloudinary.uploader.upload("assets/skateboarder.jpg", {public_id: "skateboarder"})

cloudinary.uploader.upload("assets/woman-hiker.jpg", {public_id: "woman-hiker"})
