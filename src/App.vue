<template>
  <div id="app">
    <div v-if="isLoaded" class="">

      <HeaderComponent 
        @valueToSearch="getQueryValue"
        @resetQuerys="resetResultQuerys"/>
      <HeroComponent :trendingTitlesForHero="trendingTitlesArray"/>
      <MainComponent 
        :resultQueryMovie="responseMovieArray"
        :resultQueryTv="responseTvArray"
        :defaultQuery="trendingTitlesArray"
        @resetQuerys="resetResultQuerys"/>

    </div>
    
    <div class="" v-else>
      <LoadingComponent loaderName="LOADING ..."/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from 'axios';
import HeroComponent from './components/HeroComponent.vue';
import LoadingComponent from './components/SecondaryComponent/LoadingComponent.vue';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    MainComponent,
    HeroComponent,
    LoadingComponent
},

  data(){
    return{
      isLoaded: false,
      apiMovieURL:'https://api.themoviedb.org/3/search/movie/',
      apiMovieParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47',
        language: 'it-IT',
        query: ''
      },

      apiTvURL:'https://api.themoviedb.org/3/search/tv/',
      apiTvParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47',
        language: 'it-IT',
        query: ''
      },

      apiTrendingURL:'https://api.themoviedb.org/3/trending/movie/day',
      apiTrandingParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47'
      },

      responseMovieArray: [],
      responseTvArray: [],
      trendingTitlesArray: []

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
    callTvAPI(){
      axios.get(this.apiTvURL,{
        params: this.apiTvParameters
      })
      .then(r => {
        this.responseTvArray = r.data.results;
        console.log('Risposta API TV---->',r.data.results);
      })
    },

    callTrendingAPI(){
      axios.get(this.apiTrendingURL,{
        params: this.apiTrandingParameters
      })
      .then(r => {
        this.trendingTitlesArray = r.data.results;
        console.log('Risposta API Trending---->',r.data.results);
        setTimeout(() => {this.isLoaded = true}, 5000);
      })
    },

    getQueryValue(value){
      console.log('emit da HeaderComponent ---->',value);
      this.apiMovieParameters.query = value;
      this.callMovieAPI();

      this.apiTvParameters.query = value;
      this.callTvAPI();
    },

    resetResultQuerys(){
      this.responseMovieArray = [];
      this.responseTvArray = [];
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
