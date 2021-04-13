// vue router
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueRouter);

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8000/api';

import ExampleComponent from "./components/ExampleComponent";
import AdminBase from "./components/admin/AdminBase.vue";
import LoginComponent from "./views/auth/LoginComponent";
import RegisterComponent from "./views/auth/RegisterComponent";
const routes = [
    {
        /*
         |--------------------------------------------------------------------------
         | Admin Backend Routes
         |--------------------------------------------------------------------------|
         */
        path: '/dashboard',
        component: AdminBase, // Change the desired Layout here
        meta: { requiresAuth: true },
        children: []
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
        meta: {
            auth: false
        }
    },

];

const router = new VueRouter({
    routes,
    mode: 'history', //https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    linkActiveClass: 'active'
});

export default router;