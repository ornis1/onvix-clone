<template>
  <div>
    <div class="tabs">
      <ul class="tabs-list">
<<<<<<< HEAD
        <li v-for="tab in tabs" :key="tab.name" :class="['tabs-list-item']">
=======
        <li v-for="tab in tabs" :class="['tabs-list-item']">
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
          <a
            :class="[ tab.isActive ? 'tabs-list-item--active':'' , 'tabs-list-item-link']"
            href="#"
            @click.prevent="selectTab(tab)"
          >{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'tabs',
=======
  name: "tabs",
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
<<<<<<< HEAD
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
=======
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
};
</script>

<style lang='postcss'>
.tabs {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  &-list {
    display: flex;
    padding-bottom: 10px;
    &-item a {
      padding-bottom: 14px;
      margin-right: 20px;
    }
  }
  &-details {
    padding: 20px 0;
  }
}
.tabs-list-item--active,
.tabs-list-item a:focus,
.tabs-list-item a:active,
.tabs-list-item a:hover {
  color: #ffc000 !important;
  border-bottom: 2px solid #ffc000;
}
:matches(.content) a {
  color: #fff;
}
</style>
