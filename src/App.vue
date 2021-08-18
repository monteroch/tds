<template>
  <Navbar/>
  <div class="main-container flex">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  .main-container {
    width: 100vw;
    min-height: calc(100vh - 50px);
    justify-content: center;
  }
</style>
