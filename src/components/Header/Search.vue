<template>
  <div>
    <!-- <div :class="[request ? 'is-active': '','nav-search' ]"> -->
    <div class="nav-search">
      <button class="btn btn-search">
        <icon-search class="icon"></icon-search>
      </button>
      <button class="btn btn-close" @click="clear">
        <icon-close class="icon"></icon-close>
      </button>
      <input type="text" placeholder="Поиск" v-model="request">
    </div>
  </div>
</template>

<script>
import IconSearch from '../icons/IconSearch';
import IconClose from '../icons/IconClose';

export default {
  components: { IconSearch, IconClose },
  data() {
    return {
      movies: null,
      request: '',
      endpoint: 'http://www.omdbapi.com/?plot=full&apikey=e52c6e3',
    };
  },
  name: 'Search',
  props: {},
  methods: {
    clear() {
      this.request = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
.nav-search {
  @mixin center;
  align-items: stretch;
  position: relative;
  & input {
    background-color: transparent;
    border: none;
    padding-left: 60px;
    color: #000;
    &:focus {
      background-color: #fff;
      &::placeholder {
        color: grey;
      }
    }
    &:active {
      background-color: #fff;
    }
    &::placeholder {
      color: white;
      opacity: 1;
      font-size: 16px;
    }
  }
  .btn {
    width: 60px;
    height: 100%;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    .icon {
      width: 16px;
      height: 16px;
    }
  }
  .btn-search {
    color: #fff;
    left: 0;
  }
  .btn-close {
    color: black;
    opacity: 0;
    top: calc(50%-10px);
    right: 10px;
    width: auto;
    height: auto;
  }
}
.is-active {
  input {
    background-color: #fff;
  }
  .btn-close {
    opacity: 1;
  }
  .btn-search {
    color: black;
  }
}
</style>
