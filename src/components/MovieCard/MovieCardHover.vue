<template>
  <div class="hover">
    <div class="hover-buttons">
      <router-link to="/">
        <base-button class="hover-btn" color="gradient">Смотреть</base-button>
      </router-link>
      <router-link :to="{name: 'movie', params: {title: movie.title, id: movie.id, movie: movie}}">
        <base-button class="hover-btn" color="normal-outline">Описание</base-button>
      </router-link>
    </div>
  </div>
</template>

<script>
// import BaseButton from 'Buttons/BaseButton';
import BaseButton from '../Buttons/BaseButton';
import MovieCardTopIcons from 'MovieCard/MovieCardTopIcons';

export default {
  name: 'MovieCardHover',
  components: { BaseButton, MovieCardTopIcons },
  props: {
    movie: {
      type: [Object],
      requare: true,
    },
  },
};
</script>

<style lang="stylus" >
.hover {
  opacity: 0;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(23, 23, 23, 0.5) 0%,
    #24b2d8 100%
  );
  background-repeat: no-repeat;
  &-btn {
    margin: 10px 0;
    height: 32px;
    width: 100%;
    font-size: 14px;
  }
  &-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 146px;
    margin: 0 auto;
  }
}
</style>
