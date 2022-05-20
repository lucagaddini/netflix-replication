<template>

<nav class="navbar navbar-expand-lg navbar_personal">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">
      <img src="../assets/img/logo.png" alt="Logo Boolflix">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <font-awesome-icon icon="fa-solid fa-bars" class="hamburger_icon"/>
    </button>
    <div class="collapse navbar-collapse navbar_select_container" id="navbarSupportedContent">
      <SearchComponent @textToSearch="saveSearchValue"/>
    </div>
  </div>
</nav>
  
</template>

<script>
import SearchComponent from './SecondaryComponent/SearchComponent.vue'

export default {
  name: "HeaderComponent",
  components: { SearchComponent },
  data(){
    return{
      searchValue:''
    }
  },
  methods: {
    saveSearchValue(value){
      console.log('Valore Salvato da SearchComponent: ',value);
      this.searchValue = value;
      this.$emit('valueToSearch',this.searchValue)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/style/general';
@import '../assets/style/mixins';
@import '../assets/style/utils';
@import '../assets/style/vars';


.navbar_personal{
  background-color: $secondary-color;
  padding: 20px;

  @include flex-sbtw();
  .logo{
    img{
      width: 120px;
    }
  }

  .navbar_select_container{
    flex-grow: 0;
  }

  .navbar-toggler:focus {
	text-decoration: none;
	outline: 0;
	box-shadow: $logo-primary-color 0 0 0 0.25rem;
  }

  .hamburger_icon{
    color: $logo-primary-color;
  }

}


</style>