<template>
  <NavBar />
  <router-view></router-view>
</template>

<style>
  @import "styles.css";
</style>

<script>
import NavBar from "./components/NavBar.vue"

export default ({
  components:{NavBar}
})
</script>
