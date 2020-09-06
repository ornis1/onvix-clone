<template>
  <div class="slider-header-title">
    <router-link class="slider-header-title__link" :to="to">
      <slot></slot>
      <IconArrow class="slider-header-title__arrow"/>
    </router-link>
  </div>
</template>

<script>
import IconArrow from '../icons/IconArrowUp';

export default {
  name: 'SliderTitle',
  components: { IconArrow },
  props: { to: { type: Object, requared: true } },
};
</script>

<style lang="stylus" scoped>

.slider-header-title {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-right: 30px;
  box-sizing: border-box;
  cursor: pointer;
  color: white;
  &__link {
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
  &__arrow {
    height: 15px;
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: rotate(90deg) translateX(1px) translateY(0px);
  }
  &:hover {
    color: #ffc000;
    .slider-header-title__arrow {
      transform: rotate(90deg) translateX(1px) translateY(-8px);
    }
  }
}
</style>
