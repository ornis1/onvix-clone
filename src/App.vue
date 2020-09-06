 <template>
  <div id="app">
    <TheHeader v-if="isLogged"/>
    <router-view></router-view>
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
<style lang='stylus'>
@import './assets/styles/_normalize.styl';
@import 'https://use.typekit.net/tem7siq.css';
@import './assets/styles/_mixins.styl';
@import './assets/styles/_colors.styl';
@import './assets/styles/_customGlobal.styl';
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
