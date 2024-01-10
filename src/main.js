import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBriefcase, faTools, faUser, faEnvelope, faBars, faHouse } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser, faEnvelope, faBriefcase, faTools, faBars, faHouse)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
