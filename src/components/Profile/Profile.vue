<template>
  <div class="profile">
    <h1>Мой профиль</h1>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'profile-tabs'"
      :tab-class="'profile-tabs__item'"
      :tab-active-class="'profile-tabs__item--active'"
      :line-class="'profile-tabs__active-line'"
      @onClick="handleClick"
    />

    <div class="tabs-content">
      <div v-if="currentTab === 'tab1'" class="tab1">
        <label class="label">
          Мое персональное зеркало:
          <a href="http://localhost:8080/">localhost:8080</a>
        </label>
        <hr>

        <label for class="label">Аватар:</label>
        <div class="avatar-form">
          <IconClose v-if="userIMG" @click.native="deletePhoto()" class="avatar-form__delete-btn"/>
          <img :src="userIMG" class="avatar-form__img">
          <base-button :color="'grey'" class="avatar-form__uploader">
            Изменить аватарку
            <input @change="changeAvatar" type="file">
          </base-button>
        </div>
        <hr>
        <label for class="label">Никнейм:</label>
        <input v-model="login" class="input--grey" type="text">
        <hr>
        <label for class="label">
          Интеграция
          <a href="#">Как это работает?</a>
        </label>
        <label for class="label">Почта:</label>
        <div class="flex">
          <input v-model="email" class="input--grey" type="text">
          <base-button :color="'grey'">Изменить</base-button>
        </div>
        <hr>
        <label for class="label">Пароль:</label>
        <div class="flex">
          <input class="input--grey" type="password">
          <base-button :color="'grey'">Изменить</base-button>
        </div>
        <hr>
        <fieldset>
          <legend class="label">Фильмы с назойливой вшитой рекламой [Узнать больше]</legend>

          <label class="custom-radio">
            <span>Скрывать из моей ленты до появления версии без рекламы</span>
            <input type="radio" checked="checked" name="ads">
            <span class="checkmark"></span>
          </label>
          <label class="custom-radio">
            Показывать, но предупреждать о такой рекламе
            <input type="radio" name="ads">
            <span class="checkmark"></span>
          </label>
          <label class="custom-radio">
            <span>Показывать и не предупреждать о рекламе</span>
            <input type="radio" name="ads">
            <span class="checkmark"></span>
          </label>
        </fieldset>
        <hr>

        <fieldset>
          <legend class="label">Приоритет видеопотока</legend>

          <label class="custom-radio">
            <span>HLS</span>
            <input type="radio" checked="checked" name="streaming_format">
            <span class="checkmark"></span>
          </label>
          <label class="custom-radio">
            mp4
            <input type="radio" name="streaming_format">
            <span class="checkmark"></span>
          </label>
        </fieldset>
        <hr>

        <fieldset>
          <legend class="label">Приоритет рейтинга</legend>

          <label class="custom-radio">
            Кинопоиск
            <input type="radio" checked="checked" name="raiting_switch">
            <span class="checkmark"></span>
          </label>
          <label class="custom-radio">
            IMDb
            <input type="radio" name="raiting_switch">
            <span class="checkmark"></span>
          </label>
        </fieldset>
        <hr>

        <label for class="label">Удаление просмотренного видео:</label>
        <hr>
        <div class="flex">
          <base-button class="button-lg" :color="'normal'">Отменить</base-button>
          <base-button
            @click.native="updateUserInfo"
            class="button-lg"
            :color="'gradient'"
          >Сохранить</base-button>
        </div>
      </div>

      <div v-if="currentTab === 'tab2'" class="tab1"></div>
    </div>
  </div>
</template>

<script>
import Tabs from 'vue-tabs-with-active-line';
import BaseButton from 'Buttons/BaseButton';
import IconClose from 'icons/IconClose';

export default {
  name: 'Profile',
  components: { Tabs, BaseButton, IconClose },
  data: () => ({
    tabs: [
      { title: 'Настройки', value: 'tab1' },
      { title: 'Оплата доступа', value: 'tab2' },
      { title: 'Истории платежей', value: 'tab3' },
      { title: 'Устройства', value: 'tab4' },
      { title: 'Сессии', value: 'tab5' },
    ],
    login: '',
    email: null,
    avatar: null,
    currentTab: 'tab1',
  }),
  beforeMount() {
    // this.setLogin();
  },
  computed: {
    userIMG() {
      const user = this.$store.getters.user;
      if (user !== null) return user.photoUrl;
    },
    setLogin() {
      const user = this.$store.getters.user;
      this.login = user === null ? '' : user.name;
    },
  },
  methods: {
    deletePhoto() {
      this.$store.dispatch('updatePhoto', null);
    },
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    changeAvatar(event) {
      const file = event.target.files[0];
      this.$store.dispatch('updatePhoto', file);
    },
    updateUserInfo() {
      const { login, email } = this.$data;
      console.log('TCL: updateUserInfo -> email', email);
      console.log('TCL: updateUserInfo -> login', login);
      this.$store.dispatch('updateProfile', { login, email });
    },
  },
};
</script>

<style lang="stylus" >
.flex {
  display: flex;
  justify-content: space-between;
}
.button-lg {
  /* width: 200px; */
  height: 47px;
  font-size: 18px;
  padding: 14px 22px 13px;
}
.profile {
  width: 1020px;
  margin: 0 auto;
  &-tabs {
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 35px;
    &__item {
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 16px;
      padding-bottom: 10px;
      cursor: pointer;
      transition: all 0.25s;

      &--active {
        color: #ffc000;
      }

      &:hover {
        color: #ffc000;
      }

      &:focus {
        outline: none;
        color: #ffc000;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &__active-line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #ffc000;
      transition: transform 0.4s ease, width 0.1s ease;
    }
  }

  .tabs-content {
    margin-top: 20px;
    font-size: 16px;
    color: #aaa;
    .avatar-form {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 36px;
      &__img {
        height: 128px;
        width: 128px;
        border-radius: 5px;
      }
      &__delete-btn {
        position: absolute;
        left: 100px;
        top: 0;
        width: 28px;
        height: 28px;
        border-radius: 5px;
        padding: 4px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.4);
        color: rgba(255, 255, 255, 0.2);

        cursor: pointer;
        :hover {
          color: rgba(255, 255, 255, 0.5);
        }
      }
      &__uploader {
        position: relative;
        input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
    .input--grey {
      /* width: 0%; */
      margin: 0;
      margin-right: 7%;
    }
    h1 {
      font-size: 24px;
      padding: 0 0 36px;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      border: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: 0;
      margin: 36px 0;
    }
    .label {
      display: block;
      font-size: 14px;
      line-height: 1;
      color: #6b6b6b;
      margin-bottom: 20px;
      a {
        color: #cfcfcf;
        border-bottom: 1px dotted #aaa;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
/* custom radio buttons */
/* The custom-radio */
.custom-radio {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  /* height: 30px; */
  padding: 2px 0 20px 30px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.custom-radio:hover input ~ .checkmark {
  border: 1px solid rgba(255, 255, 255, 1);
}

/* When the radio button is checked, add a blue background */
.custom-radio input:checked ~ .checkmark {
  background-color: #fff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.custom-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.custom-radio .checkmark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #171717;
}
</style>
