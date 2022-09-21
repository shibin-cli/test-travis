
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const a:number = 100
</script>
<template>
  <div>{{ a }}</div>
  <HelloWorld title="Hello" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  display: flex;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
