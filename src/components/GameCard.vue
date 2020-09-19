<template>
  <div class="gamecard card mt-2 mb-2" @click="showGame">
    <div class="row">
      <h1 class="m-3 competition">{{ competition.name }}</h1>
      <a class="m-3 ml-auto" style="font-size: 12px; font-weight: bold;" href="#">See all</a>
    </div>

      <img class="img-fluid thumbnail" :src="thumbnail" alt="">
      <div class="description ml-0  mb-1">
        <h1 class="mt-3 ml-2">{{ title }}</h1>
        <p class="date ml-2">{{ date.substring(0, 10) }}</p>
      </div>

  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    title: String,
    thumbnail: String,
    date: String,
    competition: Object,
    index: Number
  },
  methods: {
    showGame() {
      this.$router.push('/game/' + this.index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gamecard {
  border-radius: 10px;
  cursor: pointer;
  /* box-shadow: 2px 2px #E6E4E4; */
}
.thumbnail {
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  height: 250px;
}
.description {
  border-radius: 0px 0px 10px 10px;
}
.description h1 {
  font-size: 16px;
  font-weight: bold;
}
.competition {
  font-size: 16px;
  font-weight: bold;
}
.date {
  color: #a5a6a7;
  font-size: 14px;
}
</style>
