 <template>
  <div id="app">
    <TheHeader/>
    <router-link :to="{name: 'login'}">Login</router-link>
    <router-link :to="{name:'movie', params: {id:30}}">MovieDescription</router-link>
    <router-link to="/">App</router-link>
    <router-link :to="{name: 'result', params: {id:28}}">genre</router-link>

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
  created() {
    this.$store.dispatch('loggedUser');
  },
};
</script>
<style lang='postcss'>
@import url('./assets/styles/_normalize.css');
@import url('./assets/styles/_mixins.css');
@import url('./assets/styles/_colors.css');
/* @import url('./assets/styles/_customGlobal.css'); */
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
