const state = {
    user: {

    },
};
const getters = {};
const actions = {
    loginUser({ }, user) {
        axios.post('/api/user/login', {
            email: user.email,
            password: user.password,
        }).then(response => {
            console.log(response.data);
            if (response.data.access_token) {

                //save toen
                localStorage.setItem('blog_token', response.data.access_token)

                window.location.replace('/home');
            }
        })
    }
};
const mutations = {};

export default {
    namespaced: true,
    state, getters, actions, mutations,
}