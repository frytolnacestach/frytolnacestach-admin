const sharp = require('sharp')

export default function (context, inject) {
  // Inject `sharp` library as `$sharp` global variable
  inject('sharp', sharp)
}