import Vue from 'vue'
import VueRouter from 'vue-router'


import Header from './components/Header.vue';
import Create from './components/Create.vue';
import About from './components/About.vue';
import Articles from './components/Articles.vue';
import Article from './components/Article.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter)
export const routes = [/*{
    path: '',
    components: {
        'app-header': Header
    }
},*/
{path: '/', component: Home},
{path: '/about', component: About},
{path: '/articles', component: Articles},
{path: '/create', component: Create},
{path: '/articles/:id', component: Article}
]