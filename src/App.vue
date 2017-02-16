<template>
  <div id="app" class="container">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img src="./assets/logo.png" alt="Robot Logo">
        </a>
        <span class="nav-item">Bot</span>
      </div>
      <div class="nav-center">
        <a class="nav-item" href="#/">Home</a>
        <a class="nav-item" href="#/document">Document</a>
      </div>
      <div class="nav-right">
        <span class="nav-item">A project by Justin and Dave </span>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }

</script>
<style>
  #app {}
  
  .spacer {
    margin-top: 5%;
  }

</style>
