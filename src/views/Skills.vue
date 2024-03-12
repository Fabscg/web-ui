<template>
    <div class="skills">
        <h1 class="text-white font-cursive font-display w3-jumbo align-center flex justify-center">Programming Languages</h1>
        <div :key="icon.id" v-for="icon in icons" class="text-white font-mono text-center z-40">
            <font-awesome-icon icon="{['faHouse']}" class="text-2xl" />
            
        
            
        </div>
        <FontAwesomeIcon icon="fa-solid fa-check-square" />
  <FontAwesomeIcon icon="fa-regular fa-coffee" />
        <div class="text-white"></div>
        <div class="text-white"></div>

        <div></div>

    </div>
</template>
<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    setup() {
        icons: {
            [
                { id: 1, name: "HTML5", icon: "fa-brands fa-html5" },
                { id: 2, name: "CSS3", icon: "fa-brands fa-css3-alt" },
                { id: 3, name: "JavaScript", icon: "fa-brands fa-js-square" },
                { id: 4, name: "Vue.js", icon: "fa-brands fa-vuejs" },
                { id: 5, name: "Node.js", icon: "fa-brands fa-node-js" },
                { id: 6, name: "Express.js", icon: "fa-brands fa-node-js" },
                { id: 7, name: "Nuxt.js", icon: "fa-brands fa-npm" },
                { id: 8, name: "React.js", icon: "fa-brands fa-react" },
                { id: 9, name: "Sass", icon: "fa-brands fa-sass" },
                { id: 10, name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
                { id: 11, name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
                { id: 12, name: "SQL", icon: "fa-brands fa-database" },
                { id: 13, name: "MongoDB", icon: "fa-brands fa-database" },
                { id: 14, name: "MySQL", icon: "fa-brands fa-database" },
                { id: 15, name: "Git", icon: "fa-brands fa-git-alt" },
                { id: 16, name: "GitHub", icon: "fa-brands fa-github" },
                { id: 17, name: "GitLab", icon: "fa-brands fa-gitlab" },
                { id: 18, name: "Heroku", icon: "fa-brands fa-heroku" },
                { id: 19, name: "Vue Router", icon: "fa-brands fa-vuejs" },
                { id:20, name:"Quasar", icon:"fa-brands fa-quasar" }
            ]
        }
        
    },
}
</script>