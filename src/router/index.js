import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Doc from '../components/document/Document.vue'
import Commands from '../components/document/Commands.vue'
import Mac from '../components/document/Mac.vue'
import Windows from '../components/document/Windows.vue'


Vue.use(Router)

export default new Router({
  routes: [
    
    { name:'home', path: '/', component: Home},
    
    { name:'document', path: '/document', component: Doc},
    
    { name:'commands', path: '/document/commands', component: Commands},

    { name:'mac', path: '/document/mac', component: Mac},

    { name:'windows', path: '/document/windows', component: Windows},



   
  ]
})
