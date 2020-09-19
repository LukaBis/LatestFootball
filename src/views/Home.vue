<template>
  <div class="home container-fluid">
    <div class="row">
      <Navbar class="col-12" />
      <div class="col-2 mt-2 ml-3 mb-auto">
        <LeagueFilter @filter="onFilter" v-bind:leagues="leagues" class="d-none d-lg-block pt-2 pl-2 " />
      </div>

      <div class="ml-auto mr-auto col-sm-12 col-md-10 col-lg-6">
        <GameCard
        v-for="(game, index) in games"
        v-bind:key="index"
        v-bind:index="indexOfGame(game)"
        v-bind:title="game.title"
        v-bind:thumbnail="game.thumbnail"
        v-bind:date="game.date"
        v-bind:competition="game.competition"
        class="pl-3 pr-3"
        />
      </div>

      <div class="col-3 mt-2 mb-auto">
        <OldestGames v-bind:TenOdlestGames="AllGames.slice(0,11)" class="d-none d-lg-block" v-bind:AllGames="AllGames" />
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import LeagueFilter from "@/components/LeagueFilter.vue";
import GameCard from "@/components/GameCard.vue";
import OldestGames from "@/components/OldestGames.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    LeagueFilter,
    GameCard,
    OldestGames
  },
  data () {
    return {
      AllGames: [],
      games: [],
      selectedLeague: "",
      loadgames: false,
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then((res) => {
        this.AllGames = res;
        this.games = res;
        this.loadgames = true;
      })
    },
    onFilter(data) {
      if ( data.displayAllGames ) {
        // display all games
        this.games = [...this.AllGames];
      }
      else {
        // display only games from league
        this.games = this.AllGames.filter( game => game.competition.name == data.league );
      }
    },
    indexOfGame (obj) {
      // this function returns index of the object relative to allGames array
      // title pf each object is unique
      return this.AllGames.map(function(e) { return e.title; }).indexOf(obj.title);
    }
  },
  computed: {
    leagues: function () {
      var leagues = this.games.map(game => game.competition.name);

      return [...new Set(leagues)];
    },
  }
};
</script>

<style scoped media="screen">
.container {
  width: 100% !important;
}
</style>
