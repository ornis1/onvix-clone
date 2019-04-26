<template>
  <div class="top-icons">
    <div class="top-icons--backdark"></div>
    <IconMenu class="top-icons__menu"/>
    <!-- <IconClose class="top-icons__close"/> -->
    <ActiveIcons class="top-icons__active-icons"/>
  </div>
</template>
<script>
import ActiveIcons from 'icons/ActiveIcons';
import IconClose from 'icons/IconClose';
import IconMenu from 'icons/IconMenu';

export default {
  components: { ActiveIcons, IconClose, IconMenu },
  name: 'MovieCardTopIcons',
};
</script>
<style lang="postcss" >
.top-icons__menu:hover {
  color: white;
}
.top-icons {
  position: absolute;

  /* top: 0; */
  right: 0;
  /* padding-top: 10px; */
  /* padding-right: 10px; */
  /* width: 100%; */
  width: 30px;
  height: 30px;
  box-sizing: border-box;

  opacity: 0;
  visibility: hidden;

  z-index: 500;
  display: flex;
  /* ДЕРЬМО Не рАбОТАЕТ КАК НУЖНО!!! */
  /* ДЕРЬМО Не рАбОТАЕТ КАК НУЖНО!!! */
  /* ДЕРЬМО Не рАбОТАЕТ КАК НУЖНО!!! */
  &--backdark {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.89);
    /* background-color: #fff; */
    $h: 200%;
    height: $h;
    /* top: $h; */
    display: none;

    z-index: 5;
    /* ДЕРЬМО Не рАбОТАЕТ КАК НУЖНО!!! */
    /* ДЕРЬМО Не рАбОТАЕТ КАК НУЖНО!!! */
    /* ДЕРЬМО Не рАбОТАЕТ КАК НУЖНО!!! */
    /* ДЕРЬМО Не рАбОТАЕТ КАК НУЖНО!!! */
  }
  &:hover {
    width: 100%;
    height: 37.5%;
    /* background-color: rgba(0, 0, 0, 0.81); */
    .top-icons__menu {
      color: white;
    }
    .top-icons__active-icons {
      opacity: 1;
      visibility: visible;
    }
    .top-icons--backdark {
      z-index: 0;
      display: block;
    }
  }
  &__menu {
    z-index: 1000;
    transition: 0ms;
    display: flex;
    height: 20px;
    color: rgba(0, 0, 0, 0.34);
    /* color: white; */
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
  }
  &__active-icons {
    opacity: 0;
    visibility: hidden;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 55px 15px 0;
  }
}
</style>

