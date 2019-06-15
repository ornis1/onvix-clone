<template>
  <div class="wrapper">
    <form class="login-form">
      <div class="login-form-header">
        <h1>Вход для членов клуба</h1>
      </div>
      <img class="login-form-img" alt :src="randomScreenshot" srcset>
      <div class="login-form-body">
        <input
          v-model="email"
          type="text"
          class="email input input--grey btn"
          placeholder="Ваша почта"
          autocomplete="email"
        >
        <input
          v-model="password"
          type="password"
          class="password input input--grey btn"
          placeholder="Пароль"
          autocomplete="password"
        >
        <div class="group">
          <label for="ch">
            <input type="checkbox" id="ch" v-model="checked">
            <span>Регистрация</span>
          </label>
          <a href="#">Забыл пароль?</a>
        </div>
        <button
          type="submit"
          v-if="!checked"
          :options="{height: '46px', fontSize: '18px'}"
          @click.prevent="signIn()"
          class="btn gradient"
        >Войти на сайт</button>
        <button
          type="submit"
          v-if="checked"
          :options="{height: '46px', fontSize: '18px'}"
          @click.prevent="signUp()"
          class="btn gradient"
        >Зарегестрироваться</button>
      </div>
    </form>
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
      checked: false,
      email: 'kappa@gmail.com',
      password: '123123',
      user: null,
    };
  },
  computed: {
    error() {
      return this.$store.state.common.error;
    },
    randomScreenshot() {
      return `../../static/screenshots/${Math.floor(Math.random() * 10) +
        1}.jpg`;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    },
    checkEmail(email) {
      const r = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
      if (!r) {
        this.$store.dispatch('setError', 'Уверены что email введен верно?');
        return false;
      }
      this.$store.dispatch('clearError');
      return true;
    },
    signUp() {
      const check = this.checkEmail(this.email);
      if (check) {
        const user = { email: this.email, password: this.password };
        this.$store.dispatch('registerUser', user).then(() => {
          this.$router.push('/');
        });
      }
    },
    signIn() {
      const check = this.checkEmail(this.email);

      if (check) {
        const user = { email: this.email, password: this.password };
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
  width: 600px;
  padding-bottom: 20px;
  /* height: 550px; */
  background-color: #fff;
  display: flex;
  justify-content: center;
  background-color: #1e1e1e;
  & .login-form {
    box-sizing: border-box;
    background-color: #1e1e1e;
    padding: 30px 60px 0;
    &-img {
      border-radius: 5px;
      margin-top: 20px;
    }
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
      &-error {
        font-size: 14px;
        margin: 10px auto 0;
        opacity: 0.8;
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
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}
.input {
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
