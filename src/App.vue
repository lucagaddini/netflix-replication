<template>
  <div id="app">
    <HeaderComponent @valueToSearch="getQueryValue"/>
    <HeroComponent :trandingTitlesForHero="trandingTitlesArray"/>
    <MainComponent :resultQuery="responseMovieArray"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from 'axios';
import HeroComponent from './components/HeroComponent.vue';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    MainComponent,
    HeroComponent
},

  data(){
    return{
      apiMovieURL:'https://api.themoviedb.org/3/search/movie/',
      apiMovieParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47',
        language: 'it-IT',
        query: 'harry potter'
      },

      apiTrendingURL:'https://api.themoviedb.org/3/trending/movie/day',
      apiTrandingParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47'
      },

      responseMovieArray: [],
      trandingTitlesArray: []
    }
  },

  mounted(){
    this.callTrendingAPI()
  },

  methods:{
    callMovieAPI(){
      axios.get(this.apiMovieURL,{
        params: this.apiMovieParameters
      })
      .then(r => {
        this.responseMovieArray = r.data.results;
        console.log('Risposta API Movie---->',r.data.results);
      })
    },

    callTrendingAPI(){
      axios.get(this.apiTrendingURL,{
        params: this.apiTrandingParameters
      })
      .then(r => {
        this.trandingTitlesArray = r.data.results;
        console.log('Risposta API Trending---->',r.data.results);
      })
    },
    getQueryValue(value){
      console.log('emit da HeaderComponent ---->',value);
      this.apiMovieParameters.query = value;

      this.callMovieAPI();
    }
  }
}

</script>


<style lang="scss">

@import './assets/style/general';
@import './assets/style/mixins';
@import './assets/style/utils';
@import './assets/style/vars';

@font-face {
  font-family: "Netflix Sans";
  src: url('./assets/fonts/netflix-sans/NetflixSans-Regular.otf');
  src: url('./assets/fonts/netflix-sans/NetflixSans-Bold.otf');
  src: url('./assets/fonts/netflix-sans/NetflixSans-Light.otf');
  src: url('./assets/fonts/netflix-sans/NetflixSans-Medium.otf');
}

</style>
