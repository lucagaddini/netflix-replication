<template>
  <div class="d-flex py-4 py-md-2">
    <input
      @keyup.enter="$emit('textToSearch',inputValue); inputValue=''" 
      v-model="inputValue"
      class="form-control me-2" 
      type="search" placeholder="Inserisci il titolo" aria-label="Search">
    <button
      @click="$emit('textToSearch',inputValue); inputValue=''" 
      class="btn btn-danger" 
      type="submit"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return{
      inputValue: ''
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/general';
@import '../../assets/style/mixins';
@import '../../assets/style/utils';
@import '../../assets/style/vars';

</style>