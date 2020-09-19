<template>
  <div class="navbar">
    <div class="logo">
      <a href="/"><h1><b><i>Latest Football</i></b></h1></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  width: 100%;
  background-color: #2b2c2d;
  height: 44px;
}
h1 {
  color: white;
  font-size: 30px;
}
a:hover {
  text-decoration: none;
}
</style>
