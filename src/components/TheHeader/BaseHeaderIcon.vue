<template>
  <div>
    <a class="icon" href="#" @click="isActive = !isActive" :class="[isActive ? 'isActive': '']">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseHeaderIcon',
  props: { selected: { default: false } },
  data() {
    return { isActive: false };
  },
  mounted() {
    this.isActive = this.selected;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='postcss' scoped>
@import '../../assets/styles/_colors.css';
.icon {
  cursor: pointer;
  display: flex;
  height: 66px;
  width: 66px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: $hover;
  }
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
