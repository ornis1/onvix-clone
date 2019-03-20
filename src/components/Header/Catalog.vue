<template>
  <div class="nav-icon">
    <a class="nav-catalog dropdawn" href="#">
      Каталог
      <span class="nav-catalog-arrow"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
.nav-catalog {
  color: white;
  @mixin center;
  height: 100%;
  width: 140px;
  position: relative;
  justify-content: space-around;

  &:hover {
    text-decoration: none;
  }
  &-arrow {
    height: 8px;
    width: 8px;
    background-color: transparent;
    border-bottom: 2px solid #535353;
    border-left: 2px solid #535353;
    transform: rotate(-45deg);
    margin: 0 0 3px -30px;
  }
}
</style>
