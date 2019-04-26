<template>
  <div class="slider">
    <div class="slider-header">
      <slider-title>{{title}}</slider-title>
      <div class="slider-header-buttons">
        <!-- Optional controls -->
        <!-- Доделать потом -->
        <router-link class="show-all" :to="'/collections/popular'">Все</router-link>
        <div
          :class="[{'swiper-button-prev--blocked':isBlocked}, 'swiper-button-prev']"
          @click="slideBack"
          slot="button-prev"
        ></div>
        <div class="swiper-button-next" @click="slideForward" slot="button-next"></div>
      </div>
    </div>
    <!-- /.slider-header -->
    <!-- slides -->
    <swiper class :options="swiperOption" ref="mySwiper" v-if="load">
      <swiperSlide v-for="(movie,index) in movies" :key="index" class="r">
        <MovieCard class="slide d-flex" :watched="watched" :movie="movie" :cardSize="cardSize"></MovieCard>
        <div class="slide-placeholder">
          <img src="../../assets/img/eye.png" alt srcset>
          <!-- <IconWatch class="slider-placeholder-img"/> -->
        </div>
      </swiperSlide>
    </swiper>
  </div>
</template>

<script>
// GET 'https://api.themoviedb.org/3/discover/movie?api_key=6c789b97c269e57a2df3bcbc30f04173&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
// import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import MovieCard from 'MovieCard/MovieCard';
import IconArrow from 'icons/IconArrowUp';
import SliderTitle from './SliderTitle';
import data from '../../assets/movies.json';
import axios from 'axios';
import { ApiMixin } from 'Mixins/ApiMixin';

export default {
  mixins: [ApiMixin],
  data() {
    return {
      load: false,
      movies: {},
      watched: [164651, 164620, 164775, 164429, 164669],
      realIndex: null,
      isBlocked: true,

      currentPage: 1,
      activeIndex: 1,
      totalMovies: 0,
      a: 0,
      sliderOption: {
        generalSettings: {
          grabCursor: true,
          effect: 'slide',
          simulateTouch: false,
          width: 1600,
          setWrapperSize: true,
        },
        poster: {
          slidesPerView: 8,
          step: 3,
        },
        big_poster: {
          slidesPerView: 4,
          step: 1,
        },
      },
    };
  },
  props: {
    cardSize: { type: String, required: true, default: 'poster' },
    title: String,
  },
  name: 'Slider',
  components: { MovieCard, swiper, swiperSlide, IconArrow, SliderTitle },
  created() {
    this.loadMovies();
    this.load = true;
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
        ...this.sliderOption[this.cardSize],
        ...this.sliderOption.generalSettings,
      };
    },
  },
  methods: {
    loadMovies() {
      let a = `https://api.themoviedb.org/3/discover/movie?api_key=6c789b97c269e57a2df3bcbc30f04173&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        this.currentPage
      }`;
      axios.get(a).then((response) => {
        this.currentPage++;
        this.totalMovies += response.data.results.length;
        this.movies = [...this.movies, ...response.data.results];
      });
    },
    incrRealIndex(step) {
      if (!(this.realIndex + step >= this.movies.length)) {
        this.realIndex += step;
        this.isBlocked = this.realIndex <= 0;
      }
    },
    decrRealIndex(step) {
      if (this.realIndex !== 0) {
        this.realIndex -= step;
        this.isBlocked = this.realIndex <= 0;
      }
    },

    slideForward() {
      this.swiper.slideTo(this.swiper.activeIndex + this.step, 500, false);
      this.incrRealIndex(this.step);
      this.realIndex > this.totalMovies - this.step - 3
        ? this.loadMovies()
        : '';
    },
    slideBack() {
      this.swiper.slideTo(this.swiper.activeIndex - this.step, 500, false);
      this.decrRealIndex(this.step);
    },
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/_colors.css';
.r {
  position: relative;
}
.slide-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  width: 180px;
  height: 255px;
  /* width: 100%; */
  /* height: 100%; */

  /* box-sizing: border-box; */
  /* padding: 94px 50px; */
  /* margin: 25px 20px 0px; */
  margin-left: 10px;
  margin-top: 15px;
  transform: scale(0.9);
  top: 0;
  left: 0;
  position: absolute;
  /* z-index: 1000; */

  border: 1px dashed #3d3d3d;
  border-radius: 3px;
  &-img {
    color: #777;
    width: 70px;
    height: 70px;
  }
}
.swiper-wrapper {
  display: flex;
  overflow: hidden;
}
.slider {
  width: 1600px;
  margin: 0 auto;
  display: inline-block;
  overflow: hidden;

  &-header {
    margin: 0 auto;
    height: 80px;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 24px;

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
        color: white;
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
      content: '';
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
        content: '';
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
.d-flex {
  display: flex;
}
</style>
