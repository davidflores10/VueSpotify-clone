<template>
  <div class="search">
    <navbar-home></navbar-home>
    <div class="container-spacing">
      <div class="row">
        <div class="col-12">
          <span class="section-title">Your top genres</span>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import NavbarHome from "../Navbar/NavbarHome";

export default {
  name: "Search",
  components: {NavbarHome}
}
</script>

<style scoped lang="sass">
.search
  background-color: #121212
  overflow-y: auto

.section-title
  color: #fff
  display: inline-block
  max-width: 100%
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  font-size: 32px
  font-weight: 700
  letter-spacing: -.04em
  line-height: 36px
  text-transform: none

.container-spacing
  padding: 65px 32px
</style>
