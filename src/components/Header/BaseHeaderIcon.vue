<template>
  <div>
    <a class="icon" href="#">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='postcss'>
.icon {
  cursor: pointer;
  display: flex;
  height: 66px;
  width: 66px;
  color: white;
  @mixin center;
}
.icon:active,
.icon:focus {
  background-color: #fff;
  color: black;
}
.icon svg {
  height: 25px;
  width: 25px;
}
.icon img {
  border-radius: 50%;
  height: 35px;
  width: 35px;
}
</style>
