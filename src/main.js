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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7vgHYnk4RlbsiQONm93q2KiOzcXx1fMM",
  authDomain: "web-portfolio-1bf32.firebaseapp.com",
  projectId: "web-portfolio-1bf32",
  storageBucket: "web-portfolio-1bf32.appspot.com",
  messagingSenderId: "435298034888",
  appId: "1:435298034888:web:2e8dacbac8eeaf5671f1fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* add icons to the library */
library.add( faEnvelope, faBriefcase, faTools, faBars, faHouse, faUser)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
