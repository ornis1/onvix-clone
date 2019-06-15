 <template>
  <div id="app">
    <TheHeader v-if="isLogged"/>
    <!-- <router-link :to="{name:'movie', params: {id:30}}">MovieDescription</router-link> -->
    <!-- <router-link to="/">App</router-link> -->
    <!-- <router-link :to="{name: 'result', params: {id:28}}">genre</router-link> -->
    <router-view></router-view>
    <!-- <TheFooter/> -->
  </div>
</template>

<script>
import TheHeader from 'TheHeader/TheHeader';
import Slider from 'Slider/Slider';
import TheFooter from 'TheFooter';

export default {
  components: { TheHeader, Slider, TheFooter },
  beforeMount() {
    if (this.$route.path !== '/login') {
      this.$store.dispatch('loggedUser');
    }
  },
  computed: {
    isLogged() {
      const user = this.$store.getters.user;
      return user !== null;
    },
  },
};
</script>
<style lang='postcss'>
@import url('./assets/styles/_normalize.css');
@import url('https://use.typekit.net/tem7siq.css');
@import url('./assets/styles/_mixins.css');
@import url('./assets/styles/_colors.css');
@import url('./assets/styles/_customGlobal.css');
body {
  background-color: $main;
}
#app {
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 100px;
}
</style>
