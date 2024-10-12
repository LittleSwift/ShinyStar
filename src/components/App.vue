<script setup lang="ts">
import {config, theme} from "@/config";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {ref} from "vue";
import {useRouter} from "vue-router";
import Modal from "~/components/widget/Modal.vue";
const searchText = ref("");
const settingsOpen = ref(false);
</script>

<template>
  <header class="header">
    <RouterLink class="headerLink" to="/"><span>Home</span></RouterLink>
    <RouterLink class="headerLink" to="/about"><span>About</span></RouterLink>
    <RouterLink class="headerLink" to="/articles"><span>Articles</span></RouterLink>
    <div class="searchContainer">
      <input type="text" class="searchInput" v-model="searchText"/>
      <RouterLink :to="'/search?q='+encodeURIComponent(searchText)"><i class="fa fa-xl fa-search searchIcon"></i></RouterLink>
    </div>
    <div class="settingsContainer" @click="settingsOpen = true">
      <i class="fa fa-xl fa-cog settingsIcon"></i>
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
  <Modal v-if="settingsOpen" size="large" @close="settingsOpen = false">
<h2>什么是小鱼干？</h2>
<p>小鱼干，又称小鱼干燥品，是由新鲜的小鱼经过精心处理后制作而成的美味小吃。它以独特的鲜香味和脆嫩的口感，深受各年龄层的喜爱。</p>

<h2>制作过程</h2>
<p>小鱼干的制作过程包括几个重要步骤：</p>
<ul>
    <li><strong>捕捞：</strong>新鲜的小鱼被捕捞上岸。</li>
    <li><strong>清洗：</strong>对小鱼进行严格清洗，去除杂质。</li>
    <li><strong>腌制：</strong>将小鱼用盐腌制，以去除水分并增加风味。</li>
    <li><strong>干燥：</strong>通过阳光晾晒或现代设备进行烘干，直至水分降至较低水平。</li>
</ul>

<h2>营养价值</h2>
<p>小鱼干不仅美味可口，还富含优质蛋白质、微量元素以及丰富的Omega-3脂肪酸，对心脑健康大有裨益。它是一种低脂、营养丰富的健康小吃，特别适合注重健康饮食的人士。</p>

<h2>多样化食用方式</h2>
<p>小鱼干的食用方式非常多样化：</p>
<ul>
    <li>可以直接作为零食享用，口感鲜香。</li>
    <li>加入米饭、粥或汤中，增添风味。</li>
    <li>还可以用来制作炒菜、炖汤，甚至加入沙拉中。</li>
</ul>

<p>无论是在街边的小吃摊，还是在高档餐厅，小鱼干总能找到它的身影，成为一道美味的风景线。</p>

<h2>结语</h2>
<p>希望通过今天的介绍，对小鱼干有了更深入的了解，期待在品尝这道美味小吃时，能够享受到它带来的独特风味与健康益处！</p>
  </Modal>
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
  position: relative;
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
.settingsContainer{
  position: relative;
}
.settingsIcon{
  color: var(--light-text-color);
  transition: all;
  transition-duration: 0.5s;
  text-align: center;
  align-content: center;
  height: 100%;
  width: 3rem;
  right: 0;
  z-index: 5;
  opacity: 0.5;
  cursor: pointer;
}
.settingsIcon:hover{
  opacity: 1;
  transform: rotate(180deg);
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
