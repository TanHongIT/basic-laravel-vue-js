require('./bootstrap');
import router from './router';

window.Vue = require('vue');
import store from "./store";

// V-form: https://github.com/cretueusebiu/vform
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form; //call

//Support moment js with vue filter
// import moment from 'moment';
import {filter} from './filter'

import Vuetify from '../plugins/vuetify'
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//admin
Vue.component('admin-base-component', require('./components/admin/AdminBase').default);

// Partials
Vue.component('layout-sidebar-admin', require('./views/layouts/partials/admin/LayoutSidebar').default);
Vue.component('layout-navbar-admin', require('./views/layouts/partials/admin/LayoutNavbar').default);

// Blog
Vue.component('public-blog', require('./components/blog/PublicComponent').default);

//auth
Vue.component('account-login-component', require('./views/auth/LoginComponent').default);

Vue.component('pagination', require('laravel-vue-pagination'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    vuetify: Vuetify,
    el: '#app',
    data: {},
    methods: {},
    router: router,
    store,
});
