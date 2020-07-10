import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state:{
        token: null,
        user: null,
        isUserLoggedin: false
    },
    mutations:{
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedin = true
            } else{
                state.isUserLoggedin = false
            }
        },
        setUser (state, user) {
            state.token = user
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, token) {
            commit('setUser', token)
        }
    }
})