<template>
  <div class="player-controls">
    <v-btn
        icon
        :x-large="true"
    >
      <v-icon :color="'#fff'" v-text="'mdi-shuffle'"></v-icon>
    </v-btn>
    <v-btn
        icon
        :x-large="true"
    >
      <v-icon :color="'#fff'" v-text="'mdi-skip-previous'"></v-icon>
    </v-btn>
    <template v-if="false">
      <!--      pause>-->
    </template>
    <template v-else>
      <v-btn
          icon
          :x-large="true"
      >
        <v-icon :color="'#fff'"
                v-text="'mdi-play-circle'"></v-icon>
      </v-btn>
    </template>
    <v-btn
        icon
        :small="'skip-next'"
        :x-large="'skip-next'"
    >
      <v-icon :color="'#fff'" v-text="'mdi-skip-next'"></v-icon>
    </v-btn>
    <v-btn
        icon
        :x-large="true"
    >
      <v-icon :color="'#fff'" v-text="'mdi-repeat'"></v-icon>
    </v-btn>
  </div>
</template>
<script>

export default {
  name: "player-controls",
  computed: {
    classesShuffle() {
      return [
        "player-controls__button",
        "icon-shuffle",
        {
          "player-controls__button--active": true
        }
      ];
    },
    classesRepeat() {
      return [
        "player-controls__button",
        {
          "icon-repeat": false,
          "icon-repeat-one": false,
          "player-controls__button--active": true
        }
      ];
    }
  },
  methods: {}
};
</script>

<style scoped lang="sass">
.player-controls
  display: flex
  justify-content: center

  &__button
    margin: auto 10px
    color: gray
    font-size: 15px
    cursor: pointer
    outline: none

    &:hover
      color: #fff

    &--active
      color: green

    &--play,
    &--pause
      font-size: 35px

      &:hover
        color: #fff
        transform: scale(1.1)

.icon-previous
  background-image: url("../../assets/icons/previous.svg")
</style>
