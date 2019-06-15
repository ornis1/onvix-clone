<template>
  <div class="icons">
    <active-icon :movie="this.movie" :movieCategory="'favorite'" class="icons__link-favorite">
      <IconStar class="favorite"/>
    </active-icon>

    <active-icon :movie="this.movie" :movieCategory="'watchLater'" class="icons__link-watch_later">
      <IconClock class="watch_later"/>
    </active-icon>

    <active-icon :movie="this.movie" :movieCategory="'watched'" class="icons__link-watched">
      <IconWatched class="watched"/>
    </active-icon>
  </div>
</template>

<script>
import IconWatched from 'icons/IconWatched';
import IconStar from 'icons/IconStarSolid';
import IconClock from 'icons/IconClockRegular';
import ActiveIcon from 'icons/ActiveIcon';

export default {
  name: 'ActiveIcons',
  components: {
    ActiveIcon,
    IconWatched,
    IconClock,
    IconStar,
  },
  props: {
    movie: { type: Object },
  },
};
</script>

<style lang="postcss" scoped>
.icons {
  position: absolute;
  z-index: 100;
  display: flex;

  width: 100%;

  &__link {
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
    &-favorite {
      &:hover::before {
        content: 'Избранное';
      }
    }
    &-watch_later {
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
      .favorite,
      .watch_later,
      .watched {
        color: #000;
      }
    }

    .favorite,
    .watch_later,
    .watched {
      position: relative;
      background-color: transparent;
    }
    .favorite {
      width: 14px;
    }
    .watch_later {
      width: 16px;
    }
    .watched {
      width: 20px;
    }
  }
}
</style>

