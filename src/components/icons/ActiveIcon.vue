<template>
  <a :class="['icons__link', activeStyle]" href="#" @click.prevent="switchIt()">
    <slot></slot>
    <IconClose class="close"/>
  </a>
</template>

<script>
import IconClose from 'icons/IconClose';

export default {
  name: 'ActiveIcon',
  components: { IconClose },
  data() {
    return {};
  },
  props: {
    movie: { type: Object, required: true },
    movieCategory: { type: String, required: true },
  },
  computed: {
    activeStyle() {
      return this.isActive
        ? {
            favorite: this.movieCategory === 'favorite',
            watchLater: this.movieCategory === 'watchLater',
            watched: this.movieCategory === 'watched',
          }
        : {};
    },
    isActive() {
      const tmp = [...this.$store.getters[this.movieCategory]];
      return tmp.some((x) => x.id === this.movie.id);
    },
  },
  methods: {
    switchIt() {
      if (this.isActive) {
        console.log('Удалил');

        this.$store.dispatch('remove', {
          movie: this.movie,
          name: `${this.movieCategory}`,
        });
        return;
      }
      console.log('Добавил');
      this.$store.dispatch('add', {
        movie: this.movie,
        name: `${this.movieCategory}`,
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.icons__link {
  position: relative;
  box-sizing: border-box;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
}
.favorite {
  background-color: #ffc000;
  border: none;
}

.watchLater {
  background-color: #24d877;
  border: none;
}

.watched {
  background-color: #24b2d8;
  border: none;
}
.favorite,
.watched,
.watchLater {
  &:hover {
    svg {
      display: none;
    }
    .close {
      color: black;
      display: block;
    }
  }
}

.close {
  color: white;
  display: none;
  height: 17px;
}
</style>

