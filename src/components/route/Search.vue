<script setup lang="ts">
import {config, site} from "~/config";
import ArticleDisplay from "../widget/ArticleDisplay.vue";
import Fuse from "fuse.js";
import TinySegmenter from "tiny-segmenter";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {reformatDate} from "~/date";

const route = useRoute();
const queryParam = ref(route.query.q || '');
const options = {
  keys: ["title", "_content"],
  threshold: 0.3,
};
const fuse = new Fuse(site.posts.data, options);
const segmenter = new TinySegmenter();
let filteredArticles = ref(site.posts.data);
function search(searchText: string) {
  if (searchText.trim() === "") {
    filteredArticles.value = site.posts.data;
  } else {
    const segmentedQuery = segmenter.segment(searchText).join(" ");
    const result = fuse.search(segmentedQuery);
    filteredArticles.value = result.map((r) => r.item);
  }
}
console.log(queryParam.value);
search(queryParam.value);
watch(
    () => route.query.q,
    (newParam) => {
      queryParam.value = newParam;
      search(queryParam.value);
    }
);
</script>

<template>
  <div>
    <div class="postArea">
      <span class="path"><RouterLink to="/">首页</RouterLink>/搜索</span>
      <h1 class="pageTitle">搜索</h1>
      <div class="postCard" v-for="post in filteredArticles">
        <div class="postContent">
          <RouterLink :to="post.permalink.split(config.url)[1]"><h2 class="postTitle">{{post.title}}</h2></RouterLink>
          <span class="date">{{reformatDate(post.date)}}</span>
          <ArticleDisplay :post="post"></ArticleDisplay>
        </div>
        <RouterLink class="postOpenLink" :to="post.permalink.split(config.url)[1]"><button class="postOpen">查看文章</button></RouterLink>
      </div>
      <div class="postEmpty" v-if="filteredArticles.length == 0">
        <span>没有符合条件的文章哦</span>
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