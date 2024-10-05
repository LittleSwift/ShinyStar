<script setup lang="ts">

</script>

<template>
  <header class="bg-black bg-opacity-50 h-8 fixed w-full text-white">
    <router-link class="w-24 inline-block" to="/">主页</router-link>
    <router-link class="w-24 inline-block" to="/about">About</router-link>
  </header>
  <router-view></router-view>
</template>

<style scoped>
</style>
