<template>
  <div class="dropdown">
    <div class="user_info">
      <img :src="user.photoUrl" alt="=)" class="user_info-avatar">
      <div class="user_info-login">{{user.name}}</div>
      <div class="user_info-email">{{user.email}}</div>
    </div>

    <div class="dropdown-subtitle">Осталось 55 дней</div>
    <div class="dropdown-progressbar">
      <div class="dropdown-progressbar--bar"></div>
    </div>

    <a href class="dropdown__link">X Оплата доступа</a>
    <a href class="dropdown__link dropdown__link--blue">X Пригласи друга</a>
    <div href class="dropdown--hr"></div>
    <a href class="dropdown__link">X Смотрю сейчас</a>

    <router-link
      :to="{
        name: 'collections',
      params: {category:'watch_later',title: `Смотреть позже`}}"
      class="dropdown__link"
    >Смотреть позже&nbsp;</router-link>

    <router-link
      :to="{
        name: 'collections',
        params: {category:'favorite',title: `Избранное`}}"
      class="dropdown__link"
    >Избранное&nbsp;</router-link>

    <router-link
      :to="{
        name: 'collections',
      params: {category:'watched',title: `Просмотренное`}}"
      class="dropdown__link"
    >Просмотренное&nbsp;</router-link>
    <a href class="dropdown__link">X Подписки</a>
    <div href class="dropdown--hr"></div>
    <a href class="dropdown__link">X Подключить устройство</a>
    <a href="/profile" class="dropdown__link">Настройки</a>
    <a href class="dropdown__link" @click.prevent="signOut">Выход</a>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderDropdownProfile',
  computed: {
    user() {
      const user = this.$store.getters.user;
      if (user !== null) return user;
    },
  },
  methods: {
    push(obj) {
      // console.log(this.$router.push());

      this.$router.push(obj);
    },
    signOut() {
      this.$store.dispatch('signOut');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="postcss" scoped>
.dropdown {
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 66px;
  width: 264px;
  padding-bottom: 14px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  &-subtitle {
    font-size: 12px;
    color: #797979;
    margin: 16px 23px 8px;
  }
  &-progressbar {
    height: 5px;
    background-color: #e9e9e9;
    margin: 0 23px 6px;

    border-radius: 10px;
    &--bar {
      /* Ширина показывает заполнение прогресс бара */
      width: 55%;
      height: 100%;
      background-image: linear-gradient(to right, #2476d8 0%, #24b2d8 100%);
      background-repeat: repeat-x;
    }
  }
  &--hr {
    margin: 15px 0 7px;
    height: 1px;
    background: RGBA(32, 32, 32, 0.1);
  }
  &__link {
    padding: 12px 23px 5px;
    color: #171717;
    font-size: 14px;
    &:hover {
      color: #1a94b5;
    }
    &--blue {
      color: #2f7cda;
    }
  }
  .user_info {
    padding: 15px;
    position: relative;
    border-bottom: 1px solid RGBA(32, 32, 32, 0.1);
    &-avatar {
      position: absolute;

      height: 33px;
      width: 33px;
      border-radius: 50%;
    }
    &-login {
      padding-left: 50px;
      color: #171717;
      font-size: 16px;

      margin: 0 0 5px 0;
    }
    &-email {
      padding-left: 50px;
      font-size: 12px;
      color: #bcbcbc;
    }
  }
}
</style>
