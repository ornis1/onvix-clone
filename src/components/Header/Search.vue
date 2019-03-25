<template>
  <div>
    <div class="nav-search">
      <button class="btn-search">
        <icon-search class="icon"></icon-search>
      </button>
      <input type="text" placeholder="Поиск" value>
    </div>
  </div>
</template>

<script>
import IconSearch from "../icons/IconSearch";
export default {
  components: { IconSearch },
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
.nav-search {
  @mixin center;
  min-width: 200px;
  /* max-width: 900px; */
  color: white;
  position: relative;
  height: 100%;
  /* width: 100%; */
  & input {
    width: 100%;
    min-width: 420px;
    height: 100%;
    padding: 0;
    padding-left: 0px;

    background-color: transparent;
    border: none;
    /* outline: none; */
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
    & .icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
