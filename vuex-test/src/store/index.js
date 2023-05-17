import Vue from 'vue';
import Vuex from 'vuex';
import MainStore from './modules/MainStore';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        MainStore
    },
});