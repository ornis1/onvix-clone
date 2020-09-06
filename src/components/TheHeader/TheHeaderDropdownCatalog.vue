<template>
  <div class="catalog-dropdown">
    <div class="catalog-dropdown-tabs">
      <tabs
        :tabs="tabs"
        :currentTab="currentTab"
        :wrapper-class="'catalog-tabs'"
        :tab-class="'catalog-tabs__item'"
        :tab-active-class="'catalog-tabs__item--active'"
        :line-class="'catalog-tabs__active-line'"
        @onClick="handleClick"
      />
      <div class="catalog-dropdown--hr"></div>
      <a class="catalog-tabs__item" href>Подборки</a>
      <a class="catalog-tabs__item" href>Фильтр</a>
    </div>
    <div class="content">
      <ul class="list">
        <li class="list-item" v-for="n in 20" :key="n">
          <a href class="list-item-link">{{currentTab}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tabs from 'vue-tabs-with-active-line';
import { ApiMixin } from 'Mixins/ApiMixin';

export default {
  name: 'TheHeaderDropdownCatalog',
  components: { Tabs },
  mixins: { ApiMixin },
  data() {
    return {
      tabs: [
        { title: 'Фильмы', value: 'tab1' },
        { title: 'Сериалы', value: 'tab2' },
        { title: 'Мультфильмы', value: 'tab3' },
        { title: 'Аниме', value: 'tab4' },
      ],
      currentTab: 'tab1',
    };
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
};
</script>

<style lang="stylus" >
@import '../../assets/styles/_mixins.styl';
.catalog-dropdown--hr {
  margin: 15px 35px;
  height: 1px;
  opacity: 0.1;
  background: #171717;
}
.catalog-dropdown {
  position: absolute;
  width: 100%;
  height: 315px;
  top: 66px;

  display: flex;
  &-tabs {
    min-width: 200px;
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: #e8e8e8;
  }
  .content {
    background-color: #fff;
    width: 100%;
    .list {
      padding: 35px 0;
      height: 315px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      flex-wrap: wrap;
      &-item {
        color: black;
        font-size: 16px;
        height: 35px;
        width: 216px;

  display: flex;
  justify-content: center;
  align-items: center;
        align-items: stretch;
        &-link {
          /* background-color: #333; */
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
  }

  .catalog-tabs {
    display: flex;
    flex-direction: column;
    &__item {
      height: 35px;
      text-align: left;
      outline: none;
      reset-button();
      padding: 9px 5px 10px 30px;
      border-left: 4px solid transparent;
      color: #797979;
      cursor: pointer;
      &--active {
        color: #000;
        background-color: #fff;
        border-left: 4px solid #24b2d8;
      }
    }
  }
  button {
    background-color: #fff;
  }
}
/* TABS STyLES */
</style>
