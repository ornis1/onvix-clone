<template>
  <div class="wrapper">
    <div class="slider-item">
      <div class="slider-item--backdark"></div>
      <Hover/>
      <TopIcons/>
      <Watched v-if="watched.includes(movie.id)"/>
      <Footer :year="movie.year" :rating="movie.rating_kinopoisk"/>
      <div v-show="movie.hdx" class="slider-item-hdx">HDX</div>
      <div class="slider-item-img">
        <img v-bind:src="this.endpoint+movie.poster.small">
      </div>
      <div class="slider-item-title">{{movie.title_ru}}</div>
    </div>
  </div>
</template>
<script>
import Hover from "./Hover.vue";
import TopIcons from "./TopIcons.vue";
import Watched from "./Watched.vue";
import Footer from "./Footer";
export default {
  name: "MovieCardSmall",
  components: { Hover, TopIcons, Watched, Footer },
  data() {
    return {
      endpoint: "https://prisonbreak.site"
    };
  },
  props: { watched: Array, small: Boolean, large: Boolean, movie: Object }
};
</script>

<style lang="postcss" scoped>
@import url("../../assets/_variables.css");

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: $main;
}
.wrapper {
  margin: 10px;
  box-sizing: border-box;
  width: 183px;
  height: 346px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-item {
  width: 183px;
  height: 346px;
  position: relative;

  box-sizing: border-box;
  transform: scale(0.9);
  transition: 0.25s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
  &--backdark {
    z-index: 4;
    position: absolute;
    display: block;
    width: 100%;
    height: 75%;
    background: rgba(0, 0, 0, 0.9);
    visibility: hidden;
  }
  &:hover {
    transform: scale(1);
  }
  &-hdx {
    z-index: 3;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 46px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-style: uppercase;
  }
  &-title {
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 25%;
    bottom: 0;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 10px;
    color: #8c8c8c;
  }
  &-img {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    position: relative;
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      position: absolute;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
    }
  }
}

/* Стили при наведение */
.slider-item:hover .hover {
  opacity: 1;
}
.slider-item:hover .slider-item-img-footer {
  visibility: visible;
}

.slider-item:hover .slider-item-hdx {
  background: #ffc000;
  color: #151515;
  box-shadow: none;
  text-shadow: none;
}

.slider-item:hover .slider-item-title {
  color: #fff;
}

.slider-item:hover .top-icons {
  visibility: visible;
  opacity: 1;
}
</style>
