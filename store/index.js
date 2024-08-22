export const state = () => ({
    loading: false,
})

export const getters = {
    loading(state) { return state.loading },
}

export const mutations = {
    setLoading(state, payload) { state.loading = payload },
}

export const actions = {
    startLoading({ commit }) { commit('setLoading', true) },
    stopLoading({ commit }) { commit('setLoading', false) },
}
