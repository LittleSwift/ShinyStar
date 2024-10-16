<script setup lang="ts">
import {config, site} from "~/config";
import ArticleDisplay from "~/components/widget/ArticleDisplay.vue";
import {reformatDate} from "~/date";
</script>

<template>
  <div>
    <div class="postArea">
      <span class="path"><RouterLink to="/">首页</RouterLink>/文章列表</span>
      <h1 class="pageTitle">文章列表</h1>
      <div class="postCard" v-for="post in site.posts.data">
        <div class="postContent">
          <RouterLink :to="post.permalink.split(config.url)[1]"><h2 class="postTitle">{{post.title}}</h2></RouterLink>
          <span class="date">{{reformatDate(post.date)}}</span>
          <ArticleDisplay :post="post"></ArticleDisplay>
        </div>
        <RouterLink class="postOpenLink" :to="post.permalink.split(config.url)[1]"><button class="postOpen">查看文章</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.postContent {
  max-height: 16rem;
  overflow: scroll;
}

.postOpenLink {
  margin: 0.25rem auto;
}
.postOpen {
  background: transparent;
  width: 6rem;
  height: 3rem;
  border-radius: 1rem;
  border: darkgray 1px solid;
  transition: all;
  transition-duration: 0.5s;
  cursor: pointer;
  color: var(--text-color);
}
.postOpen:hover {
  background-color: var(--focus-color);
}

</style>