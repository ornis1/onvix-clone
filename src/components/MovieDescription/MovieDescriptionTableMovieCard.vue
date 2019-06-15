<template>
  <tr class="row">
    <td>
      <img :src="imgUrl" alt>
    </td>
    <td class="grow">
      <!-- <router-link :to="{name: 'movie', params: {title: movie.title, id: movie.id}}"> -->
      <router-link :to="{name: 'movie', params: {title: movie.name, type: 'movie', id: movie.id} }">
        <slot></slot>
        {{movie.title}}
      </router-link>
    </td>
    <td>{{year}}</td>
    <td>
      <a>IMDb {{movie.vote_average}}</a>
    </td>
  </tr>
</template>

<script>
import { ApiMixin } from 'Mixins/ApiMixin.js';

export default {
  mixins: [ApiMixin],

  name: 'MovieDescriptionTableMovieCard',
  props: { movie: {} },
  computed: {
    year() {
      return this.movie.release_date.slice(0, 4);
    },
    imgUrl() {
      console.log(this.movie);

      return this.$_ApiMixin_getImg(this.movie.poster_path, '200');
    },
  },
};
</script>

<style lang="postcss" scoped>
.row {
  a {
    color: #fff;
    &:hover {
      color: #ffc000;
    }
  }
  img {
    height: 74px;
  }
  td {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
  display: flex;
  align-items: center;
  height: 74px;
  margin: 20px 0;
}
.grow {
  display: flex;
  flex-grow: 1;
}
</style>

