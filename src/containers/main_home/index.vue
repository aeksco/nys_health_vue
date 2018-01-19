
<template>
  <div class="container-fluid pt-4">
    <i class="fa fa-spin fa-spinner" v-if="fetching"/>
    <LayoutView :collection="collection" v-if="!fetching"/>
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
    },
    fetching () {
      return this.$store.getters['record/fetching']
    }
  }
}
</script>
