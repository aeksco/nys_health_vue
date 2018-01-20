
// Record Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  collection (state, collection) {
    state.collection = collection
  },
  selectedRecord (state, record) {
    if (state.selectedRecord) {
      state.selectedRecord.selected = false
    }
    record.selected = true
    state.selectedRecord = record
  },
  fetchingInspections (state, isFetching) {
    state.fetchingInspections = isFetching
  },
  selectedInspections (state, inspections) {
    state.selectedInspections = inspections
  }
}

export default mutations
