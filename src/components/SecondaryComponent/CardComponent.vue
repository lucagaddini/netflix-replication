<template>
 <div class="card_wrapper">
  <div class="card_container" data-offset="2"
        v-for="item in itemsListArray"
        :key="item.id">
    <div class="card" 
        :style="`background: url(https://image.tmdb.org/t/p/w500${item.backdrop_path}) 100% bottom;`">

      <div class="col_right">
        <div class="card_poster">
          <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`">
        </div>
        <button class="trailer_button">Guarda trailer</button>
      </div>

      <div class="col_left">
        <div class="title_box">
          <p class="boolflix_title">Titolo:</p>
          <h1>{{item.title}} <small>(2018)</small></h1>
        </div>
        <div class="text-block">
          <p class="boolflix_title">Titolo originale:</p>
          <h3>{{item.original_title}}</h3>
          <p class="boolflix_title">Lingua e Voto:</p>
          <h3>{{item.original_language}} | {{item.vote_average}} </h3>
          <h3>GENERE DA API</h3>
          <p class="boolflix_title">Descrizione:</p>
          <p>{{item.overview}}</p>
        </div>
      </div>
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

  .card_container {
    width:550px;
    height:350px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 15px;

    .card {
      @include flex-cnt();
      animation:backAn 50s infinite;
      color:#fff;
      padding: 10px 0;
      width:100%;
      height:100%;
      //background: url(https://riverbeats.life/neworleans/wp-content/uploads/2018/07/Atlantis.png) 100% bottom;
      box-shadow:0px 45px 100px rgba(0, 0, 0, 0.4), inset 0 0 0 1000px rgba(0, 76, 86, 0.6);

    .col_right{
      width: 40%;
      height: 100%;
      @include flex-cnt-start();

      .card_poster {
        @include flex-cnt-start();
        width: 180px;
        height: 80%;
        border-radius: 15px;
        overflow: hidden;
        
        img{
          width: 100%;
          height: auto;
        }
      }

      .trailer_button {
        transition:all 0.35s cubic-bezier(0.37, 0.26, 0.35, 1);
        border:4px solid #fff;
        border-radius: 15px;
        padding:10px;
        color: white;
        background:transparent;
        text-transform:uppercase;
        font-weight:700;
        cursor:pointer;
      }
        
      .trailer_button:hover {
        background:$button-primary-color;
        border:4px solid $button-primary-color;
      }
    }

    .col_left{
      width: 60%;
      height: 100%;

      .title_box{
        h1 {
          font-size: 1.1rem;
          text-transform:uppercase;
          padding-bottom: 10px;
          margin:0;
          font-weight:bold;

          small {
            font-size:.6em;
            color:#ccc;
            position:relative;
            bottom: 5px;
          }
        }

        .boolflix_title{
          color: $title-primary-color;
          font-weight: bold;
          margin: 0;
        }
      }

      .text-block {
        text-shadow:0 3 10 rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 250px;
        overflow: scroll;
        padding-right: 15px;

        .boolflix_title{
          color: $title-primary-color;
          font-weight: bold;
          margin: 0;
        }
        
        h3{
          font-size:0.9rem;
          padding-bottom: 10px;
          margin:0;
          font-weight:bold;
        }

        p{
          font-weight:300;
          width:100%;
        }
      }
    }
  }
  }
}

@keyframes backAn {
	0% {
		background-size:100%;
	}
	50% {
		background-size:250%;
	}
	100% {
		background-size:100%;
	}
}

</style>