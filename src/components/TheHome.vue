<template>
  <div class="main">
    <Slider
      v-on:loadMovies="updateMovies($event)"
      :to="{name: 'collections', params: {category: 'popular'}}"
      :movies="popularMovies"
      :title="'Популярные'"
      :cardSize="'big_poster'"
    />
    <Slider
      v-on:loadMovies="updateMovies($event)"
      :to="{name: 'collections', params: {category: 'newest'}}"
      :movies="newestMovies"
      :title="'Новые фильмы'"
      :cardSize="'poster'"
    />
    <Slider
      :to="{name: 'collections', params: {category: 'watch_later'}}"
      :movies="watchLater"
      :title="'Смотреть позже'"
      :cardSize="'poster'"
    />
  </div>
</template>

<script>
import Slider from 'Slider/Slider';
import axios from 'axios';

export default {
  name: 'Main',
  // mixins: [ApiMixin],
  metaInfo: {
    title: 'Главная',
  },
  components: {
    Slider,
  },
  data() {
    return { movies: [], newestMovies: [], popularMovies: [] };
  },
  created() {
    /* Загружает фильмы из tmdb */
    this.loadPopularMovies();
    this.loadNewestMovies();
  },
  watch: {
    user() {
      if (this.user !== null) {
        this.$store.dispatch('load', 'watched');
        this.$store.dispatch('load', 'favorite');
        this.$store.dispatch('load', 'watchLater');
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    /* Загружают фильмы из store */
    watched() {
      return this.$store.getters.watched;
    },
    favorite() {
      return this.$store.getters.favorite;
    },
    watchLater() {
      return this.$store.getters.watchLater;
    },
  },
  methods: {
    /* Загружает новые фильмы в указанную категорию (событие приходит из слайдера) */
    updateMovies(payload) {
      const { page, from } = payload;
      switch (from) {
        case 'newest':
          this.loadNewestMovies(page);
          break;
        case 'popular':
          this.loadPopularMovies(page);
          break;

        default:
          break;
      }
    },
    loadNewestMovies(page = 1) {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const request = `https://api.themoviedb.org/3/discover/movie?api_key=6c789b97c269e57a2df3bcbc30f04173&language=ru-RU&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=270&release_date.lte=${year}-${12}-${month}`;
      axios.get(request).then((response) => {
        this.newestMovies = [...this.newestMovies, ...response.data.results];
      });
    },
    loadPopularMovies(page = 1) {
      const request = `https://api.themoviedb.org/3/discover/movie?api_key=6c789b97c269e57a2df3bcbc30f04173&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
      axios.get(request).then((response) => {
        this.popularMovies = [...this.popularMovies, ...response.data.results];
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.main {
  max-width: 1600px;
  width 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
