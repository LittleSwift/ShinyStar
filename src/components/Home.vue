<script setup lang="ts">
import {config, site} from "@/config";
import ArticleDisplay from "./ArticleDisplay.vue";
</script>

<template>
  <div>
    <div class="w-screen h-screen bg-background bg-cover bg-center bg-no-repeat">
    </div>
    <div class="w-full flex flex-col bg-amber-50" v-for="post in site.posts.data">
      <div class="relative flex w-[calc(100%-2.5rem)] lg:max-w-240 ml-5 mr-5 mt-20 mb-20 lg:ml-auto lg:mr-auto rounded-2xl p-5 bg-black bg-opacity-10">
        <div class="w-full">
          <RouterLink :to="post.permalink.split(config.url)[1]"><h2 class="relative m-5 text-5xl font-bold hover:ml-7 transition-all duration-500">{{post.title}}</h2></RouterLink>
          <ArticleDisplay :post="post"></ArticleDisplay>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>