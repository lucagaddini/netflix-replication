<template>
<div class="card_wrapper">
  <div class = "card_container"
      v-for = "item in itemsListArray"
      :key = "`key-${item.id}`"
      :itemID = "item.id"
      :genresID = "item.genre_ids"
      @mouseover="itemOver(item.id),callVideosAPI(item.id)"
      >

    <div class="card_front">
      <img v-if="item.poster_path == null" src="../../assets/img/poster_placeholder.jpg">
      <img v-else :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`">
    </div>
  
    <div class="card_back"
        :style="`background: url(https://image.tmdb.org/t/p/w780${item.backdrop_path}); background-repeat:no-repeat;
                background-size: cover; background-position:center;`">
      <h1 class="boolflix_title">{{item.title || item.name}} <small v-if="item.title"> ({{item.release_date.substring(0,4)}}) </small></h1>
      <div class="card_back_details">
        <ul>
          <li>
            <h5>{{item.original_title || item.original_name}}</h5>

            <span :class="`fi fi-${checkFlag(item.original_language)}`"></span>

            <span v-for="n in checkVote(item.vote_average)" :key="`star-full-${item.id}-${n}`"><font-awesome-icon color="#db1f2c" icon="fa-solid fa-star" /></span>
            <span v-for="n in (5 - checkVote(item.vote_average))" :key="`star-empty-${item.id}-${n}`"><font-awesome-icon color="#db1f2c" icon="fa-regular fa-star" /></span>

          </li>
        </ul>

        <div class="card_back_overview">
          <h6 class="boolflix_title">Sinossi: </h6>
          <div class="overview">{{item.overview}}</div>
          <h6 class="boolflix_title">Cast: </h6>
          <p class="actors"> {{castItem(item.id)}} </p>
          <h6 class="boolflix_title">Generi: </h6>
          <div class="genre">{{genreFiltered}}</div>
        </div>
      </div>

      <div class="card_back_button">
        <a :href="linkItem(item.id)" target="_blank"> Guarda Trailer</a>
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
      actorsItemOver: [{}],
      genreFiltered: 'default',
      localExtraData: [{}]
    }
  },
  computed:{

    
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

    callExtraAPI(value,type){
      // console.log(value);
      let link = [];
      let url = '';

      if(this.itemsType == 'film'){

        if(type == "videos"){

          url = `https://api.themoviedb.org/3/movie/${value}/videos`;

        } else if (type == "back") {

          url = `https://api.themoviedb.org/3/movie/${value}/credits`;

        }

      } else if (this.itemsType == 'tv'){
          if(type == "videos"){
          url = `https://api.themoviedb.org/3/tv/${value}/videos`;
        } else if (type == "back") {
          url = `https://api.themoviedb.org/3/tv/${value}/credits`;
        }
      }

      axios.get(url,{
        params: this.apiVideosParameters
      })
      .then(r => {
        // console.log(r.data.results);
        
        if (type == "videos"){

          link = r.data.results;
          self.location.href = `https://www.youtube.com/watch?v=${link[0].key}`;

        }else if (type == "back"){

            this.actorsItemOver = r.data.cast;
            // console.log("ATTORI:",this.actorsItemOver);

            let castString = '';
            // console.log("LENGTH:",this.actorsItemOver.length);

            if(this.actorsItemOver.length > 1){

              for (let index = 0; index < 5 ; index++) {
                if(index ==4){
                  castString += this.actorsItemOver[index].name;
                } else castString += this.actorsItemOver[index].name + ", ";

              }

            } else if (this.actorsItemOver.length == 1){

              castString = this.actorsItemOver[0].name;

            } else castString = "Dati sul cast non presenti";

            // creo un nuovo oggetto con l'ID ed la stringa del cast
            let newObject = {
              id:value,
              cast: castString
            };

            // console.log("INCLUDES: _________",this.localExtraData.some(item => item.id === value));
            
            // Se l'oggetto non è presente nell'array lo pusho
            if (!this.localExtraData.some(item => item.id === value)){

              this.localExtraData.push(newObject);

            }
        }

      })
    },

    callVideosAPI(value){
      // console.log(value);
      let link = [];
      let url = '';

      if(this.itemsType == 'film'){

        url = `https://api.themoviedb.org/3/movie/${value}/videos`;

      } else if (this.itemsType == 'tv'){
          
        url = `https://api.themoviedb.org/3/tv/${value}/videos`;
      
      }

      axios.get(url,{
        params: this.apiVideosParameters
      })
      .then(r => {
        console.log(r.data.results);
        link = r.data.results;

        const itemIndex = this.localExtraData.findIndex(item => item.id === value);

        let newObject = {
          id:value,
          cast: this.localExtraData[itemIndex].cast,
          youtube: `https://www.youtube.com/watch?v=${link[0].key}`
        };

        this.localExtraData[itemIndex] = newObject ;

        // console.log("INCLUDES: _________",this.localExtraData.some(item => item.id === value));

        // Se l'oggetto non è presente nell'array lo pusho
        // if (!this.localExtraData.some(item => item.id === value)){

        //   this.localExtraData.push(newObject);

        // }

        // else if (type == "back"){

        //     this.actorsItemOver = r.data.cast;
        //     // console.log("ATTORI:",this.actorsItemOver);

        //     let castString = '';
        //     // console.log("LENGTH:",this.actorsItemOver.length);

        //     if(this.actorsItemOver.length > 1){

        //       for (let index = 0; index < 5 ; index++) {
        //         if(index ==4){
        //           castString += this.actorsItemOver[index].name;
        //         } else castString += this.actorsItemOver[index].name + ", ";

        //       }

        //     } else if (this.actorsItemOver.length == 1){

        //       castString = this.actorsItemOver[0].name;

        //     } else castString = "Dati sul cast non presenti";

        //     // creo un nuovo oggetto con l'ID ed la stringa del cast
            
        // }

      })
    },

    itemOver(value){
      // All'hover della card richiamo le API Extra per il link del video ed il back della card
      this.callExtraAPI(value,'back');

    },

    castItem(value){
      // recupero l'indice dell'oggetto all'interno dell'array con l'ID passato come parametro
      const itemIndex = this.localExtraData.findIndex(item => item.id === value);
      // console.log("ITEM INDEX: ",itemIndex);

      // se l'indice è >=0 ritono la stringa con il cast altrimenti una stringa vuota
      if (itemIndex >=0){return this.localExtraData[itemIndex].cast}
      else return ''
    },

    linkItem(value){
      // recupero l'indice dell'oggetto all'interno dell'array con l'ID passato come parametro
      const itemIndex = this.localExtraData.findIndex(item => item.id === value);

      // se l'indice è >=0 ritono la stringa con il cast altrimenti una stringa vuota
      if (itemIndex >=0){return this.localExtraData[itemIndex].youtube}
      else return ''
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
  @include flex-start-cnt();
  width: 350px;
  height: 450px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.8);
  overflow: hidden;

  &:hover{
    border: 2px solid $logo-primary-color;

    .card_back{
      display: block;
    }

    .card_front {
      display: none;
    }
  }

  .card_front {
    @include flex-cnt();
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

  .card_back {
    display:none;
    position: relative;
    width: 100%;
    height:100%;
    background:#000000;
    border-radius:0 10px 10px 0;
    padding: 20px;
    box-shadow: inset 0 0 0 1000px rgba($primary-color, 0.7);

    h1 {
      color:white;
      font-weight: 400;
      text-align: left;
      font-size: 1.5rem;
      letter-spacing:1px;

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

    .card_back_details {
      height: 75%;
      width: 100%;

      h5{
        font-size: .9rem;
      }

      ul {
        list-style-type:none;
        margin: 0;
        padding: 0;
        margin-bottom: 5px;

        li {
          color:#e3e3e3;
          font-weight:400;
          font-size:14px;
          padding: 0;
        }
      }

      .fi{
        margin-right: 10px;
      }

      .card_back_overview{
        overflow: scroll;
        height: 75%;
        width: 100%;

      }
    }

    .card_back_button {
      position: absolute;
      bottom: 0;
      left: 10px;
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
</style>