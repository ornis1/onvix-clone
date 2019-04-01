<template>
  <div class="wrapper" :class="cardSize">
    <div class="slider-item">
      <div class="slider-item--backdark"></div>
      <TopIcons/>
      <div v-show="movie.hdx" class="slider-item-hdx">HDX</div>
      <div class="slider-item-img">
<<<<<<< HEAD
        <Hover :id="movie.id"/>
=======
        <Hover/>
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
        <Watched v-if="watched.includes(movie.id)"/>
        <Footer :year="movie.year" :rating="movie.rating_kinopoisk"/>
        <img v-bind:src="imgLink(cardSize)">
      </div>
      <div class="slider-item-title">{{movie.title_ru}}</div>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
import Hover from 'MovieCard/Hover';
import TopIcons from 'MovieCard/TopIcons';
import Watched from 'MovieCard/Watched';
import Footer from 'MovieCard/Footer';

export default {
  name: 'MovieCard',
  components: { Hover, TopIcons, Watched, Footer },
  data() {
    return {
      endpoint: 'https://prisonbreak.site',
=======
import Hover from "./Hover.vue";
import TopIcons from "./TopIcons.vue";
import Watched from "./Watched.vue";
import Footer from "./Footer";
export default {
  name: "MovieCard",
  components: { Hover, TopIcons, Watched, Footer },
  data() {
    return {
      endpoint: "https://prisonbreak.site"
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
    };
  },
  beforeDestroy() {
    this.endpoint = null;
  },
  props: { watched: Array, cardSize: String, movie: Object },
  methods: {
    imgLink(cardSize) {
<<<<<<< HEAD
      if (cardSize === 'poster') {
        return this.endpoint + this.movie.poster.small;
      }
      if (cardSize === 'big_poster') {
        return this.endpoint + this.movie.big_poster.small;
      }
      return 'https://im2.ezgif.com/tmp/ezgif-2-93587a182941.gif';
    },
  },
=======
      if (cardSize === "poster") {
        return this.endpoint + this.movie.poster.small;
      }
      return "https://im2.ezgif.com/tmp/ezgif-2-93587a182941.gif";
      if (cardSize === "big_poster") {
        return this.endpoint + this.movie.big_poster.small;
      }
    }
  }
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
};
</script>

<style lang="postcss">
<<<<<<< HEAD
@import '../../styles/_colors.css';
=======
/* @import url("../../assets/_variables.css"); */
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
.poster {
  width: 183px;
  height: 346px;
}
.big_poster {
  width: 365px;
  height: 246px;
  & .slider-item {
    transform: scale(1);
    height: 100%;
    &-img {
      height: 100%;
      padding: 0;
      margin: 0;
      &-footer {
        visibility: visible;
        opacity: 1;
        color: #aaa;
        font-size: 12px;
        margin: 0;
        padding: 0;
        justify-content: flex-start;
        left: 17px;
        bottom: 20px;
      }
    }
    &-title {
      position: absolute;
      left: 17px;
      color: #fff;
      z-index: 5;
      bottom: 36px;
      height: auto;
      justify-content: flex-start;
      align-items: flex-end;
      box-sizing: border-box;
      padding-right: 17px;
      width: auto;
      /* margin-right: 20px; */
      /* width: 100%; */
    }
    &:hover {
      & .slider-item-img-footer,
      .slider-item-title {
        opacity: 0;
        display: none;
      }
    }
  }
}
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

  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-item {
  position: relative;
  width: 100%;
  height: 100%;
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
