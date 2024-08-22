const state = () => ({
    showMenu: false,
    menuList: null,
})

const getters = {
    showMenu(state) {
        return state.showMenu
    },
    menuList(state) {
        return state.menuList
    },
}

const mutations = {
    setShowMenu(state, payload) {
        state.showMenu = payload
    },
    setMenuList(state, payload) {
        state.menuList = payload
    },
}

const actions = {
    toggleMenu(context) {
        context.commit('setShowMenu', !context.getters.showMenu)
    },
    hideMenu(context) {
        context.commit('setShowMenu', false)
    },
    showMenu(context) {
        context.commit('setShowMenu', true)
    },

    setMenuList({ commit }, payload) {
        commit('setMenuList', payload)
    },
}

const namespaced = false

export {
    state, getters, mutations, actions,
    namespaced,
}
