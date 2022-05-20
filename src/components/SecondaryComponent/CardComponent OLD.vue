<template>
  <div class="card_wrapper">
    <div 
      class="card_container"
      v-for="item in itemsListArray"
      :key="item.id"
    >
      <div class="front_card">
        <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" alt="Poster">
      </div>

      <div class="back_card">
        <p class="boolflix_title">Titolo:</p>
        <h5>{{item.title}}</h5>
        <p class="boolflix_title">Titolo Originale:</p>
        <h5>{{item.original_title}}</h5>
        <p class="boolflix_title">Lingua:</p>
        <h5>{{item.original_language}}</h5>
        <p class="boolflix_title">Voto:</p>
        <h5>{{item.vote_average}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props:{
        itemsListArray: Array
  },
  data() {
    return{
      
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/general';
@import '../../assets/style/mixins';
@import '../../assets/style/utils';
@import '../../assets/style/vars';

.card_wrapper{
  @include flex-cnt();

  .card_container{
    @include flex-column-cnt();
    width: 300px;
    height: 400px;
    background-color: $secondary-color;
    padding: 15px;
    margin: 10px;
    text-align: center;

    .front_card{
      @include flex-cnt();
      width: 100%;
      overflow: hidden;
      img{
        width: 90%;
      }
    }
    .back_card{
      display: none;
      .boolflix_title{
        color: $title-primary-color;
        font-weight: bold;
      }
    }
  }
}

</style>