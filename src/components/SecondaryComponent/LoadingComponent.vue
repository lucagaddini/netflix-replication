<template>
  <div class="loader_container">
    <img src="../../assets/img/logo.png" alt="Logo" />
    <audio src="../../assets/intro.mp3" autoplay></audio>
    <div class="loader">
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
  background-color: $primary-color;
  @include flex-column-cnt();
  img{
    width : 400px;
}
}

.title{
  padding: 25px;
  font-size: 50px;
  text-align: center;
  color: $logo-primary-color;
}

.loader {
    border: 16px solid lighten($primary-color, 20%);
    border-top: 16px solid $logo-primary-color; 
    border-radius: 50%;
    width: 100px;
    height: 100px;
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