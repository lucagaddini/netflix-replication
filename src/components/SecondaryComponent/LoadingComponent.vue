<template>
  <div class="loader_container">
    <div class="loader">
      <img src="../../assets/img/logo.png" alt="Logo" />
    </div>
    <div class="title">{{loaderName}}</div> 
  </div>
</template>

<script>
export default {
  name:'LoadingComponent',

  props: {

    loaderName: String,

  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/general';
@import '../../assets/style/mixins';
@import '../../assets/style/utils';
@import '../../assets/style/vars';

.loader_container{
  width: 100%;
  height: 100vh;
  @include flex-column-cnt();
}

.title{
  padding: 25px;
  font-size: 50px;
  text-align: center;
}

.loader {
    border: 16px solid lighten($primary-color, 20%); /* Light grey */
    border-top: 16px solid $logo-primary-color; /* Dark Green */
    border-radius: 50%;
    width: 137px;
    height: 137px;
    animation: spinloader 2s linear infinite;
}
.loader img{
    height : 105px;
    width : 105px;
    animation: spinlogo 2s linear infinite;
}
@keyframes spinloader {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes spinlogo {
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
}


</style>