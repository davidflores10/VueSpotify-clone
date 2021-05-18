<template>
  <div>
    <div class="card card-small">
      <img class="card-img-top card-small-img" src="https://mosaic.scdn.co/640/ab67616d00001e02358f874d5d31e76a8fe3f6d0ab67616d00001e026c44679425e2695001b35d72ab67616d00001e0273304ce0653c7758dd94b259ab67616d00001e02ba5db46f4b838ef6027e6f96" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title card-small-title">Nombre Playlist</h5>
        <p class="card-text card-small-text">De David Flores</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['playlist']
}
</script>

<style scoped lang="sass">
.card-small
  background-color: hsla(0, 0%, 100%, .1)
  border-radius: 4px
  position: relative
  -webkit-transition: background-color .3s ease
  transition: background-color .3s ease

  &-title
    color: white

  &-text
    color: white

  &-img
    padding: 12px

</style>
