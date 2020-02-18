require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("bootstrap-sass/assets/javascripts/bootstrap")

import '../stylesheets/application'

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)
