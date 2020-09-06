<template>
  <header class="header">
    <nav class="navigation">
      <router-link class="navigation-item logo" to="/">
        <Logo/>
      </router-link>
      <Catalog class="navigation-item" @click.native.stop="openDropdown('catalog')"/>
      <DropdownCatalog v-if="catalog" @click.native.stop="openDropdown('catalog')"/>

      <Search class="navigation-item"/>
      <base-header-icon class="replay" @click.native.stop="openDropdown('replay')">
        <icon-replay></icon-replay>
      </base-header-icon>
      <DropdownReplay v-if="replay" @click.native.stop="openDropdown('replay')"/>

      <base-header-icon class="navigation-item">
        <icon-bell></icon-bell>
      </base-header-icon>

      <base-header-icon class="navigation-item" @click.native.stop="openDropdown('profile')">
        <img :src="userIMG" alt srcset>
      </base-header-icon>
      <DropdownProfile v-if="profile" @click.native.stop="openDropdown('profile')"/>
    </nav>
  </header>
</template>

<script>
import Logo from 'icons/IconLogo';
import IconBell from 'icons/IconBell';
import IconReplay from 'icons/IconReplay';

import DropdownCatalog from 'TheHeader/TheHeaderDropdownCatalog';
import DropdownReplay from 'TheHeader/TheHeaderDropdownReplay';
import DropdownProfile from 'TheHeader/TheHeaderDropdownProfile';

import TheHeaderCatalog from './TheHeaderCatalog';
import TheHeaderSearch from './TheHeaderSearch';

import BaseHeaderIcon from './BaseHeaderIcon';

export default {
  data() {
    return {
      catalog: false,
      replay: false,
      notification: false,
      profile: false,
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeAll();
    });
  },
  computed: {
    userIMG() {
      const user = this.$store.getters.user;
      if (user === null) return '';
      return user.photoUrl;
    },
  },
  methods: {
    closeAll() {
      this.catalog = false;
      this.replay = false;
      this.notification = false;
      this.profile = false;
    },
    openDropdown(target) {
      this.closeAll();

      this.$data[target] = true;
    },
  },
  components: {
    DropdownCatalog,
    DropdownReplay,
    DropdownProfile,
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
<style lang='stylus'>
@import '../../assets/styles/_colors.styl';
.replay:hover {
  .replay-dropdown {
    display: block;
  }
}
.replay-dropdown,
.profile-dropdown,
.notification-dropdown {
  display: none;
}
.logo {
  width: 200px;
  padding: 5px 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: flex;
  align-self: stretch;
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

  position: relative;

  max-width: 1600px;
  min-width: 900px;
  width: 100%;
}
</style>
