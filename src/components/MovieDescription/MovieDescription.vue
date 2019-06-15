<template>
  <div class="flex-container">
    <div class="media">
      <div class="image">
        <div class="image--backdark" v-if="imgStatus"></div>
        <div class="image--placeholder" v-if="!imgStatus"></div>
        <img :src="imgUrl" @load="imgStatus=true" alt>
        <ActiveIcons :movie="this.movie" class="icons"/>
      </div>
      <!-- /.image -->
      <base-button color="gradient">Смотреть</base-button>
      <!-- /.btn btn-gradient -->
      <base-button color="normal">Трейлер</base-button>
      <!-- /.btn btn-trailer -->
    </div>
    <!-- /.media -->
    <div class="content">
      <radial-progress-bar
        class="progress-bar"
        :diameter="94"
        :completed-steps="movie.vote_average"
        :total-steps="10"
        :animateSpeed="10"
        :strokeWidth="2"
        :startColor="'#ffc000'"
        :stopColor="'#ffc000'"
        :innerStrokeColor="'rgba(255,255,255,.05)'"
      >
        <span class="progress-bar-vote">{{ movie.vote_average }}</span>
        <span class="progress-bar-rating">Рейтинг</span>
      </radial-progress-bar>
      <div class="title">
        <h1>{{movie.title}}</h1>
      </div>
      <!-- /.title -->

      <div class="subtitle">
        <h3>{{movie.original_title}}</h3>
      </div>
      <!-- /.subtitle -->

      <div class="caption">
        <p>
          Режиссер:
          <!-- <router-link
            :to="`/director/${producer.id}`"
            class="caption-producer"
            v-for="producer in producers.inEnglish"
            :key="producer.id"
          >{{producer.name}}&nbsp;</router-link>-->
          <router-link
            :to="{
              name: 'director',
            params: {id: producer.id,title: producer.name}}"
            class="caption-producer"
            v-for="producer in producers.inEnglish"
            :key="producer.id"
          >{{producer.name}}&nbsp;</router-link>
        </p>
        <p>
          <span>{{releaseDate}}</span>
          <span
            v-for="country in movie.production_countries"
            :key="country.name"
          >{{country.iso_3166_1}} &nbsp;</span>

          <router-link
            v-for="genre in movie.genres"
            :key="genre.id"
            :to="{name: 'genre', params: {id: genre.id, title: genre.name}}"
          >{{genre.name}} &nbsp;</router-link>
        </p>
        <p>
          <a href="#">IMDb</a>
          : {{movie.vote_average}}&nbsp; ({{this.movie.vote_count}})
        </p>
      </div>
      <!-- /.caption -->
      <Tabs :movie="movie" :actors="{...cast}"/>
    </div>
    <!-- /.content -->
  </div>
</template>


<script>
/*eslint-disable */
import axios from 'axios';
import ActiveIcons from 'icons/ActiveIcons';
import { ApiMixin } from 'Mixins/ApiMixin.js';
import BaseButton from 'Buttons/BaseButton';
import Tabs from './MovieDescriptionTabs';
import RadialProgressBar from '../../../node_modules/vue-radial-progress/dist/vue-radial-progress.min.js';

