<template>
  <div class="slider-item-img-footer">
    Кинопоиск: {{Math.round(rating*10)/10}}
    <span class="info">/ {{year}}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    year: Number,
    rating: Number
  }
};
</script>

<style lang="postcss" scoped>
.slider-item-img-footer {
  display: flex;
  width: 100%;
  box-sizing: border-box;

  position: absolute;
  z-index: 3;
  align-items: flex-end;
  bottom: 25%;
  padding-bottom: 10px;
  justify-content: center;

  font-size: 11px;
  color: white;
  visibility: hidden;
  & .info {
    color: #9ed8e8;
  }
}
</style>
