<template>
  <div v-show="isActive">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    name: {},
    selected: { default: false },
  },
  data() {
    return { isActive: false };
  },
  mounted() {
    this.isActive = this.selected;
  },
};
</script>

<style>
</style>
