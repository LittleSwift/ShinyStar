<script setup lang="ts">
import {config, theme} from "@/config";
import { IconoirProvider, Github, Twitter, Mail } from '@iconoir/vue';
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
        <IconoirProvider
            :icon-props="{
              'color': '#000000',
              'stroke-width': 1,
              'width': '2em',
              'height': '2em',
            }">
          <a :href="theme.personalLinks.github" v-if="theme.personalLinks.github"><Github class="m-2 hover:scale-110 transition-all duration-500"/></a>
          <a :href="theme.personalLinks.twitter" v-if="theme.personalLinks.twitter"><Twitter class="m-2 hover:scale-110 transition-all duration-500"/></a>
          <a :href="theme.personalLinks.email" v-if="theme.personalLinks.email"><Mail class="m-2 hover:scale-110 transition-all duration-500"/></a>
        </IconoirProvider>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
