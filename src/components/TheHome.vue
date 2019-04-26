<template>
  <div class="main">
    <Slider :title="'Смотрю сейчас'" :cardSize="'poster'"/>
    <Slider :title="'Популярные'" :cardSize="'big_poster'"/>
    <Slider :title="'Новые фильмы'" :cardSize="'poster'"/>
  </div>
</template>

<script>
import Slider from 'Slider/Slider';

export default {
  name: 'Main',
  components: {
    Slider,
  },
};
</script>

<style lang="postcss" scoped>
.main {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
