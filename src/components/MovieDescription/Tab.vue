<template>
  <div v-show="isActive">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'tab',
  props: {
    name: {},
    selected: { default: false },
=======
  name: "tab",
  props: {
    name: {},
    selected: { default: false }
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  },
  data() {
    return { isActive: false };
  },
  mounted() {
    this.isActive = this.selected;
<<<<<<< HEAD
  },
=======
  }
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
};
</script>

<style>
</style>
