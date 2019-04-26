/* eslint-disable */
import axios from 'axios';
export const ApiMixin = {
  data() {
    return {
      key: '6c789b97c269e57a2df3bcbc30f04173',
      endpoint: 'https://api.themoviedb.org/3/',
      lang: 'ru',
      tmp: '',
      payload: {},
    };
  },
  methods: {
    $_ApiMixin_getUnique(arr, comp) {
      const unique = arr
        .map(e => e[comp])

        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
        .map(e => arr[e]);
      return unique;
    },
    /**
     *
     * @param {Array[movie]} arr
     */
    $_ApiMixin_sortByDate(arr) {
      return arr
        .map(item => {
          return { id: item.id, date: Number(item.release_date.slice(0, 4)) };
        })
        .sort((a, b) => {
          return b.date - a.date;
        })
        .map(a => {
          return arr.filter(b => b.id == a.id);
        })
        .map(i => i[0]);
    },
    $_ApiMixin_getPersonMovies(id) {
      const request = this.$_ApiMixin_request(
        'person/' + id + '/movie_credits'
      );
      return axios.get(request).then(response => {
        /* СДЕЛАТЬ ВАРИАТИВНОСТЬ ДЛЯ АКТЕРОВ И РЕЖИСЕРОВ И Т.д */
        const result = this.$_ApiMixin_getUnique(response.data.cast, 'id');
        console.log(response);
        return this.$_ApiMixin_sortByDate(result);
      });
    },
    $_ApiMixin_getPopularMovies(page) {
      const request = `https://api.themoviedb.org/3/discover/movie?api_key=6c789b97c269e57a2df3bcbc30f04173&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
      return axios.get(request).then(response => response.data.results);
    },
    $_ApiMixin_getImg(path, size = 'original') {
      //   size ? `w${size}` : 'original';
      return `https://image.tmdb.org/t/p/${size}${path}`;
      //   return 'https://im2.ezgif.com/tmp/ezgif-2-93587a182941.gif';
    },
    $_ApiMixin_getMovie(id) {
      return this.$_ApiMixin_request('movie/' + id);
    },
    $_ApiMixin_getCast(id) {
      const path = `movie/${id}/credits`;
      return this.$_ApiMixin_request(path);
    },
    $_ApiMixin_getPerson(id) {
      return this.$_ApiMixin_request('person/' + id);
    },
    $_ApiMixin_getMoviesByGenre(genreId) {
      return this.$_ApiMixin_request('discover/movie', {
        with_genres: genreId,
      });
    },
    $_ApiMixin_request(path, options = {}) {
      this.tmp = `${this.endpoint}${path}?api_key=${this.key}&language=${
        this.lang
      }`;

      for (const key in options) {
        if (options.hasOwnProperty(key)) {
          this.tmp += `&${key}=${options[key]}`;
        }
      }
      return this.tmp;
    },
  },
};
