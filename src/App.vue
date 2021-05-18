<template>
  <div id="app">
    <Sidebar></Sidebar>
    <router-view class="router-view"/>
    <Player></Player>
  </div>
</template>
<style lang="sass">

.router-view
  position: absolute
  bottom: 90px
  left: 232px
  background-color: red
  height: calc(100vh - 90px)
  width: calc(100vw - 232px)

.app
  display: flex
  flex-flow: column
  position: absolute
  width: 100%
  min-width: 630px
  height: 100vh
  background: #333
</style>
<script>
import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";
export default {
  components: {Player, Sidebar}
}
</script>
