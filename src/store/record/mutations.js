
// Record Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  collection (state, collection) {
    state.collection = collection
  },
  current (state, attributes) {
    state.current = attributes
  }
}

export default mutations
