<template>
  <div :class="['btn', color]" :style="options">
    <a href="#">
      <slot></slot>
    </a>
  </div>
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
    options: {
      type: Object,
      default() {
        return {};
      },
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

  height: 32px;
  width: 100%;
  box-sizing: border-box;

  font-size: 14px;
  border-radius: 3px;

  opacity: 0.8;
  transition: 0.1s ease-out;
  cursor: pointer;

  & a {
    color: white;
    text-decoration: none;
  }
}
.gradient {
  background-image: linear-gradient(45deg, #2476d8, #24b2d8);
  z-index: inherit;
  &:hover {
    opacity: 1;
    color: white;
  }
}
.normal-outline {
  border: 1px solid white;
  z-index: inherit;
  &:hover {
    opacity: 1;
    background-color: #fff;
    & a {
      color: black;
    }
  }
}
.normal {
  /* border: 1px solid white; */
  background: #fff;
  z-index: inherit;
  & a {
    color: #000;
  }
  &:hover {
    opacity: 1;
    background-color: #fff;
    & a {
      color: #000;
    }
  }
}
</style>
