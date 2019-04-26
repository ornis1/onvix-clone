<template>
  <div>
    <div class="tabs" :class="css.tabs">
      <ul class="tabs-list" :class="css.ul">
        <li :class="['tabs-list-item', css.li]" v-for="tab in tabs" :key="tab.name">
          <a
            :class="[ tab.isActive ? 'tabs-list-item--active':'' , 'tabs-list-item-link', css.a]"
            href="#"
            @click.prevent="selectTab(tab)"
            @mouseover="selectTab(tab)"
          >{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <pre>{{this.$props.css}}</pre>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data() {
    return { tabs: [], timerId: null };
  },
  props: {
    css: {
      type: Object,
      required: true,
      default() {
        return { ul: {}, li: {}, a: {} };
      },
    },
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      const oldId = this.timerId;

      this.timerId = setTimeout(() => {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name;
        });
      }, 500);

      if (this.timerId !== oldId) {
        clearInterval(oldId);
      }
    },
  },
};
</script>

<style lang='postcss'>
/* .tabs {
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
} */
</style>
