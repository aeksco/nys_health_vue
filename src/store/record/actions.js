import _ from 'lodash'
import qs from 'qs'
const API_ROOT = 'https://health.data.ny.gov/resource/5ib6-49en.json'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  // Get restaurants from city
  fetchCollection: ({ commit }, { facility_city }) => {
    commit('fetching', true)
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
  // Get Inspections by location
  fetchInspections: ({ commit }, { nys_health_operation_id }) => {
    // nys_health_operation_id
    commit('fetchingInspections', true)
    // Fetches Collection from the server
    fetch(API_ROOT + '?' + qs.stringify({ nys_health_operation_id }))
    // Parses response into JSON
    .then((response) => { return response.json() })
    .then((json) => {
      // Sort & group inspections
      json = _.chain(json)
      .sortBy(['date_of_inspection'], ['desc'])
      .groupBy('date_of_inspection')
      .map((inspections, date) => {
        return {
          date: date,
          critical: _.map(inspections, 'total_critical_violations'),
          non_critical: _.map(inspections, 'total_noncritical_violations'),
          critical_uncorrected: _.map(inspections, 'total_crit_not_corrected'),
          items: inspections
        }
      })
      .value()

      // State.fetching = false
      commit('fetchingInspections', false)

      // Sets state.collection
      commit('selectedInspections', json)
    }) // TODO - CATCH statement
  }
}

// // // //

export default actions
