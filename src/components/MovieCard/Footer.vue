<template>
  <div class="slider-item-img-footer">
    Кинопоиск: {{Math.round(rating*10)/10}}&nbsp;&nbsp;
    <span class="info">/&nbsp;{{year}}</span>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'Footer',
  props: {
    year: Number,
    rating: Number,
  },
=======
  name: "Footer",
  props: {
    year: Number,
    rating: Number
  }
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
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
  visibility: hidden;
}
</style>
