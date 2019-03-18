<template>
  <div id="app">
    <Header/>
    <Slider/>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Slider from "./components/Slider";
export default {
  components: {
    Header,
    Slider
  }
};
</script>

<style lang='postcss'>
@import "./assets/_variables.css";
@import "./assets/_normalize.css";
body {
  /* height: 100%; */
  background-color: $main;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  background-repeat: repeat-y;
  /* overflow: hidden; */
  background-size: cover;
  background-image: url("./assets/background_movie-62ef086a103449794cfb8d089381f4b1103b7e03dede28083e1344a530367754.webp");
}
/* Темный градиент на background-e */
body::after {
  content: "";
  display: block;
  width: 100vw;
  height: 100%;
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
  padding-top: 120px;
  display: flex;
  height: 100%;
}
</style>
