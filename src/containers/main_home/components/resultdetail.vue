<template>
  <div class="card card-body">
    <div class="row">

      <div class="col-lg-12">
        Result Detail
        <!-- <pre class='bg-dark text-light'>{{ selectedRecord }}</pre> -->
      </div>

      <div class="col-lg-12" v-if="!fetchingInspections">
        <div class="card card-body mb-2" v-for="inspection in selectedInspections" :key="inspection.date" >

          <div class="row">
            <div class="col-lg-12 d-flex">
              <!-- <button class="btn btn-sm btn-outline-dark" v-b-toggle="inspection.date"> -->
                <!-- <i class="fa fa-chevron-down"></i> -->
              <!-- </button> -->
              <p class="lead mb-0">{{ inspection.date }}</p>
            </div>
          </div>

          <!-- element to collapse -->
          <ul class="list-group mt-3">
            <li :class="className(insp)" v-for="insp in inspection.items">
              <span class="badge badge-secondary">{{ insp.violation_item }}</span>
              {{ insp.violation_description }}
              <!-- {{ insp }} -->
              <br>
            </li>
          </ul>

        </div>
      </div>

      <div class="col-lg-12 text-center" v-if="fetchingInspections">
        <i class="fa fa-2x fa-spin fa-spinner"></i>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  methods: {
    className (insp) {
      let css = 'list-group-item'
      if (insp.critical_violation !== 'Not Critical Violation') {
        css += ' list-group-item-danger'
      } else if (insp.violation_item === 'None') {
        css += ' list-group-item-success'
      } else {
        css += ' list-group-item-warning'
      }
      return css
    }
  },
  computed: {
    selectedRecord () {
      return this.$store.getters['record/selectedRecord']
    },
    fetchingInspections () {
      return this.$store.getters['record/fetchingInspections']
    },
    selectedInspections () {
      return this.$store.getters['record/selectedInspections']
    }
  }
}
</script>
