<template>
  <div class="card card-body">
    <div class="row">
      <div class="col-lg-12">
        Result List
        <i class="fa fa-spin fa-spinner" v-if="fetching"/>
        <ul class="list-group">
           <ResultChild v-for="record in collection" :key="record.id" :record="record" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ResultChild from './ResultChild'

export default {
  props: ['collection'],
  components: {
    ResultChild
  },
  computed: {
    fetching () {
      return this.$store.getters['record/fetching']
    }
  }
}
</script>
