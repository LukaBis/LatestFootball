<template>
  <div class="row" v-if="isDataFetched">

    <div class="col-11 col-md-8 mr-auto ml-auto mt-4">
      <h1 class="p-0">{{gameTitle}}</h1>
    </div>

    <div class="gameVideo col-md-8 col-11 mr-auto ml-auto" v-for="(video, index) in videos" v-bind:key="index">
      <h3 class="mt-3 mb-2">{{ video.title }}</h3>

      <div
      style='position:relative; padding: 0px;'
      >
      <div v-html="video.embed" class="mb-5"></div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Game",
  data () {
    return {
      gameTitle: "",
      videos: [],
      isDataFetched: false
    }
  },
  created() {
    this.fetchGame();
  },
  methods: {
    fetchGame() {
      fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then(res => {
        this.gameTitle = res[this.$route.params.id].title;
        this.videos = res[this.$route.params.id].videos;
        this.isDataFetched = true;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
