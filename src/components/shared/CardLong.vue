<template>
  <div>
    <div class="card">
      <div class="row">
        <div class="col-3">
          <div class="card-photo">
            <img
                src="https://mosaic.scdn.co/640/ab67616d00001e02358f874d5d31e76a8fe3f6d0ab67616d00001e026c44679425e2695001b35d72ab67616d00001e0273304ce0653c7758dd94b259ab67616d00001e02ba5db46f4b838ef6027e6f96"
                alt="">
          </div>
        </div>
        <div class="col-9">
          <div class="card-title">
            <span>{{ playlist.title  }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLong",
  props:['playlist']
}
</script>

<style scoped lang="sass">
.card
  background-color: hsla(0, 0%, 100%, .1)
  border-radius: 4px
  height: 80px
  position: relative
  -webkit-transition: background-color .3s ease
  transition: background-color .3s ease

  &-photo
    width: 30%
    height: 80px

  &-photo img
    height: inherit

  &-title
    height: 100%
    padding: 16px
    -webkit-box-align: center
    -ms-flex-align: center
    -webkit-box-flex: 1
    -webkit-box-pack: justify
    -ms-flex-pack: justify
    align-items: center
    color: #fff
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    -ms-flex: 1
    flex: 1
    justify-content: space-between
</style>
