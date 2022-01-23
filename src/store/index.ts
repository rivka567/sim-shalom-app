import Vue from 'vue'
import Vuex from 'vuex'
import pdf from 'vue-pdf'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingTask: pdf.createLoadingTask('sidur.pdf')

  },
  getters:{
    getPdfSrc(state)
    {
      return state.loadingTask;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
