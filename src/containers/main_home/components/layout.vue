<template>
  <div class="row align-items-center">
    <div class="col-lg-12">

      <div class="row my-4">
        <div class="col-lg-12">
          <ul class="list-group">
            <li class="list-group-item" v-for="rec in collection" :key="rec.id">
              {{ rec.facility || rec.permitted_corp_name }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: ['collection']
}
</script>
