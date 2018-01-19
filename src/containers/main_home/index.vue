
<template>
  <div class="container-fluid">
    <LayoutView :collection="collection" />
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'main_home',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Main - Home'
  },
  created () {
    this.$store.dispatch('record/fetchCollection')
  },
  computed: {
    collection () {
      return this.$store.getters['record/collection']
    }
  }
}
</script>
