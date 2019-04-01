<template>
  <div class="hover">
    <div class="hover-buttons">
      <button-primary :options="{margin: '10px 0'}" color="gradient">
        <router-link to="/">Смотреть</router-link>
      </button-primary>
      <button-primary :options="{margin: '10px 0'}" color="normal">
        <router-link :to="linkPath">Описание</router-link>
      </button-primary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from 'Buttons/Button';

export default {
  name: 'Hover',
  components: { ButtonPrimary },
  props: {
    id: {
      type: [String, Number],
      requare: true,
    },
  },
  computed: {
    linkPath() {
      return '/';
    },
  },
};
</script>

<style lang="postcss" >
.hover {
  opacity: 0;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(23, 23, 23, 0.5) 0%,
    #24b2d8 100%
  );
  background-repeat: no-repeat;
  &-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
}
</style>
