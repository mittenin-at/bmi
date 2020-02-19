const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

const glyphicons = require.context('../../../node_modules/bootstrap-sass/assets/fonts/bootstrap', true)

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("jquery")
import $ from 'jquery'
global.$ = $
global.jQuery = $

require("datatables.net/js/jquery.dataTables")
require("datatables.net-bs/js/dataTables.bootstrap")

require("bootstrap-sass/assets/javascripts/bootstrap")

import '../stylesheets/application'

