<script setup lang="ts">
import {config, theme} from "@/config";
import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<template>
  <header class="bg-black bg-opacity-25 h-12 fixed w-full text-white flex z-50">
    <router-link class="w-24 h-full inline-block text-center content-center bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-[1.1em] transition-all duration-500" to="/">Home</router-link>
    <router-link class="w-24 h-full inline-block text-center content-center bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-[1.1em] transition-all duration-500" to="/about">About</router-link>
    <router-link class="w-24 h-full inline-block text-center content-center bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-[1.1em] transition-all duration-500" to="/articles">Articles</router-link>
  </header>
  <router-view></router-view>
  <footer class="w-full h-32 flex bg-amber-100">
    <div class="flex flex-col m-8">
      <span>{{config.title}}</span>
      <span>by {{config.author}}</span>
      <span>Using <a class="underline" href="https://hexo.io/">Hexo</a> and <a class="underline" href="https://github.com/LittleSwift/ShinyStar">ShinyStar</a> theme</span>
    </div>
    <div class="flex flex-col m-8">
      <span class="text-2xl">Links</span>
      <div class="flex flex-row">
        <a v-for="platform in Object.keys(theme.personalLinks)" :href="theme.personalLinks[platform]" class="m-2 hover:scale-110 transition-all duration-500"><i :class="['fab', 'fa-2x', 'fa-'+platform]"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
