<template>
  <header class="header">
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
  </header>
</template>

<script>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='postcss'>
@import '../../styles/_colors.css';

.catalog-dropdown {
  display: flex;
}
.logo {
  width: 200px;
  padding: 5px 20px;
}
.header {
  display: flex;
  font-size: 16px;
  z-index: 99;
  background-color: $nav_bgc;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  height: 66px;
  min-width: 982px;
  width: 100%;
}
.nav {
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 1550px;
  &-icon {
    @mixin center;
    align-items: stretch;
    &:hover {
      background-color: $hover;
    }
  }
}
</style>
