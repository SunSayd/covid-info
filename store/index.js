import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const state = () => ({
  total:{
    "date": '1',
    "country": null,
    "cases": 1,
    "deaths": 1,
    "recovered": 1
  },
  countries:{
  }
})
export const getters = () => ({
  date : state => {
    return state.total.date;
  },
})
export const mutations ={
  SET_TOTAL (state, payload)  {
    state.total = payload
  },
  SET_CONTRIES (state, payload) {
    state.countries = payload
  }
}

export const actions ={
  async GET_TOTAL({commit}){
    let responce  = await this.$axios.get('https://coronavirus-stat.herokuapp.com/history/global/')
    commit('SET_TOTAL', responce.data)
  },
  async GET_CONTRIES({commit}){
    let responce  = await this.$axios.get('https://coronavirus-stat.herokuapp.com/world/1580342400/')
    commit('SET_CONTRIES', responce.data)
    console.log( state.countries)
  }
}



