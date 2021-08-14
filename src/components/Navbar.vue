<template>
  <nav>
    <div class="container flex">
      <h2 class="logo">TDS</h2>
      <ul class="flex links">
        <li>Log in</li>
        <li>Sign up</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  nav {
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    color: rgba(255,255,255,0.75);
    height: 50px;
  }

  .logo {
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  .logo:hover, .links li:hover {
    color: rgba(255,255,255,1);
  }

  .links {
    list-style: none;

    li {
      margin: 0 10px;
      cursor: pointer;
    }

  }

  
</style>