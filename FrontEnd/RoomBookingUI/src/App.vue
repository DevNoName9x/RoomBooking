<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuHeader from './components/menu-header.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('App.vue:' + route.path)

</script>
<template>
  <MenuHeader></MenuHeader>
  <div class="container">
    <RouterView />
  </div>
</template>
<style scoped></style>
