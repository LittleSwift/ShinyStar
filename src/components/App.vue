<script setup lang="ts">
import {config, theme} from "~/config";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {ref, watch} from "vue";
import Modal from "~/components/widget/Modal.vue";
import {useTheme} from "~/theme";
import TabsWidget from "~/components/widget/tabs/TabsWidget.vue";
import {Tabs} from "~/tabs";
const searchText = ref("");
const settingsOpen = ref(false);
const currentTheme = useTheme();
const customTheme = ref("");
watch(customTheme, (newTheme) => {
  localStorage["customTheme"] = newTheme;
  document.body.setAttribute("style", newTheme);
});
customTheme.value = localStorage["customTheme"] ?? "";
const settingsMenu:Tabs = [
  {
    name:'外观',
    items:[
      {
        type: 'text',
        text: '主题',
        append: {
          type: 'dropdown',
          options: [
            {
              key: 'system',
              text: '系统'
            },
            {
              key: 'light',
              text: '亮色'
            },
            {
              key: 'dark',
              text: '暗色'
            },
          ],
          value: currentTheme
        },
      },
      {
        type: 'text',
        text: '或者自定义你的主题！',
      },
      {
        type: 'textarea',
        value: customTheme,
        placeholder: 'CSS格式，将被附加到body上'
      }
    ]
  }
];
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
    <TabsWidget :tabs="settingsMenu"></TabsWidget>
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
