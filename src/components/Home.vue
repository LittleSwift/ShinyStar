<script setup lang="ts">
import {config, site} from "@/config";
import ArticleDisplay from "./ArticleDisplay.vue";
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
  background-image: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(255,251,235,1) 100%), url('/img/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
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
}
.mainTitleUrl {
  font-size: 2rem;
  font-family: "Songti SC",system-ui;
  text-align: center;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255,251,235);
  padding: 5rem 1.25rem;
}

.postCard {
  width: 100%;
  display: flex;
  position: relative;
  border-radius: 1rem;
  padding: 1.25rem;
  background-color: rgba(0,0,0,0.1);
}

.postContent {
  width: 100%;
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

@media (min-width: 1024px) {
  .postArea {
    padding: 5rem calc((100% - 60rem) / 2);
  }
  .postCard {
    max-width: 60rem;
  }
}

</style>