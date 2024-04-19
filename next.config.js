// const withFonts = require('next-fonts')
// const withPlugins = require('next-compose-plugins')
// const optimizedImages = require('next-optimized-images')
// const withVideos = require('next-videos')

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       inlineImageLimit: 8192,
//       imagesFolder: 'images',
//       imagesName: '[name]-[hash].[ext]',
//       handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico'],
//       optimizeImages: true,
//       optimizeImagesInDev: false,
//       mozjpeg: {
//         quality: 80,
//       },
//       optipng: {
//         optimizationLevel: 3,
//       },
//       pngquant: false,
//       gifsicle: {
//         interlaced: true,
//         optimizationLevel: 3,
//       },
//       webp: {
//         preset: 'default',
//         quality: 75,
//       },
//     },
//   ],
//   [withFonts],
//   [withVideos],
// ])
