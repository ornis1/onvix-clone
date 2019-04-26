<template>
  <div class="icons">
    <a
      class="icons__link icons__link-star"
      :class="{'icons__link-star-active' : isFavorite}"
      href="#"
      @click="switchIt('star')"
    >
      <IconStar class="star"/>
      <IconClose v-if="isFavorite" class="star-close close"/>
    </a>
    <a
      @click="switchIt('clock')"
      class="icons__link icons__link-clock"
      :class="{'icons__link-clock-active' : isWatchLater}"
      href="#"
    >
      <IconClock class="clock"/>
      <IconClose v-if="isWatchLater" class="clock-close close"/>
    </a>
    <a
      @click="switchIt('watched')"
      class="icons__link icons__link-watched"
      :class="{'icons__link-watched-active' : isWatched}"
      href="#"
    >
      <IconWatched class="watched"/>
      <IconClose v-if="isWatched" class="watched-close close"/>
    </a>
  </div>
</template>

<script>
import IconWatched from 'icons/IconWatched';
import IconStar from 'icons/IconStarSolid';
import IconClock from 'icons/IconClockSolid';
import IconClose from 'icons/IconClose';
import BaseActiveIcon from 'icons/BaseActiveIcon';

export default {
  name: 'ActiveIcons',
  components: {
    BaseActiveIcon,
    IconClose,
    IconWatched,
    IconClock,
    IconStar,
  },
  data() {
    return {
      isFavorite: false,
      isWatchLater: false,
      isWatched: false,
      isHover: false,
    };
  },
  methods: {
    switchIt(iconName) {
      switch (iconName) {
        case 'star':
          this.isFavorite = !this.isFavorite;
          break;
        case 'clock':
          this.isWatchLater = !this.isWatchLater;
          break;
        case 'watched':
          this.isWatched = !this.isWatched;
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
:matches(.icons__link-star-active, .icons__link-watched-active, .icons__link-clock-active) {
  &:hover {
    .close {
      display: block;
    }
    .star,
    .clock,
    .watched {
      display: none;
    }
  }
}

.close {
  display: none;
  color: black;
  height: 20px;
}

.icons {
  position: absolute;
  z-index: 100;
  display: flex;

  width: 100%;

  &__link {
    position: relative;
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    color: #fff;
    @mixin center;
    height: 30px;
    width: 30px;
    &-star-active {
      background-color: #ffc000;
      border: 2px solid transparent;
    }
    &-clock-active {
      background-color: #24d877;
      border: 2px solid transparent;
    }
    &-watched-active {
      background-color: #24b2d8;
      border: 2px solid transparent;
    }
    /* Popup */
    /* Треугольник */
    &:hover::after {
      content: '';
      z-index: 998;
      position: absolute; /* Абсолютное позиционирование */
      bottom: -17px;
      border: 10px solid transparent; /* Прозрачные границы */
      border-bottom: 10px solid #fff;
    }
    /* Контейнер */
    &:hover::before {
      content: '';
      color: #000;
      font-size: 12px;
      margin-top: 1px;
      bottom: -35px;
      background-color: #fff;
      position: absolute;
      display: block;
      padding: 6px;
      z-index: 999;
      box-sizing: border-box;
      border-radius: 5px;
    }
    &-star {
      &:hover::before {
        content: 'Избранное';
      }
    }
    &-clock {
      &:hover::before {
        width: 110px;
        content: 'Смотреть позже';
      }
    }
    &-watched {
      &:hover::before {
        content: 'Просмотренно';
      }
    }
    /* End popup */
    &:hover {
      background-color: #fff;
      .star,
      .clock,
      .watched {
        color: #000;
      }
    }

    .star,
    .clock,
    .watched {
      position: relative;
      background-color: transparent;
    }
    .star {
      width: 15px;
    }
    .clock {
      width: 17px;
    }
    .watched {
      width: 22px;
    }
  }
}
</style>

