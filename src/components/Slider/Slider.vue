<template>
  <div class="slider">
    <div class="slider-header">
      <slider-title>{{title}}</slider-title>
      <div class="slider-header-buttons">
        <!-- Optional controls -->
        <div class="show-all">
          <a href="#">Все</a>
        </div>
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
      <swiperSlide v-for="(movie,index) in movies" :key="index">
        <MovieCard class="slide d-flex" :watched="watched" :movie="movie" :cardSize="cardSize"></MovieCard>
      </swiperSlide>
    </swiper>
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import MovieCard from 'MovieCard/MovieCard';
import IconArrow from 'icons/IconArrowUp';
import SliderTitle from './SliderTitle';
import data from '../../assets/movies.json';

export default {
  data() {
    return {
      movies: {},
      watched: [164651, 164620, 164775, 164429, 164669],
      realIndex: null,
      isBlocked: true,
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
  created() {},
  mounted() {
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
        ...this.sliderOption[this.cardSize],
        ...this.sliderOption.generalSettings,
      };
    },
  },
  methods: {
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
    },
    slideBack() {
      this.swiper.slideTo(this.swiper.activeIndex - this.step, 500, false);
      this.decrRealIndex(this.step);
    },
  },
};
</script>

<style lang="postcss">
@import '../../styles/_colors.css';
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
