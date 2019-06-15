<template>
  <div class="slider-item-img-footer">
    IMDb: {{rating}} &nbsp;&nbsp;
    <span class="info">/&nbsp;{{year}}</span>
  </div>
</template>

<script>
export default {
  name: 'MovieCardFooter',
  props: {
    year: Number,
    rating: String,
  },
};
</script>

<style lang="postcss" >
.slider-item-img-footer {
  display: flex;
  width: 100%;
  box-sizing: border-box;

  position: absolute;
  z-index: 3;
  align-items: flex-end;
  bottom: 0;
  padding-bottom: 10px;
  justify-content: center;

  font-size: 11px;
  color: white;
  color: #fff;
  visibility: hidden;
}
</style>
