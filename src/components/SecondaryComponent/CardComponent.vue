<template>
<div class="card_wrapper">
  <div class="card_container "
      v-for="item in itemsListArray"
      :key="item.id">

    <div class="card_left">
      <img v-if="item.poster_path == null" src="../../assets/img/poster_placeholder.jpg">
      <img v-else :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`">
    </div>
  
    <div class="card_right"
        :style="`background: url(https://image.tmdb.org/t/p/w780${item.backdrop_path}); background-repeat:no-repeat;
                background-size: cover; background-position:center;`">
      <h1 v-if="itemsType == 'film'">{{item.title}}</h1>
      <h1 v-else>{{item.name}}</h1>

      <div class="card_right_details">
        <ul>
          <li>
            <h5 v-if="itemsType == 'film' && item.original_title != item.title">{{item.original_title}}</h5>
            <h5 v-else-if="item.name != item.original_name">{{item.original_name}}</h5></li>
          <li><span :class="`fi fi-${checkFlag(item.original_language)}`"></span></li>
          <li>
            <span v-for="n in checkVote(item.vote_average)" :key="n"><font-awesome-icon icon="fa-solid fa-star" /></span>
            <span v-for="n in (5 - checkVote(item.vote_average))" :key="n"><font-awesome-icon icon="fa-regular fa-star" /></span>
          </li>
        </ul>
        <div class="card_right_overview">{{item.overview}}</div>
      </div>

      <div class="card_right_button">
        <!-- {{`https://www.youtube.com/watch?v=${callVideosAPI(item.id)}`}} -->
        <!-- <a href="https://www.youtube.com/watch?v=ot6C1ZKyiME" :target ="_blank"> Guarda Trailer</a> -->
      </div>

    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardComponent',
  props:{
      itemsListArray: Array,
      itemsType: String
  },
  data() {
    return{
      apiVideosParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47',
        language: 'it-IT'
      },
      links :[]
    }
  },
  methods:{
    checkFlag(value){
      if(value == "en") return "us"
      else if(value == "ja") return "jp"
      else return value
    },
    checkVote(value){
      return Math.ceil(value / 2);
    },

    callVideosAPI(value){
      let link = [];
      axios.get(`https://api.themoviedb.org/3/movie/${value}/videos`,{
        params: this.apiVideosParameters
      })
      .then(r => {
        console.log(r.data.results);
        link = r.data.results;
        console.log('Risposta API Videos---->',link[0].id);
      })
      return link;
    },


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
  @include flex-start-cnt();
  width: 350px;
  height: 450px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  overflow: hidden;

  &:hover{
    //width:800px;
    border: 2px solid $logo-primary-color;

    .card_right{
      display: block;
      flex-grow: 0;
      //height: 100%;
    }

    .card_left {
      display: none;
      //width:40%;
      border-radius: 0px;
      img{
        width: 100%;
        border-radius: 10px 0;
      }
    }
  }

  .card_left {
    width:100%;
    height:100%;
    overflow:hidden;
    border-radius:10px;
    background:transparent;

    img {
      width:100%;
      height:auto;
      position:relative;
    }
  }

  .card_right {
    display:none;
    width: 100%;
    height:100%;
    background:#000000;
    border-radius:0 10px 10px 0;
    padding: 20px;
    box-shadow: inset 0 0 0 1000px rgba($secondary-color, 0.6);

    h1 {
      color:white;
      font-weight: 400;
      text-align: left;
      font-size: 1.5rem;
      letter-spacing:1px;
    }

    .card_right_details {
      height: 75%;
      width: 100%;

      h5{
        font-size: .9rem;
      }

      ul {
        list-style-type:none;
        margin: 0;
        padding: 0;
        li {
          color:#e3e3e3;
          font-weight:400;
          font-size:14px;
          padding: 5px 0;
        }
      }

      .card_right_overview{
        overflow: scroll;
        height: 60%;
        width: 100%;

      }
    }

    .card_right_button {
      height: 10%;
      a {
        color:$primary-color;
        background-color: $button-primary-color;
        text-decoration:none;
        border:2px solid $button-primary-color;

        padding:10px;
        font-size:12px;
        border-radius:5px;
        
        &:hover {
          color: $button-primary-color;
          background-color: $primary-color;
          cursor: pointer;
          }
      }
    }
    }
  }
}
// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) {
//   .card_wrapper{
//     .card_container {
//       width: calc( 100% / 2 - 30px);
//     } 
//   }    
// }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { 
//   .card_wrapper{
//     .card_container {
//       width: calc( 100% / 3 - 30px);
//     } 
//   }   
// }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { 
//   .card_wrapper{
//     .card_container {
//       width: calc( 100% / 4 - 30px);
//     } 
//   }  
// }

// // X-Large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { 
//   .card_wrapper{
//     .card_container {
//       width: calc( 100% / 5 - 30px);
//     } 
//   }  
// }

// // XX-Large devices (larger desktops, 1400px and up)
// @media (min-width: 1400px) {
//   .card_wrapper{
//     .card_container {
//       width: calc( 100% / 5 - 30px);
//       height: calc( 100% / 5 - 30px);
//     } 
//   } 
// }

</style>