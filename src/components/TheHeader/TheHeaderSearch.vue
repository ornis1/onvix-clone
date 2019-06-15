<template>
  <div class="nav-search">
    <input class="input" v-model.trim="query" @keyup="search" type="text" placeholder="Поиск">
    <button @click.stop="search" class="btn btn-search">
      <icon-search></icon-search>
    </button>
    <button @click.stop="clear" class="btn btn-close">
      <icon-close></icon-close>
    </button>
  </div>
</template>

<script>
import IconSearch from '../icons/IconSearch';
import IconClose from '../icons/IconClose';

export default {
  data() {
    return { query: '' };
  },
  methods: {
    clear() {
      console.log('asd');

      this.query = '';
      this.$router.push('/');
    },
    search() {
      if (!this.query) {
        this.$router.push('/');
        return;
      }
      this.$router.push({
        name: 'search',
        query: { q: this.query },
        params: { title: `Поиск: ${this.query}` },
      });
    },
  },
  components: { IconSearch, IconClose },
  name: 'Search',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
.btn {
  position: absolute;
  background-color: transparent;
  padding: 14px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  z-index: 1000;
}
.btn-search {
  left: 0;
  top: 0;
  padding-top: 20px;

  height: 66px;
  width: 43px;

  color: #fff;
}
.btn-close {
  top: 0;
  right: 0;
  color: #aaa;
  height: 15px;
  width: 15px;
  padding: 0;
  margin-top: 24px;
  margin-right: 20px;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.nav-search {
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: relative;
  flex-grow: 1;
  /* height: 66px; */
  .input {
    /* position: relative; */
    color: #fff;
    width: 100%;
    background-color: transparent;
    border: none;
    padding-left: 60px;
    padding-top: 8px;
    line-height: 30px;
    &::placeholder {
      color: #fff;
      font-size: 16px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.04);
    }
    &:focus {
      background-color: #fff;
      color: black;

      &::placeholder {
        color: #aaa;
      }
    }
  }
  .input:focus ~ .btn-close {
    opacity: 1;
    visibility: visible;
  }
  .input:focus ~ .btn-search {
    color: #000;
  }
}
</style>
