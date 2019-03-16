<template>
  <div class="nav-icon">
    <div class="nav-search">
      <button class="btn-search" @click="alert">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="sprite-svg sprite-svg--search"
          width="14px"
          height="15px"
          viewBox="0 0 14 15"
        >
          <g class="svg--search-g" fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2">
            <circle cx="6" cy="6" r="5"></circle>
            <path d="M9.11547852 10.1070557l3.36962888 3.2701416" stroke-linecap="square"></path>
          </g>
        </svg>
      </button>
      <input type="text" placeholder="Поиск" value>
      <!-- <button class="btn-close"></button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: null,
      request: null,
      endpoint: "http://www.omdbapi.com/?plot=full&apikey=e52c6e3"
    };
  },
  name: "Search",
  props: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
@import "../../assets/_variables.css";
.nav-icon {
  width: 100%;
  background-color: $nav_bgc;
}
.nav-search {
  display: flex;
  min-width: 200px;
  color: white;
  position: relative;
  height: 100%;
  width: 100%;
  & input {
    width: 100%;
    min-width: 420px;
    height: 100%;
    padding: 0;
    padding-left: 0px;

    background-color: transparent;
    border: none;
    outline: none;
    &::placeholder {
      color: white;
      opacity: 1;
      font-size: 16px;
    }
  }
  .btn-close {
    background-color: transparent;
  }
  .btn-search {
    background-color: transparent;
    border: none;
    height: 100%;
    width: 60px;
    cursor: pointer;
  }
}
</style>
