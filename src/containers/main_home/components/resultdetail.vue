<template>
  <div class="card card-body">
    <div class="row">
      <div class="col-lg-12">
        Result Detail
        <pre class='bg-dark text-light'>{{ selectedRecord }}</pre>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    selectedRecord () {
      return this.$store.getters['record/selectedRecord']
    },
    selectedInspections () {
      return this.$store.getters['record/selectedInspections']
    }
  }
}
</script>
