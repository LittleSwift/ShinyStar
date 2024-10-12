<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps<{ size?: "mini" | "small" | "medium" | "large" | "extra" }>();
const emit = defineEmits(['close']);
const fadeOut = ref(false);
const closeModal = () => {
  fadeOut.value = true;
  setTimeout(() => {
    fadeOut.value = false;
    emit('close');
  }, 1000);
};
</script>

<template>
  <div :class="['modalBackdrop', size, fadeOut?'fadeOut':'']" @click="closeModal">
    <div :class="['modalContent', size, fadeOut?'fadeOut':'']" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modalBackdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;
  background: var(--backdrop-color);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 1s ease;
}
.modalBackdrop.fadeOut {
  animation: fadeOut 1s ease;
}
@media (min-width: 640px) {
  .modalBackdrop {
    padding: 5rem 2rem;
  }
}
@media (min-width: 800px) {
  .modalBackdrop {
    padding: 5rem 8rem;
  }
}


.modalContent {
  background: var(--background-color);
  width: 100%;
  max-width: 60rem;
  min-height: 200px;
  max-height: 100%;
  height: auto;
  overflow-y: scroll;
  padding: 2rem;
  border-radius: 1rem;
  z-index: 10;
  animation: fadeInTop2rem 1s ease;
}
.modalContent.fadeOut {
  animation: fadeOutTop2rem 1s ease;
}
.modalContent.mini {
  max-width: 20rem;
}
.modalContent.small {
  max-width: 30rem;
}
.modalContent.medium {
  max-width: 45rem;
}
.modalContent.extra {
  max-width: unset;
}
</style>
