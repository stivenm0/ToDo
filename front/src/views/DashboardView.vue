<script setup>
import ItemNote from "@/components/items/ItemNote.vue"
import PaginationItems from "@/components/items/PaginationItems.vue";
import Button from "@/components/ui/button/Button.vue";


</script>

<template>
  <section class="relative py-10 bg-gray-100">
    <header class="flex justify-around py-2">
      <Button @click="
        $store.commit('setOpen'),
        $store.commit('setType', 'create')">
        Create Note
      </Button>
      <Button>
        sort created date
      </Button>
      <Button>
        sort due date
      </Button>
    </header>
    <div class="flex items-center justify-center w-full md:px-5">
      <div class="relative grid grid-cols-1 gap-2 md:grid-cols-2">
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
        <ItemNote />
      </div>
    </div>

    <div class="flex justify-center my-5">
      <PaginationItems />

    </div>
  </section>

</template>
