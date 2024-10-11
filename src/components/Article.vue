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
        <h2 class="postViewTitle">{{post.title}}</h2>
        <ArticleDisplay :post="post"></ArticleDisplay>
      </div>
    </div>
  </div>
</template>

<style scoped>

.postViewTitle {
  position: relative;
  margin: 1.25rem;
  font-size: 3rem;
  font-weight: bolder;
}

</style>