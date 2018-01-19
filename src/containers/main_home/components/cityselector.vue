<template>
  <div class="card card-body">
    <div class="row">
      <div class="col-lg-12">
        City Selector
        <v-select :options="cities"/>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  props: ['collection'],
  components: {
    vSelect
  },
  computed: {
    cities () {
      return this.$store.getters['record/cities']
    }
  }
}
</script>
