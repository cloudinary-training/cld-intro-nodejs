require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// List all assets
// cloudinary.api.resources(
// 	function(error, result) {console.log(result, error); });

// List all images with a given prefix
// cloudinary.api.resources({ type: 'upload',  prefix: 'sample' },
// 	function(error, result) {console.log(result, error); });

// Rename an asset
// cloudinary.uploader.rename("cheesecake", "my_cheesecake", {overwrite: true}, function(error, result) {console.log(result, error); });

// Destroy with Upload API
// cloudinary.uploader.destroy("cheesecake", {invalidate: true}, function(error,result) {
// 	console.log(result, error) });

// Delete multiple with Admin API
// cloudinary.api.delete_resources(["squirrel", "sheep"],
// 	function(error, result) {console.log(result, error); });

// Upload and tag an asset
// cloudinary.uploader.upload("./assets/tag.jpg", {tags: "object, literally a tag"},
// 	function(error, result) {console.log(result, error)});

// Tag an existing asset
// cloudinary.uploader.add_tag("animal", [ "cat", "dog" ],
// 	function(error, result) { console.log(result, error) });

// Remove all tags from assets with public ID "cat" and "dog"
// cloudinary.uploader.remove_all_tags([ "cat", "dog" ],
// 	function(error, result) { console.log(result, error) });

// Rename an asset and invalidate
// cloudinary.uploader.rename("cat", "cute_cat", {invalidate: true}, function(error, result) {console.log(result, error); });
