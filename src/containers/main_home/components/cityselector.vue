<template>
  <div class="card card-body">
    <div class="row">
      <div class="col-lg-12">
        City Selector
        <select class='form-control' v-model="selected" @change="updateCity()">
          <option v-for="city in cities" :key="city">{{ city }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { selected: 'TROY' }
  },
  computed: {
    cities () {
      return this.$store.getters['record/cities']
    }
  },
  methods: {
    updateCity () {
      this.$store.dispatch('record/fetchCollection', { city: this.selected })
    }
  }
}
</script>
