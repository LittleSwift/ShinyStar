<script setup lang="ts">
import {ref} from 'vue';
import {SelectOption} from "~/tabs";

const props = defineProps<{
  options: SelectOption[]
}>();
const isOpen = ref(false);
const selectedOption = ref<SelectOption>();
const currentOption = defineModel<string>();
if(currentOption){
  selectedOption.value = props.options.find(option => option.key == currentOption.value);
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: SelectOption) => {
  selectedOption.value = option;
  currentOption.value = option.key;
  isOpen.value = false;
};
</script>

<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdownToggle">
      {{ selectedOption ? selectedOption.text ?? 'Select an option' : 'Select an option' }}
      <i :class="['dropdownArrow', 'fa', 'fa-angle-down', ...(isOpen?['rotate180']:[])]"></i>
    </button>
    <Transition name="dropdown">
      <div class="dropdownMenu" v-if="isOpen">
          <div
              v-for="option in options" :key="option.key"
              @click.prevent="selectOption(option)"
              class="dropdownItem"
          >
            {{ option.text }}
          </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdownToggle {
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--input-color);
  color: var(--text-color);
  cursor: pointer;
}

.dropdownArrow {
  transition-duration: 0.25s;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}

.dropdownMenu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  min-width: 100%;
  border: 1px solid var(--text-color);
  border-radius: 1rem;
  background-color: var(--background-color);
  z-index: 100;
  overflow-x: hidden;
  overflow-y: scroll;
}

.dropdownItem {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdownItem:hover {
  background-color: var(--focus-color);
}
</style>
