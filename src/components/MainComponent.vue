<template>
  <div class="main_wrapper"> 
    <h3 v-if="!this.resultQueryMovie.length > 0 && !this.resultQueryTv.length > 0">Titoli della settimana</h3>
    <div class="default_cards"
        v-if="!this.resultQueryMovie.length > 0 && !this.resultQueryTv.length > 0">
      <CardComponent
        v-for = "item in this.defaultQuery"
        :key = "`key-${item.id}`" 
        :item="item"
        :genre="genreMovie"
        :itemsType="'film'"/>
    </div>

    <div v-else>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a @click="$emit('resetQuerys', '' )" href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Risultati della ricerca</li>
        </ol>
      </nav>
      
      <h4>Film</h4>
      <div class="default_cards">
        <CardComponent 
          v-for = "item in this.resultQueryMovie"
          :key = "`key-${item.id}`" 
          :item="item"
          :genre="genreMovie"
          :itemsType="'film'"/>
      </div>

      <h4>Serie TV</h4>
      <div class="default_cards">
        <CardComponent 
          v-for = "item in this.resultQueryTv"
          :key = "`key-${item.id}`" 
          :item="item"
          :genre="genreTV"
          :itemsType="'tv'"/>
      </div>

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
      defaultQuery: Array,
      genreMovie: Array,
      genreTV: Array
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
  
  .default_cards{
    @include flex-cnt();
    height: 100%;
    width: 100%;
  }

  .breadcrumb-item a{
    color: $logo-primary-color;
  }
}


</style>