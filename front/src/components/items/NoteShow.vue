<template>
    <div class="w-full ml-auto mr-auto md:px-4 -mt-78">
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-500 rounded-lg shadow-lg">
    <img alt="..." :src="$store.state.m.note.image" class="w-full text-left rounded-t-lg"
    v-if="$store.state.m.note.image">
    <blockquote class="relative p-8 mb-4">
      <h4 class="text-xl font-bold text-white">
        {{ $store.state.m.note.title }}
      </h4>
      <p class="mt-2 font-light text-white text-md">
        {{ $store.state.m.note.description }}
      </p>
    </blockquote>
  </div>
</div> 
</template>

<script setup>

</script>
