<template>
  <div class="slider">
    <div class="slider-header">
      <slider-title :to="to">{{title}}</slider-title>
      <div class="slider-header-buttons">
        <!-- Optional controls -->
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
    <swiper class :options="swiperOption" ref="mySwiper">
      <swiperSlide
        v-for="(movie, index) in movies"
        :key="`${movie.title}${movie.key || index}`"
        class="r"
      >
        <MovieCard
          class="slide d-flex"
          :btnClose="true"
          :movie="movie"
          :cardSize="cardSize"
        />
      </swiperSlide>

      <swiperSlide v-for="n in 8" :key="n*Math.random()" class="r">
        <MovieCardPlaceholder :cardSize="cardSize"/>
      </swiperSlide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import MovieCard from 'MovieCard/MovieCard';
import MovieCardPlaceholder from 'MovieCard/MovieCardPlaceholder';
import IconArrow from 'icons/IconArrowUp';
import SliderTitle from './SliderTitle';

export default {
  data() {
    return {
      load: false,
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
    to: { type: Object, required: true },
    movies: {
      type: [Array, Object],
      required: false,
      default() {
        return [];
      },
    },
    title: String,
  },
  name: 'Slider',
  components: {
    MovieCard,
    MovieCardPlaceholder,
    swiper,
    swiperSlide,
    IconArrow,
    SliderTitle,
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
      this.currentPage += 1;
      this.$emit('loadMovies', { from: this.from, page: this.currentPage });
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

      if (this.realIndex >= this.movies.length - this.step - 6) {
        this.loadMovies();
      }
    },
    slideBack() {
      this.swiper.slideTo(this.swiper.activeIndex - this.step, 500, false);
      this.decrRealIndex(this.step);
    },
  },
};
</script>

<style lang="stylus">
@import '../../assets/styles/_colors.styl';
@import '../../assets/styles/_mixins.styl';
.r {
  position: relative;
}
.swiper-wrapper {
  display: flex;
  overflow: hidden;
}
.slider {
  height: 360px;
  max-width: 1600px;
  width 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  display: inline-block;
  overflow: hidden;

  &-header {
    margin: 0 auto;
    /* height: 80px; */
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 30px 10px;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 24px;

    &-buttons {
      display: flex;
      & .show-all {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 5px;
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
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
  create-arrow()
}

.swiper-button-prev {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  &::before {
    transform: rotate(225deg) !important;
  }
  &:hover::before {
    arrow(10px, 2px, $main)
  }
}
.swiper-button-next {
  create-arrow()
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: none;
  create-arrow()
  &:hover::before {
    arrow(10px, 2px, $main)
  }
}
.slide {
  z-index: 1000;
  display: flex;
}
.swiper-button-prev {
  &--blocked {
    &::before {
      arrow( 10px, 2px, rgba(255, 255, 255, 0.2) )
    }
    &:hover {
      background-color $main;
      cursor: not-allowed;
      &::before {
        arrow( 10px, 2px, rgba(255, 255, 255, 0.2) )
      }
    }
  }
}
</style>
