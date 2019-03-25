<template>
  <header class="header">
    <nav class="nav">
      <Logo class="nav-icon logo"/>
      <Catalog class="nav-icon"/>
      <Search class="nav-icon"/>
      <Replay class="nav-icon"/>
      <Notification class="nav-icon"/>
      <Profile class="nav-icon"/>
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
<style lang='postcss' scoped>
@import url("../../assets/_variables.css");
.logo {
  box-sizing: border-box;
  width: 200px;
  padding: 5px 20px;
}
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
}
.nav {
  min-width: 980px;
  max-width: 1550px;
  width: auto;
  margin: 0 auto;
  height: 66px;
  display: flex;

  &-icon {
    color: white;
    height: 100%;
    /* cursor: pointer; */
    @mixin center;

    &:hover {
      background-color: $hover;
    }
  }
}
</style>
