<template>
  <div>
    <div class="tabs">
      <ul class="tabs-list">
        <li v-for="tab in tabs" :class="['tabs-list-item']">
          <a
            :class="[ tab.isActive ? 'tabs-list-item--active':'' , 'tabs-list-link']"
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
  name: "tabs",
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
};
</script>

<style lang='postcss' scoped>
.tabs {
  background-color: #e8e8e8;
  width: 201px;
  height: 315px;
  padding: 30px 15px;
  box-sizing: border-box;
  font-size: 16px;
  position: relative;

  &-details {
    box-sizing: border-box;
    background-color: #fff;
    width: 100%;
    /* color: #000; */
  }
  &-list {
    height: 70%;
    background-color: #333;
    &-item {
      margin: 5px 0;
    }
    &-link {
      color: #797979;
    }
  }
}
</style>
