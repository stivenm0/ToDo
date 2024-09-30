<script setup>
import { RouterLink } from 'vue-router'
import ItemNote from "@/components/items/ItemNote.vue"


</script>

<template>

  <section class="relative pt-16 bg-gray-100">
    <!-- component -->
    <div class="flex items-center justify-center w-full md:px-5">
      <div class="relative grid grid-cols-1 gap-2 md:grid-cols-2">
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
         <ItemNote/>
      </div>
    </div>

  </section>

  <!-- <div class="w-10/12 ml-auto mr-auto md:w-6/12 lg:w-4/12 md:px-4 -mt-78">
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-pink-500 rounded-lg shadow-lg">
    <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg">
    <blockquote class="relative p-8 mb-4">
      <h4 class="text-xl font-bold text-white">
        Great for your awesome project
      </h4>
      <p class="mt-2 font-light text-white text-md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati excepturi nihil exercitationem tenetur doloribus soluta sequi natus minus pariatur!
      </p>
    </blockquote>
  </div>
</div> -->
</template>
