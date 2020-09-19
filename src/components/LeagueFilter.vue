<template>
  <div class="filter card">
    <p class="mt-2 m-2" style="font-size: 17px; font-weight: bold;">Leagues</p>
    <a @click="removeFilters()" class="text-center btn btn-warning m-2" type="button" name="button" style="width: 90%;">
      <span style="color: white; font-size: 10px;"><b>ALL GAMES</b></span>
    </a>

    <ul class="league-list m-2">
      <li class="p-1" v-for="league in leagues" :key="league" @click="applyFilter(league)"><a href="#">{{ league }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeagueFilter",
  props: ['leagues'],
  data () {
    return {
      selectedLeague: "",
      displayAllGames: true
    }
  },
  methods: {
    applyFilter(league) {
      this.selectedLeague = league;
      this.displayAllGames = false;
      this.$emit('filter', { displayAllGames: false, league: league });
    },
    removeFilters(){
      this.selectedLeague = "";
      this.displayAllGames = true;
      this.$emit('filter', { displayAllGames: true });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-warning {
  height: auto;
  border-radius: 40px;
  background-color: #ffad00;
  border: 1px transparent solid;
}
.card {
  border-radius: 10px;
  background-color: #f9f9fb;
}
.league-list {
  list-style-type: none;
  padding: 0;
}
li {
  border-bottom: 1px dotted #dcdddf;
  width: 100%;
}
li:last-child {
  border: none;
}
li a {
  color: #1d1e1f;
}
li:hover {
  cursor:pointer;
  background-color: white;
}
a:hover {
  text-decoration: none;
}
</style>
