<template>
  <h1>Please sign in.</h1>
  <form>
    <input type="email" placeholder="TDS ID">
    <input type="password" placeholder="Password">
    <button>Log in</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

  h1 {
    font-size: 40px;
    margin-bottom: 50px;
  }

  form{
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  input {
    height: 50px;
    margin: 10px 0;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0.5px solid #d2d2d7;
  }

  button {
    height: 50px;
    margin: 10px 0;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #ffffff;
    background-color: #0071e3;
    border: 0.5px solid #0071e3;
  }

</style>