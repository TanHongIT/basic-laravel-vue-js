// Support vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        category: [],
        test_category: "This is show category test",
        post: [],
        blogpost: [],
        singlePost: [],
        all_categories: [],
        latest_post: []
    },
    getters: {
        getCategory(state) {
            return state.category
        },
        etCategoryTest(state) {
            return state.test_category
        },
        getAllPost(state) {
            return state.post
        },
        getBlogPost(state) {
            return state.blogpost
        },
        singlePost(state) {
            return state.singlePost
        },
        all_categories(state) {
            return state.all_categories
        },
        latest_post(state) {
            return state.latest_post
        }

    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response) => {
                    console.log(response.data);
                    context.commit('categories', response.data.categories)
                })
        },
        gelAllPost(context) {
            axios.get('/post')
                .then((response) => {
                    console.log(response.data)
                    context.commit('all_post', response.data.posts)
                })
        },
    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },
        allpost(state, payload) {
            return state.post = payload
        },
        getBlogPost(state, payload) {
            return state.blogpost = payload
        },
        siglePost(state, payload) {
            return state.singlePost = payload
        },
        all_categories(state, payload) {
            return state.all_categories = payload
        },
        getPostByCatId(state, payload) {
            state.blogpost = payload
        },
        getSearchPost(state, payload) {
            state.blogpost = payload
        },
        latest_post(state, payload) {
            state.latest_post = payload
        }
    }
});

export default store;