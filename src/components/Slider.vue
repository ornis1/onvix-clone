<template>
  <div class="slider">
    <div class="slide" v-for="(movie,index) in movies" :key="index">
      <MovieCard :watched="watched" :movie="movie" :large="true"/>
    </div>
  </div>
</template>

<script>
import data from "../assets/movies.json";
import MovieCard from "./MovieCard/MovieCard.vue";
export default {
  data() {
    return {
      movies: {},
      watched: [164651, 164620, 164775, 164429, 164669]
    };
  },
  created() {
    this.movies = data.materials;
  },
  name: "Slider",
  components: { MovieCard }
};
</script>

<style lang="postcss">
.slider {
  width: auto;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
.slide {
  display: block;
  grid-column: span 1;
  grid-row: span 1;
}
</style>
