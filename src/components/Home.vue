<template>
  <div>
    <Sidebar></Sidebar>
    <Player></Player>
  </div>
</template>

<script>
import Player from "./Player/Player";
import Sidebar from "./Sidebar/Sidebar";
export default {
name: "Home",
  components: {Sidebar, Player}
}
</script>

<style scoped>

</style>
