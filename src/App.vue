<template>
  <div id="app" class="container">
  
        <nav class="nav">
          <div class="nav-left">
            <a class="nav-item">
              <img src="./assets/logo.png" alt="Robot Logo">
            </a>
            <span class="nav-item">JakeBot</span>
            <div class="nav-right">
              <span class="nav-item">A project by Justin and Dave </span>
            </div>
          </div>
        </nav>
    
        <router-view></router-view>

  </div>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }

</script>
<style>
  #app {}

</style>
