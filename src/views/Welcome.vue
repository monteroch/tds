<template>
  <div v-if="showLogin">
      <Login/>
    </div>
    <div v-else>
      <Signup/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Login from '../components/Login';
import Signup from '../components/Signup';
export default {
  data(){
    return {
      
    }
  },
  components: {
    Login,
    Signup
  },
  computed: {
    ...mapState({
      showLogin: state => state.app.showLogin,
    })
  }
}
</script>

<style>

</style>