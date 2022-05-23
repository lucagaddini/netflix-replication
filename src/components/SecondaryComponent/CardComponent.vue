<template>
<div class="card_wrapper">
  <div class="card_container"
      v-for="item in itemsListArray"
      :key="item.id">

    <div class="card_left">
      <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`">
    </div>
  
    <div class="card_right">
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
        <a href="https://www.youtube.com/watch?v=ot6C1ZKyiME" :target ="_blank"> Guarda Trailer</a>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardComponent',
  props:{
      itemsListArray: Array,
      itemsType: String
  },
  data() {
    return{
      
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
  width: 400px;
  height: 350px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  overflow: hidden;

  &:hover{
    width:800px;
    border: 2px solid $logo-primary-color;

    .card_right{
      display: block;
    }

    .card_left {
      width:40%;
      border-radius: 0px;
      img{
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
    width: 60%;
    background:#000000;
    height:100%;
    border-radius:0 10px 10px 0;
    padding: 20px;

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
        }
      }

      .card_right_overview{
        overflow: scroll;
        height: 80%;
        width: 100%;

      }
    }

    .card_right_button {
      a {
        color:$button-primary-color;
        text-decoration:none;
        border:2px solid $button-primary-color;

        padding:10px;
        font-size:12px;

        //background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/COMdoWZ.png);
        // background-size:12px 12px;
        // background-repeat:no-repeat;
        // background-position: 7% 50%;
        border-radius:5px;
        // transition-property: all;
        // transition-duration: .5s;
        
        &:hover {
          color: #000000;
          background-color: $button-primary-color;
          //background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/rFQ5dHA.png);
          // background-size:12px 12px;
          // background-repeat:no-repeat;
          // background-position: 10% 50%;
          cursor: pointer;
          // transition-property: all;
          // transition-duration: .5s;
          }
        //padding:0 0 0 40px;
        //margin:30px 0 0 0;
      }
    }
    }
  }
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .card_wrapper{
    .card_container {
      width: calc( 100% / 2 - 30px);
    } 
  }    
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 
  .card_wrapper{
    .card_container {
      width: calc( 100% / 3 - 30px);
    } 
  }   
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { 
  .card_wrapper{
    .card_container {
      width: calc( 100% / 4 - 30px);
    } 
  }  
}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { 
  .card_wrapper{
    .card_container {
      width: calc( 100% / 5 - 30px);
    } 
  }  
}

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) {
  .card_wrapper{
    .card_container {
      width: calc( 100% / 5 - 30px);
      height: calc( 100% / 5 - 30px);
    } 
  } 
}

</style>