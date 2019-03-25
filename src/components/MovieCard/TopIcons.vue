<template>
  <div class="top-icons">
    <span class="top-icons--list-add fas fa-bars">
      <a href="#"></a>
    </span>
    <span class="fas fa-times top-icons--delete">
      <a href="#"></a>
    </span>
  </div>
</template>
<script>
export default {
  name: "topIcons"
};
</script>
<style lang="postcss" >
.top-icons {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  z-index: 5;
  opacity: 0;
  visibility: hidden;
}
</style>

