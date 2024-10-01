<script setup lang="ts">
import MainItem from './components/items/MainItem.vue';
import Toaster from './components/ui/toast/Toaster.vue';
</script>

<template>
  <Toaster/>
  <MainItem/>
  <RouterView />
</template>
