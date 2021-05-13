<template>
  <div  class="player-controls">
    <button :class="classesShuffle" title="Shuffle"></button>
<!--    <button-->
<!--        class="player-controls__button icon-previous"-->
<!--        title="Previous"-->
<!--    ></button>-->
    <v-btn
        icon
        :small="'skip-previous'"
        :x-large="'skip-previous'"
    >
      <v-icon :color="'#fff'" v-text="'mdi-skip-previous'"></v-icon>
    </v-btn>
    <template v-if="false">
<!--      <button-->
<!--          class="player-controls__button player-controls__button&#45;&#45;pause icon-pause-circle"-->
<!--      ></button>-->

    </template>
    <template v-else>
      <v-btn
          icon
          :small="'play-circle'"
          :x-large="'play-circle'"
      >
        <v-icon :color="'#fff'"
                      v-text="'mdi-play-circle'"></v-icon>
      </v-btn>
    </template>

<!--    <button-->
<!--        class="player-controls__button icon-next"-->
<!--        title="Next"-->
<!--    ></button>-->
    <v-btn
        icon
        :small="'skip-next'"
        :x-large="'skip-next'"
    >
      <v-icon :color="'#fff'" v-text="'mdi-skip-next'"></v-icon>
    </v-btn>
    <button :class="classesRepeat" title="Repeat"></button>
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
  methods: {

  }
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
