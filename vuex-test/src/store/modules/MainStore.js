const state = {
    input: ''
}

const mutations = {
    setData(state, result){
        state.input = result;
    },

    removeData(state){
        state.input = ''
    }
}

export default{
    state,
    mutations
}