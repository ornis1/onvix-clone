 <template>
  <div id="app">
    <router-link to="/Login">Login</router-link>
    <router-link to="/MovieDescription">MovieDescription</router-link>
    <router-link to="/">App</router-link>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import MainScreen from 'MainScreen';
import Header from 'Header/Header';
import Slider from 'Slider/Slider';
import Footer from 'Footer';

export default {
  components: { MainScreen, Header, Slider, Footer },
};
</script>
<style lang='postcss'>
@import url('./assets/styles/_normalize.css');
@import url('./assets/styles/_mixins.css');
@import url('./assets/styles/_colors.css');
body {
  background-color: $main;
}
html {
  height: 100vh;
}
#app {
  height: 100%;
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 100px;
}
</style>
