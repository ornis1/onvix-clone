<template>
  <header class="header">
    <nav class="navigation">
      <router-link class="navigation-item logo" to="/">
        <Logo/>
      </router-link>
      <Catalog class="navigation-item" v-popover:catalog/>
      <popover name="catalog">
        <DropdownCatalog/>
      </popover>
      <Search class="navigation-item"/>
      <base-header-icon class="navigation-item" v-popover:replay>
        <icon-replay></icon-replay>
      </base-header-icon>
      <popover name="replay">
        <DropdownReplay/>
      </popover>
      <base-header-icon class="navigation-item">
        <icon-bell></icon-bell>
      </base-header-icon>
      <base-header-icon class="navigation-item">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/bobross-profile_image-0b9dd167a9bb16b5-300x300.jpeg"
          alt
          srcset
        >
      </base-header-icon>
    </nav>
    <!-- <tooltip/> -->
    <!-- <catalog-dropdown></catalog-dropdown> -->
  </header>
</template>

<script>
import Logo from 'icons/IconLogo';
import IconBell from 'icons/IconBell';
import IconReplay from 'icons/IconReplay';

import TheHeaderCatalog from './TheHeaderCatalog';
import TheHeaderSearch from './TheHeaderSearch';

import BaseHeaderIcon from './BaseHeaderIcon';
import DropdownCatalog from 'TheHeader/TheHeaderDropdownCatalog';
import DropdownReplay from 'TheHeader/TheHeaderDropdownReplay';

export default {
  components: {
    DropdownCatalog,
    DropdownReplay,
    BaseHeaderIcon,
    IconBell,
    IconReplay,
    Logo,
    Catalog: TheHeaderCatalog,
    Search: TheHeaderSearch,
  },
  name: 'TheHeader',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='postcss'>
@import '../../assets/styles/_colors.css';
div[data-popover='catalog'],
div[data-popover='replay'] {
  padding: 0;
  width: 0;
  transform: translateY(-6px);
  position: absolute;
  &::before {
    display: none;
  }
}
div[data-popover='catalog'] {
  width: 400px;
  height: 400px;
}
.catalog-dropdown {
  display: flex;
}
.logo {
  width: 200px;
  padding: 5px 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
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
.navigation {
  margin: 0 auto;
  display: flex;
  max-width: 1600px;
  min-width: 900px;
  width: 100%;
  &-item {
    display: flex;
    align-self: stretch;
    &:hover {
      background-color: $hover;
    }
  }
}
</style>
