<template>
  <div class="flex-container">
    <div class="media">
      <div class="image">
        <img v-bind:src="imgLink" alt>
        <div class="icons">
          <a href="#">
            <icon-star class="star"/>
          </a>
          <a href="#">
            <icon-clock class="clock"/>
          </a>
          <a href="#">
            <icon-watched class="watched"/>
          </a>
        </div>
      </div>
      <!-- /.image -->
      <button class="btn btn-gradient">
        <a href="#">Смотреть</a>
      </button>
      <!-- /.btn btn-gradient -->
      <button class="btn btn-trailer">
        <a href="#">Трейлер</a>
      </button>
      <!-- /.btn btn-trailer -->
    </div>
    <!-- /.media -->
    <div class="content">
      <div class="title">{{movie.title_ru}}</div>
      <!-- /.title -->

      <div class="subtitle">
        <h3>{{movie.title_en}}</h3>
      </div>
      <!-- /.subtitle -->

      <div class="caption">
        <p>
          Режиссер:
          <a href="#">Жан-Марк Валле</a>
        </p>
        <p>2015 США драма</p>
        <p>
          <a href="#">Кинопоиск</a>
          : {{Math.floor(movie.rating_kinopoisk*10)/10}} &nbsp;(47 631)&nbsp;
          <a
            href="#"
          >IMDb</a>
          : {{movie.rating_imdb}}&nbsp; (76 140)
          <span
            v-if="movie.rating_tomatoes"
          >Rotten Tomatoes: {{movie.rating_tomatoes}}%</span>
        </p>
      </div>
      <!-- /.caption -->
      <tabs>
        <tab name="Описание" :selected="true">
          <ul>
            <li>{{movie.description}}</li>
          </ul>
        </tab>
        <tab name="Актеры">
          <ul>
            <li>{{movie.description}}</li>
          </ul>
        </tab>
        <tab name="Озвучки">
          <ul>
            <li>{{movie.description}}</li>
          </ul>
        </tab>
        <tab v-if="movie.type !== 'movie'" name="Серии">
          <ul>
            <li>{{movie.description}}</li>
          </ul>
        </tab>
        <tab name="Вам понравится">
          <ul>
            <li>{{movie.description}}</li>
          </ul>
        </tab>
      </tabs>
    </div>
    <!-- /.content -->
  </div>
</template>








<script>
// import Vue from "vue";
<<<<<<< HEAD
import data from '../../assets/movies.json';
/* Import Icons */
import IconWatched from '../icons/IconWatched';
import IconStar from '../icons/IconStarSolid';
import IconClock from '../icons/IconClockSolid';
/*  */
import Tab from './Tab';
import Tabs from './Tabs';

export default {
  name: 'MovieDescription',
  components: { Tab, Tabs, IconWatched, IconStar, IconClock },
  data() {
    return {
      endpoint: 'https://prisonbreak.site/',
      movie: {},
=======
import data from "../../assets/movies.json";
/* Import Icons */
import IconWatched from "../icons/IconWatched";
import IconStar from "../icons/IconStarSolid";
import IconClock from "../icons/IconClockSolid";
/*  */
import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";

export default {
  name: "MovieDescription",
  components: { Tab, Tabs, IconWatched, IconStar, IconClock },
  data() {
    return {
      endpoint: "https://prisonbreak.site/",
      movie: {}
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
    };
  },
  created() {
    this.movie = data.materials[2];
  },

  computed: {
    imgLink() {
      return this.endpoint + this.movie.poster.medium;
<<<<<<< HEAD
    },
  },
=======
    }
  }
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
};
</script>


<style lang="postcss" scoped>
.b {
  display: none;
}

.flex-container {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  position: relative;
}
.media {
  width: 231px;
  height: 600px;
  position: absolute;
  .image {
    height: 335px;
    width: 100%;
    margin-bottom: 40px;
    position: relative;
    @mixin center;
    &::before {
      position: absolute;
      z-index: 1;
<<<<<<< HEAD
      content: '';
=======
      content: "";
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.4) 90%
      );
    }
    img {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .icons {
      position: absolute;
      bottom: 0;
      z-index: 100;
      margin-bottom: 15px;

      width: 70%;

      display: flex;
      justify-content: space-around;
      & a {
        /* background-color: rgba(255, 255, 255, 0.2); */
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        color: #fff;
        @mixin center;
        height: 30px;
        width: 30px;
        &:hover {
          background-color: #fff;
          .star,
          .clock,
          .watched {
            color: #000;
            background-color: transparent;
          }
        }
        .star,
        .clock,
        .watched {
          background-color: transparent;
        }
        .star {
          width: 15px;
          height: 15px;
        }
        .clock {
          height: 17px;
          width: 17px;
        }
        .watched {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
  .btn {
    height: 47px;
    width: 100%;
    margin-bottom: 20px;

    border-radius: 5px;
    cursor: pointer;

    border: none;
    font-size: 18px;
    @mixin center;
  }
  .btn-gradient a {
    color: white;
  }
  .btn-trailer {
    background-color: #fff;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }
}
.content {
  width: 680px;
  /*  */
  height: 700px;
  /*  */
  color: #aaa;

  font-size: 14px;
  line-height: 2;
  margin-left: auto;
  & .title {
    font-size: 24px;
    color: #fff;
  }
  & .subtitle {
    margin-bottom: 28px;
  }
  & .caption {
    margin-bottom: 30px;
  }
}
</style>
