<template>
  <a class="nav-catalog" href="#">
    Каталог
    <arrow-down class="nav-catalog-arrow"></arrow-down>
  </a>
</template>

<script>
import IconArrowDown from '../icons/IconArrowDown';
// import IconMenu from "../icons/IconMenu.vue";
export default {
  name: 'Catalog',
  components: {
    'arrow-down': IconArrowDown,
  },
  data() {
    return {};
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='postcss'>
.nav-catalog {

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  width: 140px;
  box-sizing: border-box;

  &-arrow {
    height: 16px;
    width: 16px;
    color: #585858;
    margin-left: 10px;
    transform: translateY(3px);
    transition: 0.3s;
  }
}
.nav-catalog:focus {
  background-color: #fff;
  color: #000;
  & .nav-catalog-arrow {
    color: #000;
    transform: rotate(180deg) translateY(-3px);
  }
}
</style>
