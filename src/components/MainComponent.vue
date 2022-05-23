<template>
  <div class="main_wrapper"> 
    <div class="default_cards"
        v-if="!this.resultQueryMovie.length > 0 && !this.resultQueryTv.length > 0">
      <h3>Titoli della settimana</h3>
      <CardComponent 
        :itemsListArray="this.defaultQuery"
        :itemsType="'film'"/>
    </div>

    <div v-else>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a @click="$emit('resetQuerys', '' )" href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Risultati della ricerca</li>
        </ol>
      </nav>
      
      <h2>Risultati della ricerca</h2>
      <h4>Film</h4>
      <CardComponent 
        :itemsListArray="this.resultQueryMovie"
        :itemsType="'film'"/>
      <h4>Serie TV</h4>
      <CardComponent 
        :itemsListArray="this.resultQueryTv"
        :itemsType="'tv'"/>
    </div>

  </div>
</template>

<script>
import CardComponent from './SecondaryComponent/CardComponent.vue'
export default {
    name: "MainComponent",
    props:{
      resultQueryMovie: Array,
      resultQueryTv: Array,
      defaultQuery: Array
    },
    data() {
      return {

      }
    },
    methods:{
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped>

@import '../assets/style/general';
@import '../assets/style/mixins';
@import '../assets/style/utils';
@import '../assets/style/vars';


.main_wrapper{
  @include flex-start();
  background-color: $primary-color;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  color: white;
  padding: 30px;
}


</style>