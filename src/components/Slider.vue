<template>
  <swiper class="slider" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <div class="slide"></div>
    <swiperSlide v-for="(movie,index) in movies" :key="index">
      <MovieCard :watched="watched" :movie="movie" :large="false"></MovieCard>
    </swiperSlide>
    <!-- <div class="slide"></div>
    <div style="background-color: #333" class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>-->
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div
      class="swiper-button-next"
      @click="swiper.slideTo(swiper.activeIndex+3, 200), false"
      slot="button-next"
    ></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

import data from "../assets/movies.json";
import MovieCard from "./MovieCard/MovieCard.vue";
export default {
  data() {
    return {
      movies: {},
      watched: [164651, 164620, 164775, 164429, 164669],
      swiperOption: {
        spaceBetween: 30,
        slidesPerView: 8,
        grabCursor: true,
        freeMode: true,
        effect: 'coverflow'
        // Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"
        // slidesOffsetBefore: 100
        // autoplay: 10,
        // width: 365
      }
    };
  },
  name: "Slider",
  components: { MovieCard, swiper, swiperSlide },
  created() {
    this.movies = data.materials;
  },
  mounted() {
    // current swiper instance
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.init();
    // this.swiper.allowSlideNext = true;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/slick.css";
.slider {
  max-width: 1550px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  /* margin: 0 100px; */
  /* width: auto; */
  /* margin: 0 auto; */
  /* justify-content: center; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* height: 100%; */
  /* overflow: hidden; */
}
.slide {
  display: block;
}
</style>
