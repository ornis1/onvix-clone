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
import Logo from "./Logo.vue";
import Catalog from "./Catalog.vue";
import Search from "./Search.vue";
import Replay from "./Replay.vue";
import Notification from "./Notification.vue";
import Profile from "./Profile.vue";

export default {
  components: { Logo, Catalog, Search, Replay, Notification, Profile },
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
@import "../../assets/_variables.css";

.header {
  line-height: 32px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Lato", sans-serif;

  background-color: var(--nav_bgc);

  padding: 0 30px;
  position: fixed;
  top: 0;
  height: 66px;
  min-width: 982px;
  width: 100%;
  box-sizing: border-box;
}
.nav {
  padding: 0 20px 0 20px;
  margin: 0 auto;

  height: 66px;
  width: auto;

  color: white;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &-icon {
    color: white;
    /* border: 1px solid white; */
    height: 100%;

    @mixin center;

    &:hover {
      background-color: var(--hover);
    }
  }
}
</style>
