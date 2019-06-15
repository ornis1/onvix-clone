<template>
  <div class="dropdown">
    <router-link to="/">
      <div class="dropdown-content">
        <img
          class="dropdown-content__img"
          src="https://im0-tub-ru.yandex.net/i?id=0e17ee7cebee5e48c869de4dd7a87783-l&n=13"
          alt
        >
        <div class="dropdown-content-info">
          <span class="dropdown--string">Игра престолов</span>
          <span class="dropdown--string dropdown--grey">5 сезон 5 серия</span>
          <span class="dropdown--string dropdown--grey">19 минута 13 секунда</span>
        </div>
      </div>
      <div class="dropdown-footer">
        <div class="dropdown-footer__button">
          <base-button color="gradient">Продолжить просмотр</base-button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import BaseButton from 'Buttons/BaseButton';

export default {
  name: 'TheHeaderReplayDropdown',
  components: { BaseButton },
};
</script>

<style lang="postcss" scoped>
.dropdown {
  position: absolute;
  right: 0;
  top: 66px;
  width: 260px;
  height: 155px;
  background-color: #fff;
  padding: 12px;
  box-sizing: border-box;
  &--string {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.7;
    color: #171717;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &--grey {
    font-weight: 400;
    color: #797979;
  }
  &-content {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding-bottom: 15px;
    &-info {
      padding-left: 20px;
    }
    &__img {
      width: 60px;
      height: 100%;
    }
  }
  &-footer {
    &__button {
      padding: 12px 2px;
    }
  }
}
</style>
