<template>
  <li :class="className" @click="onRecordClick()">
    {{ record.facility }}
  </li>
</template>

<script>

export default {
  props: ['record'],
  computed: {
    className () {
      let css = 'list-group-item'
      if (this.record.selected) css += ' active'
      return css
    },
    fetching () {
      return this.$store.getters['record/fetching']
    }
  },
  methods: {
    onRecordClick () {
      return this.$store.commit('record/selectedRecord', { record: this.record })
    }
  }
}
</script>
