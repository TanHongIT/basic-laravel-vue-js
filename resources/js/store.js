import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        category: [],
        post: [],
        blogpost: [],
        singlePost: [],
        all_categories: [],
        latestpost: []
    },
    getters: {
        getCategory(state) {
            return state.category
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
        latestpost(state) {
            return state.latestpost
        }

    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response) => {
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
        getBlogPost(context) {
            axios.get('/blogpost')
                .then((response) => {
                    // console.log(response.data)
                    context.commit('getBlogPost', response.data.posts)
                })
        },
        getPostById(context, payload) {
            axios.get('/singlePost/' + payload)
                .then((response) => {
                    context.commit('singlePost', response.data.post)
                })
        },
        all_categories(context) {
            axios.get('/categories')
                .then((response) => {

                    context.commit('all_categories', response.data.categories)
                })
        },
        getPostByCatId(context, payload) {
            axios.get('/category-post/' + payload)
                .then((response) => {
                    console.log(response.data.posts)
                    context.commit('getPostByCatId', response.data.posts)
                })
        },
        SearchPost(context, payload) {
            axios.get('/search?s=' + payload)
                .then((response) => {
                    context.commit('getSearchPost', response.data.posts)
                })

        },
        latestPost(context) {
            axios.get('/latest-post')
                .then((response) => {
                    // console.log(response.data)
                    context.commit('latest-post', response.data.posts)
                })
        }
    },
    mutations: {
        categoreis(state, data) {
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
        latestpost(state, payload) {
            state.latestpost = payload
        }
    }
});

export default store;