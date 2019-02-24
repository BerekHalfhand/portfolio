var imagemin = require("imagemin"),         // The imagemin module.
  webp = require("imagemin-webp"),          // imagemin's WebP plugin.
  outputFolder = "./src/assets/pics/",       // Output folder
  PNGImages = "./src/assets/pics/*.png",    // PNG images
  JPEGImages = "./src/assets/pics/*.jpg";   // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 90 // Quality setting from 0 to 100
  })]
});
