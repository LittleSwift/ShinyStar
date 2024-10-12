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
.display >>> a {
  text-decoration: underline;
}
.display >>> h1,.display >>> h2,.display >>> h3,.display >>> h4,.display >>> h5,.display >>> h6 {
  cursor: pointer;
  scroll-margin-top: 4rem;
  margin: 1rem 0;
}
.display >>> h1:hover::before,
.display >>> h2:hover::before,
.display >>> h3:hover::before,
.display >>> h4:hover::before,
.display >>> h5:hover::before,
.display >>> h6:hover::before {
  content: "#";
  color: darkgray;
}
.display >>> h1 {
  font-size: 2.5rem;
}
.display >>> h2 {
  font-size: 2.25rem;
}
.display >>> h3 {
  font-size: 2rem;
}
.display >>> h4 {
  font-size: 1.75rem;
}
.display >>> h5 {
  font-size: 1.5rem;
}
.display >>> h6 {
  font-size: 1.25rem;
}
.display >>> ol {
  list-style: decimal outside none;
  padding-left: 0;
  margin: 0;
}
.display >>> ul {
  list-style: disc outside none;
  padding-left: 0;
  margin: 0;
}
.display >>> li {
  margin-inline-start: 1.25em;
}
.display >>> p {
  margin: 0;
}
.display >>> blockquote {
  margin: 0;
  padding: 0.25em 0.25em 0.25em 1em;
  border-left: darkgray solid 1px;
  background-color: rgba(127,127,127,0.1);
}
</style>