<template>
  <header class="header">
<<<<<<< HEAD
    <nav class="nav">
      <router-link to="/">
        <Logo/>
      </router-link>
      <Catalog/>
      <Search/>
      <base-header-icon>
        <icon-bell></icon-bell>
      </base-header-icon>
      <base-header-icon>
        <icon-replay></icon-replay>
      </base-header-icon>
      <base-header-icon v-popover:a.bottom>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/bobross-profile_image-0b9dd167a9bb16b5-300x300.jpeg"
          alt
          srcset
        >
      </base-header-icon>
      <popover name="a">asdasdasd</popover>
    </nav>
    <!-- <tooltip/> -->
=======
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
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  </header>
</template>

<script>
<<<<<<< HEAD
import Logo from 'icons/IconLogo';
import IconBell from 'icons/IconBell';
import IconReplay from 'icons/IconReplay';
import Catalog from './Catalog';
import Search from './Search';
import BaseHeaderIcon from './BaseHeaderIcon';

export default {
  components: {
    BaseHeaderIcon,
    IconBell,
    IconReplay,
    Logo,
    Catalog,
    Search,
  },
  name: 'Header',
=======
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
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='postcss'>
<<<<<<< HEAD
@import '../../styles/_colors.css';
=======
/* @import url("../../assets/_variables.css"); */
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b

.catalog-dropdown {
  display: flex;
}
.logo {
<<<<<<< HEAD
=======
  /* box-sizing: border-box; */
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  width: 200px;
  padding: 5px 20px;
}
.header {
<<<<<<< HEAD
  display: flex;
=======
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  font-size: 16px;
  z-index: 99;
  background-color: $nav_bgc;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
<<<<<<< HEAD
  height: 66px;
=======
  height: var(--header-height);
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  min-width: 982px;
  width: 100%;
}
.nav {
  margin: 0 auto;
  display: flex;
<<<<<<< HEAD
  align-items: center;
=======
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  max-width: 1550px;
  &-icon {
    @mixin center;
    align-items: stretch;
    &:hover {
<<<<<<< HEAD
      background-color: $hover;
=======
      background-color: var(--hover);
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
    }
  }
}
</style>
