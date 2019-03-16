<template>
  <div id="app">
    <Header/>
    <!-- <Slider/> -->
    <!-- <MovieCardSmall/> -->
    <MovieDescription/>
    <!-- <MovieCardSmall/> -->
    <!-- <Login/> -->
  </div>
</template>

<script>
// import Login from "./Login.vue";
import Header from "./components/Header/Header.vue";
import MovieDescription from "./components/MovieDescription/MovieDescription.vue";
export default {
  name: "app",
  components: {
    Header,
    MovieDescription
  }
};
</script>

<style lang='postcss'>
@import "./assets/_variables.css";
@import "./assets/_normalize.css";
body {
  height: 100%;
  background-color: $main;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
  background-image: url("https://prisonbreak.site/assets/abstrac/background_movie-62ef086a103449794cfb8d089381f4b1103b7e03dede28083e1344a530367754.jpg");
}
/* Темный градиент на background-e */
body::after {
  content: "";
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  background-repeat: repeat-x;
  background-image: linear-gradient(-180deg, rgba(21, 21, 21, 0.9), #171717);
}

#app {
  max-width: 1550px;
  min-width: 800px;
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
