<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
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
      }
    }
  },
  mounted(){
      this.getAPI();
    },
    methods:{
      getAPI(){
        axios.get(this.apiURL,{
          params: this.apiParameters
        })
        .then(r => {
          this.albumArray = r.data.response;
          console.log('Risposta API ---->',r.data);
        })
      }
    },
}


</script>



<style lang="scss">

</style>
