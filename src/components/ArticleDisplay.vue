<script setup lang="ts">
import {HexoPost} from "@/config.ts";

let { post } = defineProps<{post:HexoPost}>();

function handleClick(event: MouseEvent) {
  console.log(event);
  if(event.target instanceof HTMLHeadingElement) {
    location.href="#"+event.target.id;
  }
}
function addPrefixToIds(html: string, prefix: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const elementsWithId = doc.querySelectorAll('[id]');

  elementsWithId.forEach(element => {
    element.id = prefix + element.id;
  });
  return doc.documentElement.outerHTML;
}

const prefixedHtml = addPrefixToIds(post.content, "shinystarlink" + post.title);

</script>

<template>
  <p class="display" @click="handleClick" v-html="prefixedHtml"></p>
</template>

<style scoped>
.display {
  margin: 1.25rem;
}

.display >>> strong {
  font-weight: bold;
}
.display >>> h3 {
  font-size: 2rem;
  cursor: pointer;
  scroll-margin-top: 4rem;
}
.display >>> h3:hover::before {
  content: "#";
  color: darkgray;
}
.display >>> ol {
  list-style: decimal outside none;
}
.display >>> ul {
  list-style: disc outside none;
}
.display >>> li {
  margin-inline-start: 1.25em;
}
</style>