export default {
  name: 'MovieDescription',
  mixins: [ApiMixin],
  metaInfo: {
    titleTemplate() {
      return this.$route.params.title;
    },
  },
  components: {
    Tabs,
    ActiveIcons,
    BaseButton,
    RadialProgressBar,
  },
  data() {
    return {
      imgStatus: false,
      completedSteps: 7,
      totalSteps: 10,
      movie: {},
      cast: {},
      crew: {},
      producers: { inEnglish: [], inRussian: [] },
      votes: null,
    };
  },
  created() {
    // console.log(this.$route);
    this.getMovie();
    this.getCast();
  },
  methods: {
    getCast() {
      /* Запрос для получения информации о составе фильма */
      const { id } = this.$route.params;
      this.$_ApiMixin_getCast(id)
        .then((response) => {
          this.cast = response.cast;
          this.crew = response.crew;
        })
        .then(() => {
          /* Получаем только режиссеров */
          let result = this.crew.filter((person) => {
            return person.job === 'Director';
          });
          this.producers.inEnglish.push(...result);
        })
        .then(() => {
          /* Так как в ответе приходят имена на английском
          Делаем запрос на каждого режиссера и получаем русскую версию имени если она есть*/
          const ids = this.producers.inEnglish.map((name) => name.id);

          for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            let a = this.getRussianName(id);
            this.producers.inRussian.push(a);
          }
          /* додлелать эту хуню */
        });
    },
    getRussianName(id) {
      const result = {};

      this.$_ApiMixin_getPerson(id).then((response) => {
        const names = response.also_known_as;

        for (let i = 0; i < names.length; i++) {
          const name = names[i];

          if (this.isRussianWord(name)) {
            result.id = id;
            result.name = name;
          }
        }
      });
      return result;
    },
    isRussianWord(word) {
      const result = word
        .split(' ')
        .join('')
        .split('')
        .filter((letter) => {
          const code = letter.charCodeAt(0);
          return code >= 1040 && code <= 1103 ? true : false;
        });
      return result.length;
    },
    getMovie() {
      /* мне лень доделать нормально поэтому оставлю так. в объекте из роута только id жанров и я делаю запрос на весь фильм чтобы получить сразу названия жанров  */
      /* Получаем id фильма из параметров роута */
      const { id } = this.$route.params;

      /* Создаем строку запроса по id фильма с помощью метода из миксины */
      /* Делаем запрос и результат сохраняем */
      this.$_ApiMixin_getMovie(id).then((response) => {
        console.log('TCL: getMovie -> response', response);
        this.movie = this.$route.params.movie;
        Object.defineProperty(this.movie, 'genres', {
          value: response.genres,
          writable: true,
        });
      });
    },
  },
  watch: {
    '$route.params.id'() {
      this.movies = [];
      this.movies = [];
      this.getMovie();
      this.getCast();
    },
  },
  computed: {
    imgUrl() {
      if (!this.movie.poster_path) return;
      return this.$_ApiMixin_getImg(this.movie.poster_path);
    },
    releaseDate() {
      let date = this.movie.release_date;
      if (date) {
        return date.slice(0, 4);
      }
    },
  },
};
</script>


<style lang="postcss" scoped>
.--placeholder {
  display: inline-block;
  /* width: auto; */
  min-height: 10px;
  min-width: 100px;
  border-radius: 5px;
  background-color: #131313;
}
.b {
  display: none;
}
a {
  color: white;
}
.caption-producer {
  padding: 0 5px;
  position: relative;
  &:last-child {
    &::before {
      display: none;
    }
  }
  &::before {
    display: block;
    content: '';
    height: 5px;
    width: 5px;
    background-color: #fff;
    border-radius: 50%;
    right: -1px;
    top: 6px;
    opacity: 0.15;
    position: absolute;
  }
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
  position: fixed;
  .image {
    height: 335px;
    width: 100%;
    margin-bottom: 40px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    &--backdark {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.4) 90%
      );
    }
    &--placeholder {
      position: absolute;
      background-color: #131313;
      z-index: 1;
      width: 102%;
      height: 102%;
    }
    img {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .icons {
      width: 70%;
      bottom: 0;
      margin-bottom: 15px;

      justify-content: space-around;
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

    display: flex;
    justify-content: center;
    align-items: center;
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
  & a:hover {
    color: #ffc000;
  }
  & .progress-bar {
    /* position: relative; */
    position: absolute;
    right: 10px;
    top: 10px;
    &-vote {
      position: absolute;
      font-size: 30px;
      color: #fff;
      top: 10px;
    }
    &-rating {
      position: absolute;
      bottom: 15px;
      font-size: 12px;
    }
  }
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
