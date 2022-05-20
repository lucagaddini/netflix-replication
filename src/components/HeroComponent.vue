<template>
  <div class="featured_wrapper p-0">
		<img :src="`https://image.tmdb.org/t/p/original/${this.trendingTitlesForHero[this.index].backdrop_path}`" class="featured">
		
    <div class="title_wrapper">
			<span class="pretitle">Trending Week</span>
			<h1 class="title">{{this.trendingTitlesForHero[this.index].title}}</h1>

      <div class="subtitle_info">
        <p class="subtitle">ANNO USCITA & DURATA</p>
      </div>

			<button class="button">Guarda Ora</button>
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
    this.index = this.getRandomNumber(this.trendingMin, this.trendingMax);
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

.featured_wrapper {
	position: relative;
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
    object-position: start;
  }
}

.title_wrapper {
	position: absolute;
	width: 25%;
	left: 2rem;
	bottom: 2rem;
	padding: 20px 40px;
  background-color: rgba(black, .5);
  border-radius: 5px;
    
  h1 {
    width: 70%;
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



@media (max-width: 768px) {
	.title_wrapper {
		text-align: center;
		left: 0;
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