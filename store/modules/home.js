// 首页state管理
const state = {
  menu:[],
  hotPlace:[]
}
const mutations = {
  setMenu(state,menu){
    state.menu = menu
  },
  setHotPlace(state, val){
    state.hotPlace = val
  }
}

const actions = { 
  setMenu({commit},val){
    commit('setMenu',val)
  },
  setHotPlace({commit}, val){
    commit('setHotPlace', val)
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}