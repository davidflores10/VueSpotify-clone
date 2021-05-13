<template>
  <div class="current-track">
    <div class="current-track__cover">
<!--      <router-link :to="createUrlForCover(playback.context)">-->
        <img
            class="current-track__img"
            src="https://i.scdn.co/image/ab67616d00004851dc0cb47f6cee440cf6221a76"
        />
<!--      </router-link>-->
    </div>

    <div class="current-track__info">
<!--      <router-link-->
<!--          class="current-track__name"-->
<!--          :to="{ name: 'album', params: { id: playback.item.album.id } }"-->
<!--      >-->
      <div class="current-track__name">
        Nombre canción
      </div>

<!--      </router-link>-->

<!--      <track-addition-->
<!--          :trackID="currentTrackID"-->
<!--          :isSaved="isSavedTrack"-->
<!--          v-on:updateTrackstatus="onTrackUpdate"-->
<!--      />-->

      <div class="current-track__artists">
<!--        <router-link-->
<!--            class="current-track__link"-->
<!--            v-for="(artist, index) in playback.item.artists"-->
<!--            :key="index"-->
<!--            :to="{ name: 'artist', params: { id: artist.id } }"-->
<!--        >-->
        <div class="current-track__link">
          Nombre artista
        </div>

<!--          <template v-if="index !== playback.item.artists.length - 1">-->
<!--            ,&nbsp;-->
<!--          </template>-->
<!--        </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "currentSong",
  components: {
  },
  computed: {

  },
  data() {
    return {
      currentTrackID: "",
      isSavedTrack: false
    };
  },
  methods: {
    // async checkSavedTrack(id) {
    //   try {
    //     const response = await api.spotify.library.checkUserSavedTracks(id);
    //     this.isSavedTrack = response.data[0];
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    createUrlForCover(context) {
      if (context) {
        const chunks = context.uri.split(":");
        let route = { name: context.type };
        switch (context.type) {
          case "playlist":
            Object.assign(route, {
              params: {
                user_id: chunks[2],
                playlist_id: chunks[chunks.length - 1]
              }
            });
            break;
          case "album":
          case "artist":
            Object.assign(route, {
              params: { id: chunks[chunks.length - 1] }
            });
            break;
        }
        return route;
      } else {
        return {};
      }
    },
    onTrackUpdate(id) {
      this.checkSavedTrack(id);
    }
  },
  // watch: {
  //   playback() {
  //     if (this.currentTrackID !== this.playback.item.id) {
  //       this.currentTrackID = this.playback.item.id;
  //     }
  //     this.checkSavedTrack(this.currentTrackID);
  //   }
  // },
  // created() {
  //   this.currentTrackID = this.playback.item.id;
  //   this.checkSavedTrack(this.currentTrackID);
  // }
};
</script>

<style lang="sass">
.current-track
  display: flex
  align-items: center
  padding-top: 15px
  &__cover
    width: 56px
    min-width: 56px
    height: 56px
    margin: 0 15px
  &__img
    width: 100%
  &__info
    position: relative
    overflow: hidden
    padding-right: 20px
    white-space: nowrap
    text-overflow: ellipsis
    .track-addition
      position: absolute
      right: 0
      top: 2px
  &__name
    color: #fff
    font-size: 14px
    &:hover
      text-decoration: underline
      cursor: pointer
  &__artists
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    padding: 5px 0
    font-size: 11px
  &__link
    color: gray
    &:hover
      color: #fff
      text-decoration: underline
      cursor: pointer
</style>
