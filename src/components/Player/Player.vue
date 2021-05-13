<template>
  <div class="player">
    <div class="player-inner">
      <div class="player-left">
        <CurrentSong></CurrentSong>
      </div>
      <div class="player-center">
        <PlayerControls></PlayerControls>
      </div>
    </div>

  </div>
</template>

<script>
import CurrentSong from "./CurrentSong";
import PlayerControls from "./PlayerControls";

export default {
  name: "Player",
  components: {PlayerControls, CurrentSong}
}
</script>

<style scoped lang="sass">
.player
  position: fixed
  bottom: 0
  width: 100%
  height: 90px
  z-index: 2
  background: #181818
  &-inner
    display: flex
    align-items: center
    height: 100%
  &-left
    width: 20%
    min-width: 180px
  &-right
    display: flex
    width: 20%
    min-width: 180px
    .device-picker
      margin: 2px 5px 0 auto
    .volume-bar
      margin: 0 15px 0 5px
  &-center
    width: 60%
</style>
