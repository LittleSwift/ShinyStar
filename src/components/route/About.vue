<script setup lang="ts">

import ArticleDisplay from "~/components/widget/ArticleDisplay.vue";
import {site} from "~/config";
const post = site.pages.data.find((page)=>page.title=="about");
</script>

<template>
  <div>
    <div class="postArea">
      <div class="postContent">
        <span class="path"><RouterLink to="/">首页</RouterLink>/About</span>
        <ArticleDisplay :post="post"></ArticleDisplay>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>