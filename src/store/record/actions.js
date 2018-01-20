import _ from 'lodash'
import qs from 'qs'
const API_ROOT = 'https://health.data.ny.gov/resource/5ib6-49en.json'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }, { facility_city }) => {
    commit('fetching', true)
    console.log(facility_city)
    // Fetches Collection from the server
    fetch(API_ROOT + '?' + qs.stringify({ facility_city }))
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
      commit('collection', json)
    }) // TODO - CATCH statement
  },
  // Get restaurants from city
  // data = Backbone.Syphon.serialize(@)
  // data = {facility_city: data.city}
  // Get Inspections by location
  // data: { nys_health_operation_id: @id }
  fetchInspections: ({ commit }, { nys_health_operation_id }) => {
    // nys_health_operation_id
    commit('fetchingInspections', true)
    console.log(nys_health_operation_id)
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
      commit('fetchingInspections', false)

      // Sets state.collection
      commit('selectedInspections', json)
    }) // TODO - CATCH statement
  }
}

// // // //

export default actions
