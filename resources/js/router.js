// vue router
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ExampleComponent from "./components/ExampleComponent";
import AdminBase from "./components/admin/AdminBase.vue";
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

];

const router = new VueRouter({
    routes,
    mode: 'history', //https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    linkActiveClass: 'active'
});

export default router;