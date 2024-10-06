<script setup lang="ts">
import {config, site} from "../config.ts";
import ArticleDisplay from "./ArticleDisplay.vue";
console.log(site);
</script>

<template>
  <div>
    <div class="w-screen h-screen bg-background bg-cover bg-center bg-no-repeat">
    </div>
    <div class="w-full flex flex-col bg-amber-50" v-for="post in site.posts.data">
      <div class="relative flex w-[calc(100%-10em)] m-20 rounded-2xl p-5 bg-black bg-opacity-10">
        <div class="w-full">
          <router-link :to="post.permalink.split(config.url)[1]"><h2 class="relative m-5 text-5xl font-bold hover:ml-7 transition-all duration-500">{{post.title}}</h2></router-link>
          <ArticleDisplay :post="post"></ArticleDisplay>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>