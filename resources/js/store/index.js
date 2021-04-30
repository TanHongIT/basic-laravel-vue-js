// Support vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import currentUser from './modules/currentUser';

const store = new Vuex.Store({
    modules: {
        currentUser,
    },
    state: {
        category: [],
        test_category: "This is show category test",
        all_categories: [],
    },
    getters: {
        getCategory(state) {
            return state.category
        },
        etCategoryTest(state) {
            return state.test_category
        },
        all_categories(state) {
            return state.all_categories
        },

    },
    actions: {
        allCategory(context, currentPage) {
            axios.get('/get-all-category')
                .then((response) => {
                    context.commit('categories', response.data.categories)
                })
                .catch(e => {
                    console.log(e);
                })
        },
    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },
        all_categories(state, payload) {
            return state.all_categories = payload
        },
    }
});

export default store;