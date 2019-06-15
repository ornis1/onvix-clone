<template>
  <div class="container" v-show="movies" v-infinite-scroll="loadMore" infinite-scroll-distance="1">
    <h1 class="title">{{title}}</h1>
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" :cardSize="'poster'"/>
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';
import MovieCard from 'MovieCard/MovieCard';
import { ApiMixin } from 'Mixins/ApiMixin';
import { setTimeout, clearTimeout } from 'timers';

export default {
  name: 'result',
  components: { MovieCard },
  mixins: [ApiMixin],
  data() {
    return {
      page: 0,
      movies: [],
      people: [],
      busy: false,
      isDisabled: false,
      intervalID: null,
      timeoutID: null,
      collections: {
        popular() {
          this.loadPopularMovies();
        },
        newest() {
          this.loadNewestMovies();
        },
      },
      routeNames: {
        search() {
          this.loadMultiSearch(this.query, this.page);
        },
        collections() {
          const category = this.$route.params.category;
          if (['popular', 'newest'].includes(category) && category) {
            this.collections[category].bind(this)();
            return;
          }
          // console.log('Загруаю добавленные пользователем фильмы');
          this.loadUserAddedMovies();
        },
        actor() {
          const id = this.$route.params.id;
          this.loadActorMovies(id);

          console.log('Загружаю фильмы актера');
        },
        director() {
          const id = this.$route.params.id;
          this.loadActorMovies(id);
        },
        genre() {
          const id = this.$route.params.id;
          this.loadMoviesByGenre(id);
        },
      },
    };
  },
  metaInfo: {
    titleTemplate() {
      return this.$route.params.title;
    },
  },
  directives: { infiniteScroll },
  watch: {
    '$route.params.category'() {
      /* РАБОТАЕТ С КОЛЛЕКЦИЯМИ */
      this.page = 0;
      this.movies = [];
      this.loadContent();
    },
    '$route.query.q'() {
      /* РАБОТАЕТ С ПОИСКОМ */
      this.movies = [];
      this.page = 0;
      clearTimeout(this.timeoutID);

      this.timeoutID = setTimeout(() => {
        this.loadContent();
      }, 1000);
    },
    deep: true,
  },
  beforeMount() {
    this.loadContent();
  },
  computed: {
    title() {
      const titles = {
        collections: {
          popular: 'Популярные',
          newest: 'Новые фильмы',
          watched: 'Просмотренные',
          watch_later: 'Смотреть позже',
          favorite: 'Избранные',
        },
        actor: `Актер ${this.$route.params.title}`,
        director: `Режисер ${this.$route.params.title}`,
        search: `Результат поиска «${this.$route.query.q}`,
      };
      const name = this.$route.name;
      const category = this.$route.params.category;

      return name !== 'collections' ? titles[name] : titles[name][category];
    },
    query() {
      return this.$route.query.q;
    },
  },
  methods: {
    // filterByMovie(arr) {
    //   return arr.filter((x) => x.media_type === 'movie');
    // },
    filterByEmptyProperty() {
      const year = new Date().getFullYear();
      this.movies = this.movies
        .filter((x) => x.poster_path)
        .filter((x) => x.title)
        .filter((x) => x.overview)
        .filter((x) => x.release_date)
        .sort((a, b) => {
          b = b.release_date.slice(0, 4);
          a = a.release_date.slice(0, 4);
          return b - a;
        });
    },
    loadMultiSearch() {
      this.$_ApiMixin_multiSearch(this.query, (this.page += 1)).then(
        (response) => {
          this.people = response.results.filter(
            (x) => x.media_type === 'person'
          );
          this.movies = [...this.movies, ...response.results];
          this.filterByEmptyProperty();
        }
      );
    },
    loadMore() {
      /* Загружает контент при прокрутке */
      console.log('ЗАГРУЖАЮ ЕЩЕ ФИЛЬМЫ');

      // if (this.isDisabled) return;
      // this.busy = true;
      // this.loadContent();
    },
    loadContent() {
      const routeName = this.$route.name;
      if (routeName) {
        this.routeNames[routeName].bind(this)();
      }
    },
    loadUserAddedMovies() {
      /* 
      http://localhost:8080/:type/:id
      http://localhost:8080/collections/favorite
      http://localhost:8080/collections/watched
      http://localhost:8080/collections/watch_later
       */

      let category = this.$route.params.category;
      category = category === 'watch_later' ? 'watchLater' : category;

      this.$store.dispatch('load', category);

      const result = this.$store.getters[category];
      this.movies = [...this.movies, ...result];
      this.filterByEmptyProperty();
    },
    /* Поплярные фильмы */
    loadPopularMovies() {
      this.$_ApiMixin_getPopularMovies((this.page += 1)).then((result) => {
        this.movies = [...this.movies, ...result];
        this.filterByEmptyProperty();
      });
    },
    /* Новые фильмы */
    loadNewestMovies() {
      this.$_ApiMixin_getNewestMovies((this.page += 1)).then((response) => {
        this.movies = [...this.movies, ...response];
        this.filterByEmptyProperty();
        // this.busy = false;
      });
    },
    /* Фильмы актера/ режисера??? */
    loadActorMovies(id) {
      this.$_ApiMixin_getPersonMovies(id).then((response) => {
        this.movies = [...this.movies, ...response];
        this.filterByEmptyProperty();
        // this.busy = false;
      });
    },
    loadMoviesByGenre(id) {
      this.$_ApiMixin_getMoviesByGenre(id).then((response) => {
        this.movies = [...this.movies, ...response.results];
        this.filterByEmptyProperty();
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.container {
  width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;

  flex-wrap: wrap;
  .title {
    width: 100%;
    margin-bottom: 20px;
    padding-left: 20px;
    /* display: none; */
  }
}
</style>

