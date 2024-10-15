<script setup lang="ts">
import {TabItem} from "~/tabs";
import Dropdown from "~/components/widget/Dropdown.vue";

const props = defineProps<{
  item: TabItem
}>();
</script>

<template>
  <span v-if="item.type == 'text'">
    {{item.text}}
  </span>
  <input v-else-if="item.type == 'input'" :type="item.inputType"/>
  <button v-else-if="item.type == 'button'">
    {{item.text}}
  </button>
  <Dropdown v-else-if="item.type == 'dropdown'" :options="item.options" v-model="item.value"></Dropdown>
  <div class="separator" v-else-if="item.type == 'separator'">

  </div>
  <TabItemWidget v-if="item.append != undefined" :item="item.append"></TabItemWidget>
</template>

<style scoped>
.separator {
  height: 1px;
  width: 100%;
  background-color: var(--text-color);
}
</style>