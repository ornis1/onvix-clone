<template>
  <div class="top-icons">
    <a href class="top-icons--list-add"></a>
    <a href class="top-icons--delete"></a>
  </div>
</template>
<script>
export default {
  name: "topIcons"
};
</script>
<style lang="postcss" scoped>
.top-icons {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  z-index: 5;
  opacity: 0;
  visibility: hidden;
}

.top-icons--list-add {
  margin-right: 4px;
  width: 15px;
  height: 15px;
  opacity: 0.5;
  background-image: url("../../assets/iconfinder_menu-alt_134216.png");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.1s;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
}
.top-icons--delete {
  display: flex;
  height: 12px;
  width: 12px;
  box-sizing: border-box;

  border: none;
  background: transparent;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  cursor: pointer;

  opacity: 0.4;
  transition: 0.1s;
  &:hover {
    transform: scale(1.1);
    color: white;
    opacity: 1;
  }
  &::after {
    content: "";
    background-color: #000;
    position: absolute;
    margin: 0 auto;
    height: 2px;
    width: 12px;
    transform: rotate(45deg);
  }
  &::before {
    content: "";
    background-color: #000;
    position: absolute;
    margin: 0 auto;
    height: 12px;
    width: 2px;
    transform: rotate(45deg);
  }
}
.top-icons:hover .top-icons {
  opacity: 0;
  visibility: hidden;
}
</style>

