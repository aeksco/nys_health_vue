<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <a class="navbar-brand" href="/#/">
      <strong>NYS</strong>Health
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <!-- <li class="nav-item"> -->
          <!-- <a class="nav-link" href="/#/devices">Devices</a> -->
        <!-- </li> -->

      </ul>

    </div>
  </nav>
</template>

<script>
// TODO - this should be split into a series of smaller components
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">

  .navbar-brand
    letter-spacing: .25rem !important
    font-family: sans-serif
    text-transform: uppercase
    font-weight: 100
    letter-spacing: 0.1rem

    strong
      font-weight: 400

</style>
