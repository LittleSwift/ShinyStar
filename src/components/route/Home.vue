<script setup lang="ts">
import {config, site} from "~/config";
import ArticleDisplay from "../widget/ArticleDisplay.vue";
</script>

<template>
  <div>
    <div class="background">
      <div class="mainTitle">
        <h2 class="mainTitleText">{{config.title}}</h2>
        <h3 class="mainTitleUrl">{{config.url.split("//")[1]}}</h3>
      </div>
    </div>
    <div class="postArea" v-for="post in site.posts.data">
      <div class="postCard">
        <div class="postContent">
          <RouterLink :to="post.permalink.split(config.url)[1]"><h2 class="postTitle">{{post.title}}</h2></RouterLink>
          <ArticleDisplay :post="post"></ArticleDisplay>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background{
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: var(--home-background-image);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--light-text-color);
}

.mainTitle {
  margin-top: 40vh;
  margin-left: auto;
  margin-right: auto;
}
.mainTitleText {
  font-size: 3rem;
  font-family: "Songti SC",system-ui;
  text-align: center;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: fadeInTop;
}
.mainTitleUrl {
  font-size: 2rem;
  font-family: "Songti SC",system-ui;
  text-align: center;
  animation-delay: 1.5s;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: fadeInTop;
}

@media (min-width: 640px) {
  .mainTitle {
    margin-top: 10rem;
    margin-left: 10rem;
    margin-right: 0;
  }
  .mainTitleText {
    font-size: 4rem;
    text-align: left;
  }
  .mainTitleUrl {
    font-size: 2rem;
    text-align: left;
  }
}

.postArea {
  min-height: 0;
}

</style>