<template>
  <div class="home container-fluid">
    <div class="row">
      <Navbar class="col-12" />
    </div>

    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Game from '@/components/Game.vue';

export default {
  name: "GameVideo",
  components: {
    Navbar,
    Game
  },
};
</script>

<style scoped media="screen">
.container {
  width: 100% !important;
}
</style>
