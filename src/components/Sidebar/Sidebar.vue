<template>
  <div class="sidebar">
    <div class="sidebar__inner" >
<!--      <sidebar-nav :links="browse" />-->
<!--      <sidebar-nav title="Library" :links="library" />-->
<!--      <sidebar-nav title="Playlists" :links="playlists.items" />-->
      <v-btn icon :x-large="true" :small="true">
        <v-icon :color="'#fff'" v-text="'mdi-spotify'"></v-icon>
      </v-btn>
      <span style="color: white">VueSpotify clone</span>
      <ul>
        <li><a class="sidebar__init-link selected" href="">
          <v-btn icon :x-large="true">
            <v-icon :color="'#fff'" v-text="'mdi-home'"></v-icon>
          </v-btn>
          <span>Inicio</span></a></li>
        <li><a class="sidebar__init-link" href="">
          <v-btn icon :x-large="true">
            <v-icon :color="'#fff'" v-text="'mdi-magnify'"></v-icon>
          </v-btn>
          <span>Búsqueda</span></a></li>
        <li><a class="sidebar__init-link" href="">
          <v-btn icon :x-large="true">
            <v-icon :color="'#fff'" v-text="'mdi-library'"></v-icon>
          </v-btn>
        <span>Tu biblioteca</span></a></li>
      </ul>
    </div>

    <button class="sidebar__btn">
<!--      <icon class="sidebar__btn-icon" name="plus" />-->
      <span>New playlist</span>
    </button>
    <!-- @todo cover -->
<!--    <playlist-create-modal />-->
  </div>
</template>

<script>


export default {
  name: "Sidebar",

};
</script>

<style scoped lang="sass">

.sidebar
  position: relative
  background: black
  width: 232px
  height: calc(100vh - 90px)

  &__inner
    height: 100%

  &__btn
    display: flex
    align-items: center
    position: absolute
    bottom: 90px
    height: 50px
    width: 100%
    margin-top: 20px
    padding: 0 15px
    color: gray
    font-size: 14px
    border-top: 1px solid #737575
    outline: 0
    cursor: pointer

    &:hover
      color: white

  &__btn-icon
    margin: auto 8px

  &__init-link
    -webkit-box-align: center
    -ms-flex-align: center
    align-items: center
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    height: 40px
    padding: 0 16px
    text-decoration: none

  .selected
    background-color: #282828

  &__init-link span
    font-size: 14px
    font-weight: 700
    letter-spacing: normal
    line-height: 16px
    text-transform: none
    color: white


  .sidebar-nav
    &:not(:last-of-type)
      margin-bottom: 30px
</style>

