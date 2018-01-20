
<template>
  <div class="container-fluid pt-4">
    <LayoutView :collection="collection"/>
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
  computed: {
    collection () {
      return this.$store.getters['record/collection']
    }
  }
}
</script>
