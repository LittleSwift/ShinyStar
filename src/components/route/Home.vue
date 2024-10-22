<script setup lang="ts">
import {config, site, theme} from "~/config";
import ArticleDisplay from "~/components/widget/ArticleDisplay.vue";
import {reformatDate} from "~/date";
</script>

<template>
  <div>
    <div class="background">
      <div class="mainTitle">
        <h2 class="mainTitleText">{{config.title}}</h2>
        <h3 class="mainTitleUrl">{{config.url.split("//")[1]}}</h3>
      </div>
    </div>
    <div class="postArea">
      <div class="userCard">
        <img class="userAvatar" src="/img/avatar.png" alt="" />
        <span class="userName">{{config.author}}</span>
        <div class="userLinks">
          <div class="userLinkList">
            <a v-for="platform in Object.keys(theme.personalLinks)" :href="theme.personalLinks[platform]" class="userLinkSingleIcon"><i :class="['fab', 'fa-2x', 'fa-'+platform]"></i></a>
          </div>
        </div>
      </div>
      <div class="postCard" v-for="post in site.posts.data">
        <div class="postContent">
          <RouterLink :to="post.permalink.split(config.url)[1]"><h2 class="postTitle">{{post.title}}</h2></RouterLink>
          <span class="date">{{reformatDate(post.date)}}</span>
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

.userCard {
  margin-top: 1rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 1rem;
  padding: 1.25rem;
  background-color: var(--card-color);
  box-shadow: 0 0 1rem var(--shadow-color);
  transition: all 0.5s;
  text-align: center;
}

.userCard:hover {
  scale: 1.02;
  box-shadow: 0 0 1rem var(--shadow-color-hover);
}

.userAvatar {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: var(--light-text-color) solid 4px;
  margin: 0 auto;
}

.userName {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  .postArea {
    padding: 5rem 20rem;
  }
  .userCard {
    position: absolute;
    left: calc(100% - 17.5rem);
    width: 15rem;
  }
}
.userLinks{
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}
.userLinkList{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.userLinkSingleIcon{
  margin: 0.5rem;
  transition: all;
  transition-duration: 0.5s;
}
.userLinkSingleIcon:hover{
  scale: 1.1;
}

</style>