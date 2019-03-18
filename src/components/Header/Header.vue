<template>
  <header class="header">
    <nav class="nav">
      <Logo/>
      <Catalog/>
      <Search/>
      <Replay/>
      <Notification/>
      <Profile/>
    </nav>
  </header>
</template>

<script>
import Notification from "./Notification.vue";
import Catalog from "./Catalog.vue";
import Profile from "./Profile.vue";
import Search from "./Search.vue";
import Replay from "./Replay.vue";
import Logo from "./Logo.vue";

export default {
  components: { Logo, Catalog, Search, Replay, Notification, Profile },
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
@import "../../assets/_variables.css";

.header {
  font-size: 16px;
  font-family: "Lato", sans-serif;
  z-index: 99;
  background-color: $nav_bgc;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  height: $header-height;
  min-width: 982px;
  width: 100%;
  box-sizing: border-box;
}
.nav {
  max-width: 1550px;
  margin: 0 auto;
  height: 66px;
  width: auto;
  display: flex;

  &-icon {
    color: white;
    /* border: 1px solid white; */
    height: 100%;

    @mixin center;

    &:hover {
      background-color: $hover;
    }
  }
}
</style>
