<template>
  <div class="wrapper" :class="cardSize">
    <div class="slider-item">
      <div v-show="cardSize==='big_poster'" class="slider-item--backdark"></div>
      <div v-show="true" class="slider-item-hdx">HDX</div>
      <div class="slider-item-img">
        <MovieCardTopIcons class="top-icons" :movie="movie"/>
        <MovieCardHover :movie="movie"/>
        <MovieCardWatched v-if="isWatched"/>
        <MovieCardFooter :year="movieYear" :rating="rating"/>

        <img
          class="slider-item-img__img"
          src="../../assets/img/1px.gif"
          :style="{backgroundImage: `url(${img})`}"
        >
      </div>
      <div class="slider-item-title">{{movie.title}}</div>
    </div>
  </div>
</template>
<script>
import MovieCardHover from 'MovieCard/MovieCardHover';
import MovieCardTopIcons from 'MovieCard/MovieCardTopIcons';
import MovieCardWatched from 'MovieCard/MovieCardWatched';
import MovieCardFooter from 'MovieCard/MovieCardFooter';
import IconWatch from 'icons/IconWatchRegular';
import { ApiMixin } from 'Mixins/ApiMixin';

export default {
  name: 'MovieCard',
  components: {
    IconWatch,
    MovieCardHover,
    MovieCardTopIcons,
    MovieCardWatched,
    MovieCardFooter,
  },
  mixins: [ApiMixin],
  props: {
    cardSize: String,
    movie: Object,
    btnClose: Boolean,
  },
  computed: {
    isWatched() {
      const movies = this.$store.getters.watched;
      if (movies.length) {
        return movies.some((movie) => movie.id === this.movie.id);
      }
      return false;
    },
    rating() {
      const rating = this.movie.vote_average;
      if (`${rating}`.length <= 1) {
        return `${rating},0`;
      }
      return `${rating}`.split('.').join(',');
    },
    movieYear() {
      const date = this.movie.release_date;
      return date ? Number(date.slice(0, 4)) : new Date().getFullYear();
    },
    img() {
      if (this.cardSize === 'poster' && this.movie.poster_path) {
        return this.$_ApiMixin_getImg(this.movie.poster_path, '300');
      }
      if (this.cardSize === 'big_poster' && this.movie.backdrop_path) {
        return this.$_ApiMixin_getImg(this.movie.backdrop_path, '400');
      }
      return 'https://magauto102.ru/wp-content/uploads/2017/09/noimg.jpg';
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/_colors.styl';
.poster {
  width: 183px;
  height: 346px;
}
.big_poster {
  width: 365px;
  height: 246px;
  & .slider-item {
    position: relative;
    transform: scale(1);
    /* height: 100%; */
    &-img {
      height: 100%;
      padding: 0;
      margin: 0;
      &__img {
        background-repeat: no-repeat;
        background-size: cover;
        /* background-origin: 0 0; */
      }
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
  /* float: left; */
  margin: 0 8px;
  /* box-sizing: border-box; */
  /* width: 200px; */
  /* padding: 0 8px; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
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
    z-index: 2;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.9); */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.6) 80%
    );
    /* visibility: hidden; */
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
    /* height: 25%; */
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
    &__img {
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
.top-icons {
  opacity: 0;
}
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
