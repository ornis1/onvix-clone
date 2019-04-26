<template>
  <div class="container" v-show="movies" v-infinite-scroll="loadMore" infinite-scroll-distance="1">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" :cardSize="'poster'"/>
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';
import MovieCard from 'MovieCard/MovieCard';
import { ApiMixin } from 'Mixins/ApiMixin.js';

export default {
  name: 'result',
  components: { MovieCard },
  mixins: [ApiMixin],
  data() {
    return {
      page: 1,
      movies: [],
      busy: false,
      isDisabled: false,
    };
  },
  directives: { infiniteScroll },
  methods: {
    loadMore() {
      console.log('TCL: loadMore -> loadMore', 'loadMore');
      /* Загружает контент при прокрутке */
      if (this.isDisabled) return;
      this.busy = true;
      this.loadContent();
    },
    loadContent() {
      /* Загружает контент по методу миксины */
      // this.loadPopularMovies();
      if (['actor', 'director'].includes(this.$route.params.type)) {
        const id = this.$route.params.id;
        this.isDisabled = true;
        this.loadPersonMovies(id);
      }
    },
    loadPopularMovies() {
      this.$_ApiMixin_getPopularMovies(this.page++).then(result => {
        this.movies = [...this.movies, ...result];
        this.busy = false;
      });
    },
    loadPersonMovies(id) {
      this.$_ApiMixin_getPersonMovies(id).then(result => {
        this.movies = [...this.movies, ...result];
        this.busy = false;
      });
    },
  },
  created() {
    const path = this.$route.fullPath;
    switch (path) {
      case '/collections/popular':
        console.log(this.$route.fullPath);
        break;
      case '/watch_now':
        console.log(this.$route.fullPath);
        break;
      case '/movies/newest':
        console.log(this.$route.fullPath);
        break;
      case '/playlists/watch_later':
        console.log(this.$route.fullPath);

        break;

      default:
        break;
    }
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped>
.container {
  padding: 0 20px;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
}
</style>

