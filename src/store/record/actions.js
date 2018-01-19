import Factory from './factory'
import _ from 'lodash'
const API_ROOT = 'https://health.data.ny.gov/resource/5ib6-49en.json'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }) => {
    commit('fetching', true)

    // Fetches Collection from the server
    fetch(API_ROOT)
    // Parses response into JSON
    .then((response) => { return response.json() })
    .then((json) => {
      // Adds unique ID to each record
      // TODO - we may want to group records here as well
      json = _.map(json, (rec) => {
        rec.id = _.uniqueId()
        return rec
      })

      // State.fetching = false
      commit('fetching', false)

      // Sets state.collection
      commit('sync', json)
    }) // TODO - CATCH statement
  },

  create: ({ commit }, attributes) => Factory.create({ commit }, attributes)
}

// // // //

export default actions
