<script setup lang="ts">
import {config, site} from "@/config";
import ArticleDisplay from "./ArticleDisplay.vue";
</script>

<template>
  <div>
    <div class="postArea" v-for="post in site.posts.data">
      <div class="postCard">
        <div class="postContent">
          <RouterLink :to="post.permalink.split(config.url)[1]"><h2 class="postTitle">{{post.title}}</h2></RouterLink>
          <ArticleDisplay :post="post"></ArticleDisplay>
        </div>
        <RouterLink class="postOpenLink" :to="post.permalink.split(config.url)[1]"><button class="postOpen">查看文章</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.postArea {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255,251,235);
  padding: 5rem 1.25rem;
  min-height: calc(100vh - 8rem);
}

.postCard {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 1rem;
  padding: 1.25rem;
  background-color: rgba(0,0,0,0.1);
}

.postContent {
  width: 100%;
  max-height: 16rem;
  overflow: hidden;
}

.postTitle {
  position: relative;
  margin: 1.25rem;
  font-size: 3rem;
  font-weight: bolder;
  transition: all;
  transition-duration: 0.5s;
}

.postTitle:hover {
  margin-left: 1.75rem;
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
}
.postOpen:hover {
  background-color: rgba(0,0,0,0.1);
}

@media (min-width: 1024px) {
  .postArea {
    padding: 5rem calc((100% - 60rem) / 2);
  }
  .postCard {
    max-width: 60rem;
  }
}

</style>