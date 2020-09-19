<template>
  <div class="card p-2">
    <h1 class="heading">Don't Miss Out</h1>
    <hr>
    <ul>
      <li v-for="(game, index) in TenOdlestGames" v-bind:key="index" class="pb-2" @click="showGame(game)">
        <a style="text-decoration: none; cursor: pointer;">{{ game.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OldestGames",
  props: ['TenOdlestGames', 'AllGames'],
  methods: {
    indexOfGame (obj) {
      // this function returns index of the object relative to allGames array
      // title pf each object is unique
      return this.AllGames.map(function(e) { return e.title; }).indexOf(obj.title);
    },
    showGame (game) {
      this.$router.push('/game/' + this.indexOfGame(game));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heading {
  color: #1d1e1f;
  font-size: 12px;
  font-weight: 800;
  margin: 0 12px;
}
li {
  color: #48494a;
  font-size: 12px;
}
li:hover {
  color: blue;
}
</style>
