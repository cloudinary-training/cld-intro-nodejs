# cld-intro-nodejs
Introduction to Cloudinary Using Node

## Environment Setup

### Install Node.js and NPM
You will need to install Node.js on your machine, version 10 or higher.
 Important - Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install

```bash
# verify versions
$ node --version
v16.13.0

$ npm --version
8.1.0
```

### Choose an IDE or Use Text Editor

- [Visual Studio Code](https://code.visualstudio.com/download) 
- [WebStorm](https://www.jetbrains.com/webstorm/) 
- [Sublime](https://www.sublimetext.com/) 
- [Atom](https://atom.io/) 
- [iTerm](https://iterm2.com/) 

### Download Repository

[Introduction to Cloudinary for API Users and Node.js Developers](https://github.com/cloudinary-training/cld-intro-nodejs)

- Node scripts for this module are located in the  `/optimization`, `access-control` directories
- Assets are located in `/assets` directory
- Run code from root directory 

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](/assets/env_variable.png)

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

## Run Code: Test Credentials

Make sure to npm install the Node.js libraries. You will be using the `cloudinary` and the `dotenv` libraries.

```bash
npm i
```

```bash
node testCredentials.js
```
You should see your Cloud Name, API Key, and API_SECRET. PS- Keep your secret private!

### Run Code:
Example- run scripts from the root because all references to local assets are relative to the root.

All of the functions are commented out for demo purposes, so you'll first need to uncomment functions to run them.

```bash
node upload.js
```

