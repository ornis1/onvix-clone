<template>
  <div class="watched">
    <span>Просмотрено</span>
  </div>
</template>

<script>
export default {
  name: 'MovieCardWatched',
};
</script>

<style lang="stylus" >
.watched {
  position: absolute;
  width: 101%;
  height: 101%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;

  border-radius: none;
  background: RGBA(23, 23, 23, 0.6);
  z-index: 1;
  & span {
    color: RGBA(23, 255, 255, 1);
    border: 1px solid RGBA(23, 255, 255, 1);
    transform: rotate(-30deg);
    line-height: 2;
    padding: 0 11px;
    z-index: 98;
  }
}
</style>
