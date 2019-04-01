<template>
  <div class="slider">
    <div class="slider-header">
      <div class="slider-header-title">
        <a href="#">{{this.title}}</a>
        <div class="slider-header-title--arrow"></div>
      </div>
      <div class="slider-header-buttons">
        <!-- Optional controls -->
        <div class="show-all">
          <a href="#">Все</a>
        </div>
        <div
          class="swiper-button-prev"
          :class="{'swiper-button-prev--blocked':isBlocked}"
          @click="swiper.slideTo(swiper.activeIndex - step, 500), false;decrRealIndex(step)"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next"
          @click="swiper.slideTo(swiper.activeIndex + step, 500), false;incrRealIndex(step)"
          slot="button-next"
        ></div>
      </div>
    </div>
    <!-- /.slider-header -->
    <!-- slides -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiperSlide v-for="(movie,index) in movies" :key="index">
        <MovieCard class="slide" :watched="watched" :movie="movie" :cardSize="cardSize"></MovieCard>
      </swiperSlide>
    </swiper>
  </div>
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
      realIndex: null,
      isBlocked: true,
      sliderOption: {
        generelSettings: {
          grabCursor: true,
          effect: "slide",
          simulateTouch: false
        },
        poster: {
          swiperOption: {
            spaceBetween: 30,
            slidesPerView: 8
          },
          step: 3
        },
        big_poster: {
          swiperOption: {
            spaceBetween: 30,
            slidesPerView: 4
          },
          step: 1
        }
      }
    };
  },
  props: { cardSize: String, title: String },
  name: "Slider",
  components: { MovieCard, swiper, swiperSlide },
  created() {},
  beforeDestroy() {
    // this.$data.swiperOption = null;
  },
  mounted() {
    // current swiper instance
    this.movies = data.materials;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    step() {
      return this.sliderOption[this.cardSize].step;
    },
    swiperOption() {
      return {
        ...this.sliderOption[this.cardSize].swiperOption,
        ...this.sliderOption[this.cardSize].generelSettings
      };
    }
  },
  methods: {
    incrRealIndex(step) {
      if (!(this.realIndex + step >= this.movies.length)) {
        this.realIndex += step;
        this.blocked();
      }
    },
    decrRealIndex(step) {
      if (this.realIndex !== 0) {
        this.realIndex -= step;
        this.blocked();
      }
    },
    blocked() {
      this.isBlocked = this.realIndex <= 0 ? true : false;
    }
  }
};
</script>

<style lang="postcss">
@import url("../assets/_variables.css");
@import url("https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i");

/* poster
   width: 183px;
  height: 346px;
  big_poster
  width: 365px;
  height: 246px; */
.slider {
  max-width: 1550px;
  margin: 0 auto;
  display: inline-block;
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
  /* margin-top: 150px; */
  /* font-weight: 100; */

  &-header {
    margin: 0 auto;
    /* background-color: #fff; */
    height: 80px;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 24px;
    cursor: pointer;
    &-title {
      position: relative;
      display: flex;
      align-items: flex-end;
      &--arrow {
        @mixin arrow 7px, 1px, #fff {
          position: absolute;
          right: -15px;
          bottom: 5px;
          transition: 0.1s;
        }
      }
      & a {
        color: #fff;
        &:hover {
          color: #ffc000;
          text-decoration: none;
        }
      }
      &:hover .slider-header-title--arrow {
        right: -20px;
        border-top: 1px solid #ffc000;
        border-right: 1px solid #ffc000;
      }
    }
    &-buttons {
      display: flex;
      & .show-all {
        @mixin center;
        margin-right: 30px;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 5px;
        /* border: 2px solid #333; */
        font-size: 16px;
        padding: 7px 16px;

        & a {
          color: white;
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}

.swiper-button-prev,
.swiper-button-next {
  border: 2px solid #333;
  position: relative;
  top: unset;
  right: unset;
  left: unset;
  bottom: unset;
  margin: 0;
  padding: 0;
  background-image: none;
  height: 32px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 5px;
  &::before {
    @mixin arrow 10px, 2px, #fff {
      content: "";
      display: block;
      position: relative;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  &:hover {
    background-color: #fff;
    &::before {
      @mixin arrow 10px, 2px, $main;
      cursor: pointer;
    }
  }
}
.swiper-button-prev {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  &::before {
    transform: rotate(225deg);
    cursor: pointer;
  }
  &:hover&::before {
    transform: rotate(225deg);
  }
}
.swiper-button-next {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: none;
  cursor: pointer;
}
.slide {
  z-index: 1000;
}
.swiper-button-prev {
  &--blocked {
    cursor: not-allowed;
    &::before {
      @mixin arrow 10px, 2px, rgba(255, 255, 255, 0.2) {
        content: "";
        display: block;
        position: relative;
        box-sizing: border-box;
        transform: rotate(225deg);
      }
    }
    &:hover {
      background-color: $main;
      &::before {
        @mixin arrow 10px, 2px, rgba(255, 255, 255, 0.2) {
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
