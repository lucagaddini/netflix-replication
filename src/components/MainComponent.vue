<template>
  <div class="main_wrapper"> 

    <CardComponent :itemsListArray="this.resultQuery"/>

  </div>
</template>

<script>
import CardComponent from './SecondaryComponent/CardComponent.vue'
export default {
    name: "MainComponent",
    props:{
      resultQuery: Array
    },
    data() {
      return {
        
      };
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped>

@import '../assets/style/general';
@import '../assets/style/mixins';
@import '../assets/style/utils';
@import '../assets/style/vars';


.main_wrapper{
  @include flex-start();
  background-color: $primary-color;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  color: white;
  padding: 30px;
}


</style>