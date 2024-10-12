<script setup lang="ts">
import {config, site, theme} from "@/config";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Fuse from "fuse.js";
import TinySegmenter from "tiny-segmenter";
import {ref} from "vue";
const options = {
  keys: ["title", "raw"],
  threshold: 0.3,
};
const fuse = new Fuse(site.posts.data, options);
const segmenter = new TinySegmenter();
let filteredArticles = ref(site.posts.data);
function search() {
  if (searchText.value.trim() === "") {
    filteredArticles.value = site.posts.data;
  } else {
    const segmentedQuery = segmenter.segment(searchText.value).join(" ");
    const result = fuse.search(segmentedQuery);
    filteredArticles.value = result.map((r) => r.item);
  }
}
let searchText = ref("");
</script>

<template>
  <header class="header">
    <RouterLink class="headerLink" to="/"><span>Home</span></RouterLink>
    <RouterLink class="headerLink" to="/about"><span>About</span></RouterLink>
    <RouterLink class="headerLink" to="/articles"><span>Articles</span></RouterLink>
    <div class="searchContainer">
      <input type="text" class="searchInput" v-model="searchText"/>
      <i class="fa fa-xl fa-search searchIcon" @click="search();console.log(filteredArticles)"></i>
    </div>
  </header>
  <header class="mobileHeader">
    <button class="mobileMenuButton">
      <i class="mobileMenuButtonIcon fa fa-xl fa-bars"></i>
    </button>
    <span class="mobileTitle">
      {{config.title}}
    </span>
  </header>
  <RouterView></RouterView>
  <footer class="footer">
    <div class="footerInfo">
      <span>{{config.title}}</span>
      <span>by {{config.author}}</span>
      <span>Using <a class="link" href="https://hexo.io/">Hexo</a> and <a class="link" href="https://github.com/LittleSwift/ShinyStar">ShinyStar</a> theme</span>
    </div>
    <div class="footerLinks">
      <span class="footerLinkTitle">Links</span>
      <div class="footerLinkList">
        <a v-for="platform in Object.keys(theme.personalLinks)" :href="theme.personalLinks[platform]" class="footerLinkSingleIcon"><i :class="['fab', 'fa-2x', 'fa-'+platform]"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.header{
  display: none;
  background-color: var(--header-color);
  height: 3rem;
  position: fixed;
  width: 100%;
  z-index: 50;
  backdrop-filter: blur(0.5rem);
}
.headerLink{
  width: 6rem;
  height: 100%;
  display: inline-block;
  text-align: center;
  align-content: center;
  background-color: transparent;
  transition: all ease;
  transition-duration: 0.5s;
  color: var(--light-text-color);
  will-change: transform;
  font-weight: bold;
}
.headerLink:hover{
  background-color: var(--header-color);
}
.headerLink>span{
  display: inline-block;
  transition: all;
  transition-duration: 0.5s;
  will-change: transform;
}
.headerLink:hover>span{
  transform: scale(1.1);
}
.searchContainer{
  margin-left: auto;
  margin-right: 0;
  text-align: right;
}
.searchContainer:hover .searchInput, .searchInput:focus-visible{
  width: 18rem;
  opacity: 1;
}
.searchContainer:hover .searchIcon, .searchInput:focus-visible~.searchIcon{
  opacity: 1;
  scale: 0.8;
}
.searchIcon{
  position: absolute;
  color: var(--light-text-color);
  transition: all;
  transition-duration: 0.5s;
  text-align: center;
  align-content: center;
  height: 100%;
  width: 4rem;
  right: 0;
  z-index: 5;
  opacity: 0.5;
  cursor: pointer;
}
.searchInput{
  position: relative;
  width: 0;
  transition: all;
  transition-duration: 0.5s;
  background-color: var(--header-color);
  border: var(--light-text-color) 2px solid;
  border-radius: 0.5rem;
  height: 2.5rem;
  margin: 0.25rem;
  color: var(--light-text-color);
  outline: none;
  opacity: 0;
  padding: 0.5rem;
}
.mobileHeader{
  display: flex;
  background-color: var(--background-color);
  height: 3rem;
  position: fixed;
  width: 100%;
  color: var(--text-color);
  z-index: 50;
  box-shadow: 0 25px 50px -12px var(--shadow-color);
}
.mobileMenuButton{
  position: absolute;
  color: var(--text-color);
}
.mobileMenuButtonIcon{
  margin: 1.5rem;
}
.mobileTitle{
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 0.75rem;
}
@media (min-width: 640px) {
  .header{
    display: flex;
  }
  .mobileHeader{
    display: none;
  }
}
.footer{
  width: 100%;
  height: 8rem;
  display: flex;
  background-color: var(--footer-color);
}
.footerInfo{
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
.footerLinks{
  display: none;
  flex-direction: column;
  margin: 2rem;
}
.footerLinkTitle{
  font-size: 1.5rem;
}
.footerLinkList{
  display: flex;
  flex-direction: row;
}
.footerLinkSingleIcon{
  margin: 0.5rem;
  transition: all;
  transition-duration: 0.5s;
}
.footerLinkSingleIcon:hover{
  scale: 1.1;
}
@media (min-width: 640px) {
  .footerLinks{
    display: flex;
  }
}


</style>
