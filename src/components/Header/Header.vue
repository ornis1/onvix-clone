<template>
  <header class="header">
    <!-- <nav class="nav">
      <Logo v-popover:tooltip="'Ты навел на логотип'" class="nav-icon logo"/>
      <Catalog v-popover:catalog.bottom class="nav-icon"/>
      <popover class="catalog-dropdown" name="catalog"></popover>
      <Search class="nav-icon"/>
      <Replay class="nav-icon"/>
      <popover name="replay">
      </popover>
      <Notification class="nav-icon"/>
      <popover name="notification">
      </popover>
      <Profile class="nav-icon"/>
      <popover name="Profile">
      </popover>
    </nav>
    <tooltip/>-->
  </header>
</template>

<script>
/* import Notification from "./Notification.vue";
import Catalog from "./Catalog.vue";
import Profile from "./Profile.vue";
import Search from "./Search.vue";
import Replay from "./Replay.vue";
import Logo from "./Logo.vue"; */

// import CatalogDropdown from "./CatalogDropdown.vue";
// import ReplayDropdown from "./ReplayDropdown.vue";
// import NotificationDropdown from "./NotificationDropdown.vue";
// import ProfileDropdown from "./ProfileDropdown.vue";
// import Tab from "./Tab";
// import Tabs from "./Tabs";
export default {
  components: {
    // CatalogDropdown,
    // ReplayDropdown,
    // ProfileDropdown,
    // NotificationDropdown,
    // Tab,
    // Tabs,
    // Logo,
    // Catalog,
    // Search,
    // Replay,
    // Notification,
    // Profile
  },
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='postcss'>
/* @import url("../../assets/_variables.css"); */

.catalog-dropdown {
  display: flex;
}
.logo {
  /* box-sizing: border-box; */
  width: 200px;
  padding: 5px 20px;
}
.header {
  font-size: 16px;
  z-index: 99;
  background-color: $nav_bgc;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  height: var(--header-height);
  min-width: 982px;
  width: 100%;
}
.nav {
  margin: 0 auto;
  display: flex;
  max-width: 1550px;
  &-icon {
    @mixin center;
    align-items: stretch;
    &:hover {
      background-color: var(--hover);
    }
  }
}
</style>
