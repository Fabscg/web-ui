import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/js/v4-shims.js'
import '@fortawesome/fontawesome-free/js/brands.js'

/* import specific icons */
import { faBriefcase, faTools, faEnvelope, faBars, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add( faEnvelope, faBriefcase, faTools, faBars, faHouse, faUser)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
