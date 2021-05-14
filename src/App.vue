<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="sass">


.app
  display: flex
  flex-flow: column
  position: absolute
  width: 100%
  min-width: 630px
  height: 100vh
  background: #333
</style>
