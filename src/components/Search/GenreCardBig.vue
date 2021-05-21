<template>
  <div class="card-big red">
    <h3 class="card-big-title">Rock</h3>
    <img class="card-big-image" src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730" alt="">
  </div>
</template>

<script>
export default {
  name: "GenreCardBig"
}
</script>

<style scoped lang="sass">
.card-big
  border: none
  border-radius: 8px
  grid-column: span 2
  height: 220px
  overflow: hidden
  position: relative
  width: 100%

  &-title
    font-size: 40px
    letter-spacing: -.04em
    line-height: 1.3em
    max-width: 100%
    overflow-wrap: break-word
    padding: 16px
    position: absolute
    color: white

  &-image
    bottom: 0
    -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%)
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%)
    height: 128px
    position: absolute
    width: 128px
    right: 0
    -webkit-transform: rotate(25deg) translate(18%, -2%)
    transform: rotate(25deg) translate(18%, -2%)


.red
  background-color: red


</style>
