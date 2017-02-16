<template>     
<aside class="menu">
  <p class="menu-label">
    <a>General</a>
  </p>
  <ul class="menu-list">
    <li><router-link :to="'/document'"> Overview </router-link></li>
    <li><router-link :to="'/document/windows'"> Windows </router-link></li>
    <li><router-link :to="'/document/mac'"> Mac </router-link></li>
    <li><router-link :to="'/document/commands'"> Commands </router-link></li>
  </ul>
 
</aside>

</template>


<script>

export default {
    name:'document-navbar'
}

</script>


<style>

    
</style>