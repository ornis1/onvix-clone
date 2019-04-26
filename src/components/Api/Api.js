import axios from 'axios';

/* eslint-disable */
export default class Api {
  constructor() {
    this.key = '6c789b97c269e57a2df3bcbc30f04173';
    this.endpoint = 'https://api.themoviedb.org/3/';
    this.lang = 'ru';
    this.tmp = '';
  }
  getMovie(id) {
    axios
      .get(this.request(id))
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error(error);
      });
  }
  getMoviesByGenre(genreId) {
    return this.request('discover/movie', { with_genres: genreId });
  }
  request(path, options) {
    this.tmp = `${this.endpoint}${path}?api_key=${this.key}`;

    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        this.tmp += `&${key}=${options[key]}`;
      }
    }
    return this.tmp;
  }
}
