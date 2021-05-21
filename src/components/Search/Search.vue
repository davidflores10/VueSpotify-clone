<template>
  <div class="search">
    <navbar-home></navbar-home>
    <div class="container-spacing">
      <div class="row">
        <div class="col-12">
          <span class="section-title">Your top genres</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6"><genre-card-big></genre-card-big></div>
        <div class="col-6"><genre-card-big></genre-card-big></div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <span class="section-title">Browse all</span>
        </div>
      </div>
      <div class="row">
        <div class="col-3 card-small-column" v-for="genre in allGenres" :key="genre.title"> <genre-card-small :genre="genre"></genre-card-small></div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import NavbarHome from "../Navbar/NavbarHome";
import GenreCardBig from "./GenreCardBig";
import GenreCardSmall from "./GenreCardSmall";

export default {
  name: "Search",
  components: {NavbarHome,GenreCardBig, GenreCardSmall},
  data: function () {
    return {
      mainGenres: [],
      allGenres: [{title: 'Rock', url: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730'},
        {title: 'Blues', url: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730'},
        {title: 'Folk', url:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730'},
        {title: 'Country', url:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730'},
        {title: 'Soul', url:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730'},
      ]
    }
  }
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

.card-small-column
  padding-top: 25px
</style>
