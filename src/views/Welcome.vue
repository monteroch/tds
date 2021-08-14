<template>
  <div v-if="showLogin">
    <Login/>
  </div>
  <div v-else>
    <Signup/>
  </div>
</template>

<script>
import Login from '../components/Login';
import Signup from '../components/Signup';
export default {
  data(){
    return {
      showLogin: true
    }
  },
  components: {
    Login,
    Signup
  }
}
</script>

<style>

</style>