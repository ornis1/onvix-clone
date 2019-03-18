<template>
  <div class="wrapper">
    <div class="slider-item">
      <div class="--hover hover"></div>
      <div class="--watched" v-if="isWatched">
        <span>Просмотрено</span>
      </div>
      <div class="slider-item-img">
        <div v-show="!isWatched && movie.hdx" class="slider-item-hdx">HDX</div>
        <div class="--hover slider-item-img-footer">
          Кинопоиск: {{Math.round(movie.rating_kinopoisk*10)/10}}
          <span
            class="item-info"
          >/ {{movie.year}}</span>
        </div>
        <div class="--hover buttons">
          <div class="slider-item-btn btn-gradient">
            <a href>Смотреть</a>
          </div>
          <div class="slider-item-btn">
            <a href>Описание</a>
          </div>
        </div>
        <img v-bind:src="this.endpoint+movie.poster.small">
      </div>
      <div class="slider-item-title">{{movie.title_ru}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieCardSmall",
  data() {
    return {
      endpoint: "https://prisonbreak.site",
      watched: [164651, 164620, 164775, 164429, 164669],
      isWatched: false
    };
  },
  props: { small: Boolean, large: Boolean, movie: Object },
  created() {
    const watched = this.watched;
    this.isWatched = watched.includes(this.movie.id) ? true : false;
  }
};
</script>

<style lang="postcss" scoped>
$bg: #171717;
.buttons {
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
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: $bg;
}
.wrapper {
  margin: 10px;
  /* background-color: #fff; */
  box-sizing: border-box;
  width: 183px;
  height: 346px;
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-item {
  width: 183px;
  height: 343px;
  display: block;
  position: relative;

  box-sizing: border-box;
  transform: scale(0.9);
  transition: 0.25s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1);
  }
  &-hdx {
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 46px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-style: uppercase;
  }
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
    &:hover {
      opacity: 1;
      background-color: #fff;
      & a {
        color: black;
        text-decoration: none;
      }
    }

    & a {
      color: white;
      text-decoration: none;
    }
  }

  &-img {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    position: relative;
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #3b3b3b; */
    &-footer {
      display: flex;
      justify-content: center;
      width: 100%;
      bottom: 0;
      margin-bottom: 8px;
      color: white;
      font-size: 11px;
      position: absolute;
      padding-top: 100%;
      z-index: 1;
    }
    & img {
      position: absolute;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100%;
    }
  }
  &-title {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 25%;
    bottom: 0;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 10px;
    color: #8c8c8c;
    text-overflow: ellipsis;
    backface-visibility: hidden;
    &:hover {
      color: #fff;
    }
  }
}
.hover {
  position: absolute;
  display: block;
  height: 75%;
  width: 100%;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(23, 23, 23, 0.5) 0%,
    #24b2d8 100%
  );
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #3b3b3b; */
}
.btn-gradient {
  background-image: linear-gradient(45deg, #2476d8, #24b2d8);
  border: none;
  outline: none;
  top: 0;
  opacity: 0.9;
  font-size: 14px;
  &:hover {
    opacity: 1;
    & a {
      color: white;
      text-decoration: none;
    }
  }
}
.item-info {
  color: #9ed8e8;
}
.--hover {
  opacity: 0;
}
.--watched {
  position: absolute;
  width: 101%;
  height: 76%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;

  border-radius: none;
  background: RGBA(23, 23, 23, 0.6);
  z-index: 99;
  & span {
    color: RGBA(23, 255, 255, 1);
    border: 1px solid RGBA(23, 255, 255, 1);
    transform: rotate(-30deg);
    line-height: 2;
    padding: 0 11px;
    z-index: 98;
  }
}
/* Стили при наведение */
:matches(.slider-item:hover) .--hover {
  opacity: 1;
}
:matches(.slider-item:hover) .slider-item-hdx {
  background: #ffc000;
  color: #151515;
  box-shadow: none;
  text-shadow: none;
}
:matches(.slider-item:hover) .--watched {
  display: none;
}
</style>
