<template>
  <div class="wrapper">
    <div class="promo">
      <div class="promo-img"></div>
      <div class="promo-title">Регистрация:</div>
      <div class="promo-form">
        <input
          v-model="signUpEmail"
          type="text"
          class="email input btn"
          placeholder="Ваша почта"
          autocomplete="email"
        >
        <div class="login-form-body-error error">{{error}}</div>
        <input
          v-model="signUpPassword"
          type="password"
          class="password input btn"
          placeholder="Пароль"
          autocomplete="password"
        >
        <!-- <div v-show="isErrorR" class="promo-input-error error">Промо код не найден</div> -->
        <div @click="signUp()" class="promo-btn btn">Регистрация</div>
        <div @click="signOut()" class="promo-btn btn">Выйти</div>
      </div>
    </div>
    <form class="login-form">
      <div class="login-form-header">
        <h1>Вход для членов клуба</h1>
      </div>
      <div
        class="login-form-alert"
      >Если у вас проблемы с заходом на сайт через социальные аккаунты, то напишите нам в поддержку - support@onvix.tv</div>
      <div class="login-form-body">
        <input
          v-model="signInEmail"
          type="text"
          class="email input btn"
          placeholder="Ваша почта"
          autocomplete="email"
        >
        <!-- <div v-show="isErrorL" class="login-form-body-error error">Неверные Email или пароль.</div> -->
        <input
          v-model="signInPassword"
          type="password"
          class="password input btn"
          placeholder="Пароль"
          autocomplete="password"
        >
        <div class="group">
          <label for="ch">
            <input type="checkbox" id="ch">
            <span>Запомните меня</span>
          </label>
          <a href="#">Забыл пароль?</a>
        </div>
        <button
          :options="{height: '46px', fontSize: '18px'}"
          @click.prevent="signIn()"
          class="btn gradient"
        >Войти на сайт</button>
      </div>
    </form>
    <pre>{{this.$store.state.user}}</pre>
  </div>
</template>
<script>
import BaseButton from 'Buttons/BaseButton';
import firebase from 'firebase/app';
import { log } from 'util';

export default {
  name: 'Login',
  components: { BaseButton },
  data() {
    return {
      promoCode: '',
      signUpEmail: 'kappa@gmail.com',
      signUpPassword: '123123',

      signInEmail: 'kappa@gmail.com',
      signInPassword: '123123',
      user: null,
    };
  },
  created() {},
  computed: {
    error() {
      return this.$store.state.common.error;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    },
    checkEmail(email) {
      var r = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
      if (!r) {
        this.$store.dispatch('setError', 'Уверены что email введен верно?');
        return false;
      }
      this.$store.dispatch('clearError');
      return true;
    },
    signUp() {
      const check = this.checkEmail(this.signUpEmail);
      if (check) {
        const user = { email: this.signUpEmail, password: this.signUpPassword };
        this.$store.dispatch('registerUser', user).then(() => {
          // this.$router.push('/');
        });
      }
    },
    signIn() {
      const check = this.checkEmail(this.signInEmail);
      console.log(check);

      if (check) {
        const user = { email: this.signInEmail, password: this.signInPassword };
        this.$store.dispatch('loginUser', user).then(() => {
          console.log('ЗАЛОГИНЕЛСЯ');
          this.$router.push('/');
        });
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');

.wrapper {
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  box-sizing: border-box;
  width: 960px;
  height: 550px;
  background-color: #fff;
  display: flex;
  & .promo,
  .login-form {
    width: 480px;
  }
  & .promo {
    background-color: #1a1a1a;
    padding: 0 60px;
    &-form {
      display: flex;
      flex-direction: column;
    }
    &-btn {
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #171717;
      background-color: #fff;
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
    &-input {
      width: 359px;
      &-error {
        margin: 10px auto 0;
        font-size: 14px;
        opacity: 0.8;
      }
    }
    &-title {
      margin: 10px 0 0 0;
      text-align: center;
      color: white;
      font-size: 22px;
      font-weight: 300;
    }
    &-img {
      margin: 0 auto;
      margin-top: 150px;
      background-image: url('https://prisonbreak.site/assets/base/spites/icons-eb0c1c576e97876123af1dfd2ce97d7e93deef9be5d1754f544cfe508d6524ce.png');
      background-position: -15px -1517px;
      width: 142px;
      height: 101px;
    }
  }
  & .login-form {
    box-sizing: border-box;
    background-color: #1e1e1e;
    padding: 50px 60px 0;

    &-body {
      display: flex;
      flex-direction: column;
      position: relative;
      & .group {
        font-family: 'Roboto';
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        font-size: 16px;
        color: #fff;
        & a {
          &:hover {
            opacity: 1;
          }
          color: #fff;
          opacity: 0.9;
          text-decoration: none;
        }
        & label {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          & input {
            margin-right: 10px;
          }
        }
      }
      &-error {
        font-size: 14px;
        margin: 10px auto 0;
        opacity: 0.8;
      }
    }
    &-alert {
      position: relative;
      display: flex;
      align-items: center;
      text-align: center;
      line-height: 24px;
      font-size: 16px;
      background-color: #dfa940;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
      font-family: 'Lato', sans-serif;
      color: #fff;
      padding: 15px 20px 15px 70px;
      border-radius: 5px;
      margin: 15px 0;
      &::after {
        /* font */
        content: '!';
        color: #dfa940;
        font-size: 24px;
        /* display and pos */
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 19px;
        /* size */
        height: 36px;
        width: 36px;
        /* visual */
        border-radius: 50%;
        background-color: #fff;
      }
    }
    &-header {
      & h1 {
        text-align: center;
        font-weight: 300;
        color: #fff;
        font-size: 22px;
      }
    }
  }
}
.btn {
  cursor: pointer;

  margin: 0 auto;
  margin-top: 20px;
  width: 359px;
  height: 46px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}
.input {
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  height: 46px;
  background-color: #232323;
  padding: 0;
  bottom: 0;
  box-sizing: border-box;
  color: #aaa;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-size: 16px;
  padding: 5px 16px 6px;

  opacity: 1;
  &:focus {
    color: #8e8e8e;
    &::placeholder {
      opacity: 1;
      color: #aaa;
    }
    background-color: #fff;
  }
  &:hover {
    border: 1px solid #aaa;
    &::placeholder {
      color: #fff;
    }
  }
}
.error {
  color: #ff2727;
  border-color: #ff2727;
  &::placeholder {
    color: #ff2727;
  }
  &:hover {
    border-color: #ff2727;
  }
}
</style>
