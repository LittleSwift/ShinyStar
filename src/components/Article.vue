<script setup lang="ts">

import {config, site} from "~/config";
import ArticleDisplay from "~/components/ArticleDisplay.vue";
import {useRoute} from "vue-router";

const post = site.posts.data.find(post => post.title == useRoute().params.title);
</script>

<template>
  <div>
    <div class="postArea">
      <div class="postContent">
        <span class="path"><RouterLink to="/">首页</RouterLink>/<RouterLink to="/articles">文章列表</RouterLink>/{{post.title}}</span>
        <h2 class="postTitle">{{post.title}}</h2>
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

.postTitle {
  position: relative;
  margin: 1.25rem;
  font-size: 3rem;
  font-weight: bolder;
}

@media (min-width: 1024px) {
  .postArea {
    padding: 5rem calc((100% - 60rem) / 2);
  }
}

</style>