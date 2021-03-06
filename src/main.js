import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// COMPONENTS
// import ProjTemplate from './components/template/ProjTemplate'
// Vue.component('proj-template', ProjTemplate)

// PLUGINS
import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful)

import AOS from 'aos'
import 'aos/dist/aos.css'

import Toasted from 'vue-toasted'
Vue.use(Toasted)

import VueAgile from 'vue-agile'
Vue.use(VueAgile)

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// FONTAWESOME ICONS 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faShoppingCart,
  faSearch,
  faArrowRight, 
  faArrowLeft,
  faArrowDown,
  faArrowUp,
  faUserCircle,
  faAngleRight,
  faAngleLeft,
  faPaperPlane,
  faStar,
  faStarHalf,
  faTimes,

  faPlus,
  faMinus, 
} from '@fortawesome/free-solid-svg-icons'

import { 
  faInstagram,
  faFacebook, 
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

Vue.component('fa-icon', FontAwesomeIcon)
library.add(
  faShoppingCart,
  faSearch,
  faArrowRight, 
  faArrowLeft, 
  faArrowDown,
  faArrowUp,
  faUserCircle,
  faAngleRight,
  faAngleLeft,
  faPaperPlane,
  faStar,
  faStarHalf,
  faTimes,

  faPlus,
  faMinus,
  faInstagram,
  faFacebook,
  faTwitter
)

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
