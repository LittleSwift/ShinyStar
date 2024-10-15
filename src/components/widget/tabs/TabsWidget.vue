<script setup lang="ts">
import {Tabs} from "~/tabs";
import {ref} from "vue";
import TabItemWidget from "~/components/widget/tabs/TabItemWidget.vue";

const props = defineProps<{ tabs:Tabs }>();
const currentTab = ref(props.tabs[0]);
</script>

<template>
  <div class="tabHeader">
    <div class="tabSelectorContainer">
      <button class="tabSelector" v-for="tab in tabs">
        {{tab.name}}
      </button>
    </div>
  </div>
  <div class="tabContent">
    <div>
      <TabItemWidget v-for="item in currentTab.items" :item="item"></TabItemWidget>
    </div>
  </div>
</template>

<style scoped>
.tabHeader {
  display: flex;
  width: 100%;
  height: 4rem;
  border-bottom: var(--text-color) 1px solid;
  margin-bottom: 1rem;
}
.tabSelector {
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  border-left: var(--text-color) 1px solid;
  border-right: var(--text-color) 1px solid;
  color: var(--text-color);
}
.tabSelectorContainer {
  width: 6rem;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.tabSelectorContainer:hover {
  background-color: var(--focus-color);
}
</style>
