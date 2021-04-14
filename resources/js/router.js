// vue router
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AdminBase from "./components/admin/AdminBase.vue";
import LoginComponent from "./views/auth/LoginComponent";
import RegisterComponent from "./views/auth/RegisterComponent";
import CategoryListComponent from "./components/admin/category/List.vue";
import CategoryNewComponent from "./components/admin/category/New.vue"
import CategoryEditComponent from "./components/admin/category/Edit.vue"

export const routes = [
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
        path:'/category-list',
        component:CategoryListComponent
    },
    {
        path:'/add-category',
        component:CategoryNewComponent
    },
    {
        path:'/edit-category/:categoryid',
        component:CategoryEditComponent
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

]