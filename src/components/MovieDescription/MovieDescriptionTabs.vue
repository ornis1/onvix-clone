<template>
  <div>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item--active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="tabs-content">
      <div v-if="currentTab === 'tab1'">{{overview}}</div>
      <div v-if="currentTab === 'tab2'" class="tabs-content-actors">
        <router-link
          class="tabs-content-actors__link"
          v-for="actor in actors"
          :key="actor.id"
          :to="`/actor/${actor.id}`"
        >{{actor.name}}</router-link>
      </div>
      <div v-if="currentTab === 'tab3'">
        <router-link
          class="tabs-content-actors__link"
          v-for="name in russianNames"
          :key="name.id"
          :to="`/actor/${name.name}`"
        >{{name.name}}</router-link>
        <pre>{{russianNames}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from 'vue-tabs-with-active-line';
import { ApiMixin } from 'Mixins/ApiMixin.js';
import axios from 'axios';

export default {
  components: {
    Tabs,
  },
  props: {
    overview: { type: String, required: true, default: '' },
    actors: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data: () => ({
    tabs: [
      { title: 'Описание', value: 'tab1' },
      { title: 'Актеры', value: 'tab2' },
      { title: 'Озвучки', value: 'tab3' },
      { title: 'Серии', value: 'tab4' },
      { title: 'Вам понравится', value: 'tab5' },
    ],
    currentTab: 'tab1',
    russianNames: [],
  }),
  mixins: [ApiMixin],
  mounted() {
    console.log('mount');
    for (const key in this.actors) {
      if (this.actors.hasOwnProperty(key)) {
        const actor = this.actors[key];
        const request = this.$_ApiMixin_getPerson(actor.id);
        axios.get(request).then(response => {
          const info = response.data;
          /* ПОЛУЧИТЬ ИМЕНА */
        });
      }
    }
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
};
</script>

<style lang="postcss">
.default-tabs {
  position: relative;
  /* margin: 0 auto; */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  /* padding-bottom: 10px; */
  &__item {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: all 0.25s;

    &--active {
      color: #ffc000;
    }

    &:hover {
      color: #ffc000;
    }

    &:focus {
      outline: none;
      color: #ffc000;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #ffc000;
    transition: transform 0.4s ease, width 0.1s ease;
  }
}

.tabs-content {
  margin-top: 20px;
  font-size: 16px;
  color: #aaa;
  &-actors {
    &__link {
      color: #fff;
      &::after {
        content: ', ';
      }
      &:hover {
        color: #ffc000;
      }
    }
  }
}
</style>