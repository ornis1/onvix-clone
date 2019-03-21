<template>
  <div id="app">
    <Header/>
    <Slider :title="'Смотрю сейчас'" :cardSize="false"/>
    <Slider :title="'Популярные'" :cardSize="true"/>
    <Slider :title="'Новые фильмы'" :cardSize="false"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Slider,
    Footer
  }
};
</script>
<style lang='postcss'>
@import "./assets/_normalize.css";
@import "./assets/_variables.css";
@import "./assets/_global.css";

a {
  color: black;
  &:hover {
    text-decoration: none;
  }
}
@import url("https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i");
body {
  font: 24px/1 "Lato", sans-serif;
  background-color: $main;
  /* font-family: "Lato", sans-serif; */
  /* font-weight: 400; */
  background-repeat: repeat-y;
  background-size: cover;
  /* background-image: url("./assets/background_movie-62ef086a103449794cfb8d089381f4b1103b7e03dede28083e1344a530367754.webp"); */
  -webkit-font-smoothing: subpixel-antialiased !important;
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
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 100px;
}
</style>
