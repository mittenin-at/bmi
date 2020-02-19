const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

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

import './nvd3/d3.v2'
import './nvd3/fisheye'
import './nvd3/nv.d3'

require("bootstrap-sass/assets/javascripts/bootstrap")

import '../stylesheets/application'

