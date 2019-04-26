<template>
  <!-- <tabs class="dropdown flex" :css="css">
    <tab name="фильмы" :selected="'true'" class="tab">
      <ul class="dropdown-list">
        <li v-for="genre in genres" :key="genre" class="dropdown-list-item">
          <a class="dropdown-list-link" href>{{genre}}</a>
        </li>
      </ul>
    </tab>
    <tab name="Сериалы" class="tab">
      <ul class="dropdown-list">
        <li v-for="genre in genres" :key="genre" class="dropdown-list-item">
          <router-link to="/" class="dropdown-list-link">{{genre}} a</router-link>
        </li>
      </ul>
    </tab>
  </tabs>-->
  <!-- <div>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non
        numquam eius modi tempora incidunt ut labore
        et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div v-if="currentTab === 'tab2'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div v-if="currentTab === 'tab3'">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia animi, id est laborum et dolorum fuga.
      </div>
    </div>
  </div>-->
</template>

<script>
// import Tab from 'Tabs/Tab';
// import Tabs from 'Tabs/Tabs';
import Tabs from 'vue-tabs-with-active-line';

export default {
  name: 'TheHeaderDropdownCatalog',
  components: { Tabs },
  data() {
    return {
      data: () => ({
        tabs: [
          { title: 'Tab 1', value: 'tab1' },
          { title: 'Tab 2', value: 'tab2' },
          { title: 'Tab 3', value: 'tab3' },
        ],
        currentTab: 'tab1',
      }),
      /* tabs: [{ti}]
      genres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      css: {
        tabs: {
          fontSize: '16px',
          display: 'flex',
          height: '315px',
          color: '#797979',
        },
        ul: {
          width: '200px',
          padding: '35px 0',
          boxSizing: 'border-box',
          background: '#e8e8e8',
        },
        li: {
          height: '35px',
        },
        a: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
          color: 'inherit',
        },
      }, */
    };
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
};
</script>

<style lang="postcss" scoped>
/* TABS STyLES */
.tabs-details {
  background-color: #fff;
  width: 600px;
  display: block;
}
.tabs {
  &-list {
    width: 200px;
    padding: 35px 0;
    box-sizing: border-box;
    background: #e8e8e8;
    &-item {
      height: 35px;
      &-link {
        @mixin center;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: inherit;
      }
    }
  }
}
.tabs-list-item--active {
  background-color: #fff;
  color: #000;
  border-left: 4px solid #24b2d8;
}
/* END TABS STYLES */
.flex {
  display: flex;
  width: auto;
  /* flex-grow: 1; */
}
a:hover {
  text-decoration: none;
}
.dropdown {
  position: absolute;
  /* left: 0; */
  /* width: 1600px; */
  /* min-width: 900px; */
  /* width: 100%; */

  &-list {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
    height: 315px;
    padding: 35px 0;
    box-sizing: border-box;

    &-item {
      color: black;
      font-size: 16px;
      height: 35px;
      width: 216px;
      @mixin center;
      align-items: stretch;
    }
    &-link {
      padding: 9px 34px 10px 54px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-grow: 1;
      &:hover {
        color: #1a94b5;
      }
    }
  }
}
</style>
