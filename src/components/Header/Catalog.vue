<template>
  <div>
    <a class="nav-catalog" href="#">
      Каталог
      <arrow-down class="nav-catalog-arrow"></arrow-down>
    </a>
  </div>
</template>

<script>
<<<<<<< HEAD
import IconArrowDown from '../icons/IconArrowDown';
// import IconMenu from "../icons/IconMenu.vue";
export default {
  name: 'Catalog',
  components: {
    'arrow-down': IconArrowDown,
=======
import IconArrowDown from "../icons/IconArrowDown.vue";
// import IconMenu from "../icons/IconMenu.vue";
export default {
  name: "Catalog",
  components: {
    "arrow-down": IconArrowDown
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  },
  data() {
    return {};
  },
<<<<<<< HEAD
  props: {},
=======
  props: {}
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='postcss'>
<<<<<<< HEAD
=======
@import url("../../assets/_variables.css");
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
.nav-catalog {
  @mixin center;
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
