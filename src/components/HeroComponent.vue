<template>
<div class="wrapper">
  <div class="feature_wrapper"
      :style="`background-repeat: no-repeat; background: url(https://image.tmdb.org/t/p/original${this.trendingTitlesForHero[this.index].backdrop_path})`">
    <div class="title_wrapper">
			<span class="pretitle">Trending Week</span>
			<h1 class="title">{{this.trendingTitlesForHero[this.index].title}} <small>({{this.trendingTitlesForHero[this.index].release_date.substring(0,4)}})</small> </h1>
			<!-- <button class="button">Guarda Trailer</button> -->
		</div>
	</div>

  <div class="progress color_theme">
    <div class="progress-bar progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>

</template>

<script>

export default {
  name: "HeroComponent",
  components: {  },
  props:{
      trendingTitlesForHero: Array
  },
  data(){
    return{
      trendingMin: 0,
      trendingMax: 0,
      index: 0
    }
  },
  methods: {
    getRandomNumber(min, max){
      return  Math.floor(Math.random() * (max - min + 1) + min );
    }
  },
  mounted(){
    this.trendingMax = this.trendingTitlesForHero.length - 1,
    setInterval(() =>{
      this.index = this.getRandomNumber(this.trendingMin, this.trendingMax);
    }, 7000);
    
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/style/general';
@import '../assets/style/mixins';
@import '../assets/style/utils';
@import '../assets/style/vars';

.pretitle,
.title,
.subtitle{
  color: white;
}

.feature_wrapper {
  @include flex-cnt();
	position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-repeat:no-repeat !important; 
  background-size: cover !important; 
  background-position:center !important;

  img {
    width: 100%;
  }
}

.title_wrapper {
	position: absolute;
	width: 40%;
	left: 2rem;
	bottom: 2rem;
	padding: 20px 40px;
  background-color: rgba(black, .5);
  border-radius: 5px;
    
  h1 {
    font-size: 2rem;
    
    small {
        font-size:.6em;
        color:#ccc;
        position:relative;
        bottom: 5px;
    }
  }

  button {
    background: $logo-primary-color;
    color: #fff;
    font-size: 18px;
    padding: 0.5rem 3rem;
    outline: none;
    border: 0;
  }
}

.progress.color_theme{
  background-color: $primary-color !important;
  border-radius: 0;
}
    
.progress{
  height: 5px;
  
  .progress-bar-animated{
    animation: 7s linear infinite progress-bar-stripes;
  }
}

@keyframes progress-bar-stripes {
    0% { width: 0%;}
    100% { width: 100%;}
  }

@media (max-width: 768px) {
	.title_wrapper {
		text-align: center;
		left: 0;
    width: 100%;
	}
	.title_wrapper h1 {
		font-size: 32px !important;
		width: 100%;
	}
	.container {
		padding: 20px;
	}
}
</style>