<template>
  <div class="icons" @mouseleave="show = false" :class="{'show': show}">
    <div v-if="show" class="icons--backdark"></div>
    <IconMenu
      @mouseover.native="show = true"
      :class="{'icons__menu--active': active}"
      class="icons__menu icon"
    />
    <IconClose @click.native="removeMovie" v-if="btnCLoseShow" class="icons__close icon"/>
    <ActiveIcons v-if="show" :movie="movie" class="icons__active-icons"/>
  </div>
</template>
<script>
import ActiveIcons from 'icons/ActiveIcons';
import IconClose from 'icons/IconClose';
import IconMenu from 'icons/IconMenu';

export default {
  props: {
    movie: { type: Object },
  },
  data() {
    return { show: false };
  },
  components: { ActiveIcons, IconClose, IconMenu },
  name: 'MovieCardTopIcons',
  computed: {
    btnCLoseShow() {
      return this.movie.from;
    },
    active() {
      const w = this.$store.getters.watched;
      const wl = this.$store.getters.watchLater;
      const f = this.$store.getters.favorite;
      let r = [...w, ...wl, ...f].some((x) => x.id === this.movie.id);
      return r;
    },
  },
  methods: {
    removeMovie() {
      /* Узнаем где находится этот фильм (просмотренные, избранные и т.д.) */
      if (this.movie.from) {
        this.$store.dispatch('remove', {
          movie: this.movie,
          name: this.movie.from,
        });
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
.show {
  width: 100%;
  height: 100%;
}
.icons {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;

  z-index: 500;
  display: flex;
  justify-content: flex-end;
  &--backdark {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.89);
    height: 100%;
    z-index: 5;
  }
  .icon {
    z-index: 1000;
    margin: 5px 8px 0 0;
    cursor: pointer;
  }
  &__close {
    padding: 3px;
    height: 25px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.2);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  &__menu {
    color: rgba(255, 255, 255, 0.2);
    height: 18px;
    transition: none;
    &:hover {
      color: white;
    }
  }
  &__active-icons {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 55px 15px 0;
  }
}
.icons__menu--active {
  color: #ffff00;
  &:hover {
    color: #ffff00;
  }
}
</style>

