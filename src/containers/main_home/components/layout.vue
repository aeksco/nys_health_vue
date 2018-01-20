<template>
  <div class="row">
    <div class="col-lg-4">
      <CitySelector/>
      <br/>
      <ResultFilter/>
      <br/>
      <ResultList :collection="collection" />
    </div>
    <div class="col-lg-8">
      <ResultDetail/>
    </div>

  </div>
</template>

<script>
import CitySelector from './cityselector'
import ResultFilter from './resultfilter'
import ResultList from './resultlist'
import ResultDetail from './resultdetail'

export default {
  props: ['collection'],
  components: {
    CitySelector,
    ResultFilter,
    ResultList,
    ResultDetail
  }
}
</script>
