const CITIES = require('./cities')
const COUNTIES = require('./counties')
const ZIPS = require('./zips')

// Record Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  selectedRecord: state => {
    return state.selectedRecord
  },
  selectedInspections: state => {
    return state.selectedInspections
  },
  fetching: state => {
    return state.fetching
  },
  fetchingInspections: state => {
    return state.fetchingInspections
  },
  cities: state => {
    return CITIES
  },
  counties: state => {
    return COUNTIES
  },
  zips: state => {
    return ZIPS
  }
}

export default getters
