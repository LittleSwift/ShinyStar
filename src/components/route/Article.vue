<script setup lang="ts">

import {site} from "~/config";
import ArticleDisplay from "~/components/widget/ArticleDisplay.vue";
import {useRoute} from "vue-router";
import {reformatDate} from "~/date";

const post = site.posts.data.find(post => post.title == useRoute().params.title)!;
</script>

<template>
  <div>
    <div class="postArea">
      <div class="postContent">
        <span class="path"><RouterLink to="/">首页</RouterLink>/<RouterLink to="/articles">文章列表</RouterLink>/{{post.title}}</span>
        <h2 class="postViewTitle">{{post.title}}</h2>
        <span class="date">Date: {{reformatDate(post.date)}}</span>
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