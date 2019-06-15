<template>
  <button :class="['btn', '--disabled',color]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      required: true,
      default: 'normal',
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  /* height: 32px; */
  /* width: 100%; */
  box-sizing: border-box;

  /* font-size: 14px; */
  border-radius: 3px;

  opacity: 0.8;
  transition: 0.1s ease-out;
  cursor: pointer;
  border: none;
}
.gradient {
  background-image: linear-gradient(45deg, #2476d8, #24b2d8);
  z-index: inherit;
  color: white;
  &:hover {
    opacity: 1;
  }
}
.grey {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
  font-size: 18px;
  height: 47px;
  padding: 14px 22px 13px;
  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.25);
  }
}

.normal-outline {
  border: 1px solid white;
  z-index: inherit;
  color: white;
  &:hover {
    opacity: 1;
    background-color: #fff;
    color: black;
  }
}
.normal {
  /* border: 1px solid white; */
  background: #fff;
  z-index: inherit;
  color: #000;
  &:hover {
    opacity: 1;
    background-color: #fff;
    color: #000;
  }
}
</style>
