<template>
  <div>
    <slot name="link"></slot>
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseActiveIcon',
  props: { activeColor: { type: String } },
};
</script>

<style>
</style>
