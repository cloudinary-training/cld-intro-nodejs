require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//DOCS: https://cloudinary.com/documentation/managing_assets

// List all assets
// cloudinary.api.resources()
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// List all images with a given prefix
// cloudinary.api.resources({ type: 'upload',  prefix: 'sample' })
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// Rename an asset
// cloudinary.uploader.rename("food/my_favorite/cheesecake", "my_cheesecake", {overwrite: true})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// Destroy with Upload API
// cloudinary.uploader.destroy("my_cheesecake", {invalidate: true})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// Delete multiple with Admin API
// cloudinary.api.delete_resources(["squirrel", "sheep"])
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// Upload and tag an asset
// cloudinary.uploader.upload("./assets/tag.jpg", {tags: "object, literally a tag"})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// Tag an existing asset
// cloudinary.uploader.add_tag("animal", [ "cat" ])
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});

// cloudinary.uploader
//   .add_tag('animal', 'dog',{resource_type:'video'})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Remove all tags from assets with public ID "cat" and "dog"
// cloudinary.uploader
//   .remove_all_tags(['cat'])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// cloudinary.uploader
//   .remove_all_tags(['dog'], { resource_type: 'video' })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Rename an asset and invalidate
// cloudinary.uploader.rename("cat", "cute_cat", {invalidate: true})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});
