<template>
  <div class="home">
    <navbar-home></navbar-home>
    <div class="container-spacing">
      <div class="row">
        <div class="col-12">
          <span class="section-title">¡Buenos días!</span>
        </div>
      </div>
      <br>
      <div class="row">
        <div v-for="playlist in playListLongs" :key="playlist.id" class="col-4">
          <card-long :playlist="playlist"></card-long>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <span class="section-title">Escuchado recientemente</span>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="card-small" v-for="listenRecently in listenRecentlyPlaylists" :key="listenRecently.id" style="width: 20%">
          <card :playlist="listenRecently"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CardLong from "../shared/CardLong";
import Card from "../shared/Card";
import NavbarHome from "../Navbar/NavbarHome";

export default {
  name: "Home",
  components: {NavbarHome, CardLong, Card},
  data: function () {
    return {
      playListLongs: [
        {id:1,title: 'Playlist1'},
        {id:2,title: "Playlist2"},
        {id:3,title: "Playlist3"}],

      listenRecentlyPlaylists:[
        {id:1,title: 'Playlist1'},
        {id:2,title: "Playlist2"},
        {id:3,title: "Playlist3"},
        {id:4,title: 'Playlist4'},
        {id:5,title: "Playlist5"},
        {id:6,title: "Playlist6"}]
    }
  },
}
</script>

<style scoped lang="sass">
.home
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

.card-small
  padding: 20px
</style>
