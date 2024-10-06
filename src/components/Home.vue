<script setup lang="ts">
import {site} from "../config.ts";
console.log(site);
</script>

<template>
  <div>
    <div class="w-screen h-screen bg-background bg-cover bg-center bg-no-repeat">
    </div>
    <div class="w-full flex flex-col bg-amber-50" v-for="post in site.posts.data">
      <div class="relative w-[calc(100%-10em)] m-20 rounded-2xl p-5 bg-black bg-opacity-10">
        <div class="w-full">
          <h2 class="m-5 text-5xl font-bold">{{post.title}}</h2>
          <p class="m-5" v-html="post.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>