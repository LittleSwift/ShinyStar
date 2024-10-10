<script setup lang="ts">
import {config, theme} from "@/config";
import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<template>
  <header class="header">
    <RouterLink class="headerLink" to="/"><span>Home</span></RouterLink>
    <RouterLink class="headerLink" to="/about"><span>About</span></RouterLink>
    <RouterLink class="headerLink" to="/articles"><span>Articles</span></RouterLink>
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
  color: white;
  will-change: transform;
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
.mobileHeader{
  display: flex;
  background-color: var(--background-color);
  height: 3rem;
  position: fixed;
  width: 100%;
  color: black;
  z-index: 50;
  box-shadow: 0 25px 50px -12px var(--shadow-color);
}
.mobileMenuButton{
  position: absolute;
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
  background-color: rgb(254,243,199);
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
