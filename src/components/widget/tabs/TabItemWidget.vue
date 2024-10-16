<script setup lang="ts">
import {TabItem} from "~/tabs";
import Dropdown from "~/components/widget/Dropdown.vue";

const props = defineProps<{
  item: TabItem
}>();
</script>

<template>
  <div class="itemWrapper">
    <span v-if="item.type == 'text'">
      {{item.text}}
    </span>
    <input v-else-if="item.type == 'input'" :type="item.inputType" :placeholder="item.placeholder" v-model="item.value"/>
    <textarea v-else-if="item.type == 'textarea'" class="textarea" :placeholder="item.placeholder" v-model="item.value"/>
    <button v-else-if="item.type == 'button'">
      {{item.text}}
    </button>
    <Dropdown v-else-if="item.type == 'dropdown'" :options="item.options" v-model="item.value"></Dropdown>
    <div class="separator" v-else-if="item.type == 'separator'">

    </div>
    <TabItemWidget v-if="item.append != undefined" :item="item.append"></TabItemWidget>
  </div>
</template>

<style scoped>
.itemWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.separator {
  height: 1px;
  width: 100%;
  background-color: var(--text-color);
}
.textarea {
  width: 100%;
  height: 4rem;
  background-color: var(--card-color);
  border-radius: 0.5rem;
  resize: none;
}
</style>