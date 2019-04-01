<template functional>
  <div class="slider-header-title">
    <a class="slider-header-title-link" href="#">
      <slot></slot>
    </a>
    <IconArrow class="slider-header-title-arrow"/>
  </div>
</template>

<script>
import IconArrow from '../icons/IconArrowUp';

export default {
  name: 'SliderTitle',
  components: { IconArrow },
};
</script>

<style lang="postcss" scoped>
@import url('../../styles/_mixins.css');

.slider-header-title {
  position: relative;
  display: flex;
  align-items: flex-end;
  color: white;
  padding-right: 30px;
  box-sizing: border-box;
  cursor: pointer;
  &-link {
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
  &-arrow {
    width: 15px;
    height: 15px;
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: rotate(90deg) translateX(-2px) translateY(-10px);
  }
  &:hover {
    color: #ffc000;
    .slider-header-title-arrow {
      transform: rotate(90deg) translateX(-2px) translateY(-20px);
    }
  }
}
/* color: #ffc000; */
</style>
