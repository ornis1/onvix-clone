<template>
  <div>
    <div class="tabs">
      <ul class="tabs-list">
        <li v-for="tab in tabs" :key="tab.name" :class="['tabs-list-item']">
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
  name: 'tabs',
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
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
