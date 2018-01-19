const CITIES = require('./cities')
const COUNTIES = require('./counties')
const ZIPS = require('./zips')

// Record Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  current: state => {
    return state.current
  },
  fetching: state => {
    return state.fetching
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
