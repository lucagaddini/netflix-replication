<template>
  <div class="featured_wrapper p-0">
		<img :src="`https://image.tmdb.org/t/p/original/${this.trandingTitlesForHero[0].backdrop_path}`" class="featured">
		<div class="title_wrapper">
			<span class="pretitle">Trending Today</span>
			<h1 class="title">{{this.trandingTitlesForHero[0].title}}</h1>

      <div class="subtitle_info">
        <p class="subtitle">ANNO USCITA  &  DURATA</p>
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
      trandingTitlesForHero: Array
  },
  data(){
    return{
    }
  },
  methods: {
    
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
    object-position: top;
  }
}

.title_wrapper {
	position: absolute;
	width: 100%;
	left: 2rem;
	bottom: 2rem;
	padding: 20px 40px;
	box-sizing: border-box;
  
  h1 {
    width: 70%;
  }
}



button {
	background: #f40612 !important;
	color: #fff !important;
	font-size: 18px;
	padding: 0.5rem 3rem;
	outline: none;
	border: 0 !important;
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
@media (max-width: 480px) {
	.column.is-one-quarter img {
		width: 100%;
		margin-bottom: 7rem;
	}
}

</style>