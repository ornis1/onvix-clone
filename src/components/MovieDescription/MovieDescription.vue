<template>
  <div class="flex-container">
    <div class="media">
      <div class="image">
        <img :src="$_ApiMixin_getImg(movie.poster_path)" alt>
        <ActiveIcons class="icons"/>
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
          <router-link
            :to="`/director/${producer.id}`"
            class="caption-producer"
            v-for="producer in producersNames"
            :key="producer.id"
          >
            {{producer.name}}&nbsp;
            <!-- <span v-for="producer in producers.inEnglish" :key="producer.id">{{producer.name}}</span> -->
            <!-- <span v-for="producer in producers.inRussian" :key="producer.id">{{producer.name}}</span> -->
          </router-link>
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
            to="/genre/28"
          >{{genre.name}} &nbsp;</router-link>
        </p>
        <p>
          <!-- <a href="#">Кинопоиск</a>
          : {{movie.rating}} &nbsp;(47 631)&nbsp;-->
          <a href="#">IMDb</a>
          : {{movie.vote_average}}&nbsp; ({{votes}})
        </p>
      </div>
      <!-- /.caption -->
      <Tabs :overview="movie.overview" :actors="{...cast}"/>
    </div>
    <!-- /.content -->
  </div>
</template>








<script>
/*eslint-disable */
import axios from 'axios';
// import data from '../../assets/movies.json';
/* Import Icons */
import ActiveIcons from 'icons/ActiveIcons';
import { ApiMixin } from 'Mixins/ApiMixin.js';
/*  */
import BaseButton from 'Buttons/BaseButton';
import Tabs from './MovieDescriptionTabs';
import RadialProgressBar from '../../../node_modules/vue-radial-progress/dist/vue-radial-progress.min.js';

export default {
  name: 'MovieDescription',
  mixins: [ApiMixin],
  components: {
    Tabs,

    ActiveIcons,
    BaseButton,
    RadialProgressBar,
  },
  data() {
    return {
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
    /* Получаем id фильма из параметров роута */
    const { id } = this.$route.params;

    /* Создаем строку запроса по id фильма с помощью метода из миксины */
    const request = this.$_ApiMixin_getMovie(id);

    /* Делаем запрос и результат сохраняем */
    axios.get(request).then(response => {
      this.movie = response.data;
    });

    /* Запрос для получения информации о составе фильма */
    axios
      .get(this.$_ApiMixin_getCast(id))
      .then(response => {
        // this.cast = { ...response.data.cast };
        this.cast = response.data.cast;

        this.crew = response.data.crew;
      })
      .then(() => {
        /* Получаем только режиссеров */
        this.crew.map(person => {
          if (person.job === 'Director') {
            this.producers.inEnglish.push({ name: person.name, id: person.id });
          }
        });
      })
      .then(() => {
        /* Так как в ответе приходят имена на английском
        Делаем запрос на каждого режиссера и получаем русскую версию имени если она есть*/

        this.producers.inEnglish.map(person => {
          axios(this.$_ApiMixin_getPerson(person.id)).then(response => {
            const names = response.data.also_known_as;
            const id = response.data.id;

            for (let i = 0; i < names.length; i++) {
              const name = names[i];
              /* Если первая буква имени А-Я , то это русское имя */
              const code = name.charCodeAt(0);
              if (code >= 1040 && code <= 1071) {
                this.producers.inRussian.push({ name, id });
              }
            }
          });
        });
      });
  },
  methods: {
    setVotes() {
      this.votes = this.movie.vote_count
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, ' ');
    },
  },
  watch: {
    cast() {
      console.log(typeof this.cast);
    },
    movie() {
      this.setVotes();
    },
  },
  computed: {
    producersNames() {
      const eng = this.producers.inEnglish;
      const rus = this.producers.inRussian;
      return rus.length ? rus : eng;
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
      content: '';
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
