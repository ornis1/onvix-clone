<template>
  <div class="nav-icon">
    <a href="#" class="nav-logo">
      <img src="../../assets/logo.svg" alt="onvix" title="onvix">
    </a>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
.nav-logo {
  @mixin center;
  height: 100%;
  width: 203px;
}
</style>
