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
export const mutations = () => ({
  SET_TOTAL : (state, payload) => {
    state.total = payload
  },
  SET_CONTRIES : (state, payload) => {
    state.countries = payload
  }
})
export const actions = () => ({
  GET_TOTAL : async (context, payload) => {
    let { data } = await axios.get('https://coronavirus-stat.herokuapp.com/history/global')
    context.commit('SET_TOTAL', data)
  },
  GET_CONTRIES : async (context, payload) => {
    let { data } = await axios.get('https://coronavirus-stat.herokuapp.com/world/1580342400')
    context.commit('SET_TOTAL', data)
  }
})


