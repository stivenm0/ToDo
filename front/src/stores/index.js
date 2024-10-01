// // store/index.js
import AuthStore from './modules/AuthStore';
import Main from './modules/Main';
import Vuex from 'vuex';


export default new Vuex.Store({
    modules: {
        a: AuthStore,
        m: Main
    },
    state: {},
    mutations: {},
    getters: {},
    actions: {}
})



