<template>
<div class="card_wrapper">
  <div class = "card_container"
      :data-itemID = "item.id"
      :data-genresID = "item.genre_ids"
      @mouseover="mouseOverCallAPI(item.id)"
      >

    <div class="card_front">
      <img v-if="item.poster_path == null" src="../../assets/img/poster_placeholder.jpg">
      <img v-else :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`">
    </div>
  
    <div v-if="!isLoaded" class="card_back">
      <h3 class="boolflix_title">LOADING ...</h3>
    </div>

    <div v-else class="card_back"
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
          <h5 class="boolflix_title">Sinossi: </h5>
          <div class="overview">{{item.overview}}</div>
          <h5 class="boolflix_title">Cast: </h5>
          <p class="actors"> {{castItem()}} </p>
          <h5 class="boolflix_title">Generi: </h5>
          <div class="genre">{{genreItem()}}</div>
        </div>
      </div>

      <div v-if="linkItem()" class="card_back_button">
        <a :href="linkItem()" target="_blank"> Guarda Trailer</a>
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
      item: Object,
      itemsType: String,
      genre: Array
  },
  data() {
    return{
      apiVideosParameters: {
        api_key: '933535a20fccede2394fcd6641cbed47',
        language: 'it-IT'
      },
      isLoaded: false,
      actorsItemOver: [{}],
      localExtraData: [{}]
    }
  },
  mounted(){
    
  },
  methods:{

    mouseOverCallAPI(value){
      // All'hover della card richiamo le API Extra per il link del video ed il back della card
      this.callCastAPI(value);

      this.callVideosAPI(value);
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000);

      
    },
    // Controllo della corretta stringa per indentificare il paese
    checkFlag(value){
      if(value == "en") return "us"
      else if(value == "ja") return "jp"
      else return value
    },

     // Conversione ed approsimazione del voto medio
    checkVote(value){
      return Math.ceil(value / 2);
    },

    // Chiamata API per ricevere l'elenco degli attori
    callCastAPI(value){
      console.log("CallCastAPI ----- Value:",value);
      let url = '';

      if(this.itemsType == 'film'){

        url = `https://api.themoviedb.org/3/movie/${value}/credits`;

      } else if (this.itemsType == 'tv'){
          
          url = `https://api.themoviedb.org/3/tv/${value}/credits`;
        
      }

      axios.get(url,{
        params: this.apiVideosParameters
      })
      .then(r => {
          //console.log("RISPOSTA API CAST:",r.data.results)
            this.actorsItemOver = r.data.cast;
            console.log("ATTORI:",this.actorsItemOver);

            let castString = '';

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
              cast: castString,
              genre: this.item.genre_ids
            };

            // Se l'oggetto non è presente nell'array lo pusho
            if (!this.localExtraData.some(item => item.id === value)){

              this.localExtraData.push(newObject);

            }

      })
    },

    // Chiamata API per ricevere l'elenco dei link dei video correlati
    callVideosAPI(value){
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
        console.log("Array VideosAPI: ",r.data.results);
        link = r.data.results;
        if(link.length > 0){
          const itemIndex = this.localExtraData.findIndex(item => item.id === value);

          let newObject = {
            id:value,
            cast: this.localExtraData[itemIndex].cast,
            genre: this.item.genre_ids,
            youtube: `https://www.youtube.com/watch?v=${link[0].key}`
          };

          this.localExtraData[itemIndex] = newObject ;
        }
      })
    },

    // Recupero dei dati relativi al cast dall'array locale
    castItem(){
      // recupero l'indice dell'oggetto all'interno dell'array con l'ID passato come parametro
      const itemIndex = this.localExtraData.findIndex(item => item.id === this.item.id);
      // console.log("ITEM INDEX: ",itemIndex);

      // se l'indice è >=0 ritono la stringa con il cast altrimenti una stringa vuota
      if (itemIndex >=0){return this.localExtraData[itemIndex].cast}
      else return "Dati sul Cast non presenti"
    },

    // Recupero dei dati relativi al link dall'array locale
    linkItem(){
      // recupero l'indice dell'oggetto all'interno dell'array con l'ID passato come parametro
      const itemIndex = this.localExtraData.findIndex(item => item.id === this.item.id);

      // se l'indice è >=0 ritono la stringa con il cast altrimenti una stringa vuota
      if (itemIndex >=0){return this.localExtraData[itemIndex].youtube}
      else return ''
    },

    // Recupero dei dati relativi ai generi dall'array locale
    genreItem(){
      // recupero l'indice dell'oggetto all'interno dell'array con l'ID passato come parametro
      
      let genreString = '';
      let genreIndex;

      const propsGenreLenght = this.item.genre_ids.length;
      console.log("propsGenreLenght: ----->",propsGenreLenght);

      for (let i = 0; i < propsGenreLenght ; i++) {
        
        genreIndex = this.genre.findIndex(item => item.id === this.item.genre_ids[i]);
        console.log("GENRE INDEX: ",genreIndex);
        
        if(i == propsGenreLenght - 1){
  
          genreString += this.genre[genreIndex].name;
          
        } else genreString += this.genre[genreIndex].name + ", ";

        console.log("GENRESTING:---->",genreString);

      }
      // se l'indice è >=0 ritono la stringa con il cast altrimenti una stringa vuota
      // if (itemIndex >=0){return genreString}
      // else return ''
      if(!this.item.genre_ids.length) return "Dati sui Generi non presenti"
      else return genreString
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
    text-align: center;
    width: 100%;
    height:100%;
    background:#000000;
    border-radius:0 10px 10px 0;
    padding: 20px;
    box-shadow: inset 0 0 0 1000px rgba($primary-color, 0.9);

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
      margin: 5px;
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