<script setup lang="ts">

</script>

<template>
  <header class="bg-black bg-opacity-25 h-12 fixed w-full text-white flex z-50">
    <router-link class="w-24 h-full inline-block text-center content-center bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-[1.1em] transition-all duration-500" to="/">Home</router-link>
    <router-link class="w-24 h-full inline-block text-center content-center bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-[1.1em] transition-all duration-500" to="/about">About</router-link>
    <router-link class="w-24 h-full inline-block text-center content-center bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-[1.1em] transition-all duration-500" to="/articles">Articles</router-link>
  </header>
  <router-view></router-view>
</template>

<style scoped>
</style>
