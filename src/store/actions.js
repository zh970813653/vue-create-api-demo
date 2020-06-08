const actions = {
  setToastVisible: ({ commit }, toastVisible) => {
    return commit('SET_TOAST_VISIBLE', toastVisible)
  },
  setPopVisible: ({ commit }, popVisible) => {
    return commit('SET_POP_VISIBLE', popVisible)
  }
}

export default actions
