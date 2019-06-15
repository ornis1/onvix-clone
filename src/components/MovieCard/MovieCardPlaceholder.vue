<template>
  <div :class="[cardSize, 'placeholder']">
    <IconWatched v-if="cardSize==='poster'"/>
    <!-- <img v-if="cardSize ==='poster'" src="../../assets/img/eye.png" alt srcset> -->
  </div>
</template>
<script>
import IconWatched from '../icons/IconWatchRegular';

export default {
  name: 'MovieCardPlaceholder',
  components: { IconWatched },
  props: { cardSize: { type: String, required: true, default: 'poster' } },
};
</script>

<style lang="postcss" scoped>
.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131313;

  margin-left: 10px;
  margin-top: 15px;
  transform: scale(0.9);
  /* top: 0; */
  /* left: 0; */
  /* position: absolute; */

  border-radius: 3px;
  & svg {
    color: #3d3d3d;
    width: 50px;
    height: 50px;
  }
}
.poster {
  width: 183px;
  height: calc(346px * 0.7);
  border: 1px dashed #3d3d3d;
}
.big_poster {
  width: 365px;
  height: 246px;
}
</style>
