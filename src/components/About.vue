<script setup lang="ts">

import ArticleDisplay from "~/components/ArticleDisplay.vue";
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

.postArea {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  padding: 5rem 1.25rem;
  min-height: calc(100vh - 8rem);
}

.postContent {
  width: 100%;
}

.path {
  margin: 1.25rem;
  color: darkgray;
  font-style: italic;
}

.path > a{
  color: darkgray;
}

.path > a:hover{
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .postArea {
    padding: 5rem calc((100% - 60rem) / 2);
  }
}

</style>