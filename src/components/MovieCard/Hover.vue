<template>
  <div class="hover">
    <div class="hover-buttons">
      <div class="btn-gradient hover-btn">
        <a href>Смотреть</a>
      </div>
      <div class="btn-description hover-btn">
        <a href>Описание</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hover"
};
</script>

<style lang="postcss" scoped>
.hover {
  opacity: 0;
  position: absolute;
  display: flex;
  height: 75%;
  width: 100%;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(23, 23, 23, 0.5) 0%,
    #24b2d8 100%
  );
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  &-btn {
    z-index: 1;
    font-size: 14px;
    position: absolute;
    float: left;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 146px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 3px;
    margin: 50px 0;
    bottom: 0;
    opacity: 0.9;
    transition: 0.2s ease-out;
    cursor: pointer;
    & a {
      color: white;
      text-decoration: none;
    }
  }
}
.hover-buttons {
  z-index: 1000;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: auto;
  text-align: center;
  font-size: 14px;
}
.btn-gradient {
  cursor: pointer;
  z-index: inherit;
  border: none;
  &:hover {
    color: white;
  }
}
.btn-description {
  cursor: pointer;

  z-index: inherit;
  &:hover {
    opacity: 1;
    background-color: #fff;
    & a {
      color: black;
    }
  }
}
</style>
