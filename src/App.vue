<template>
  <div id="app">
    <HeaderComponent @valueToSearch="getQueryValue"/>
    <MainComponent :resultQuery="responseArray"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import axios from 'axios';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    MainComponent
  },

  data(){
    return{
      apiURL:'https://api.themoviedb.org/3/search/movie/',
      apiParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47',
        language: 'it-IT',
        query: 'harry potter'
      },
      responseArray: []
    }
  },

  mounted(){
  
  },

  methods:{
    callMovieAPI(){
      axios.get(this.apiURL,{
        params: this.apiParameters
      })
      .then(r => {
        this.responseArray = r.data.results;
        console.log('Risposta API ---->',r.data);
      })
    },
    getQueryValue(value){
      console.log('emit da HeaderComponent ---->',value);
      this.apiParameters.query = value;

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
