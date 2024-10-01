<script setup>
import ItemNote from "@/components/items/ItemNote.vue"
import PaginationItems from "@/components/items/PaginationItems.vue";
import Button from "@/components/ui/button/Button.vue";
import { useToast } from "@/components/ui/toast";

import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore()

// watch(() => store.state.m.notes, (newValue, oldValue) => {
// })

onMounted(() => {
  store.dispatch('m/getNotes');

})
</script>

<template>
  <section class="relative py-10 bg-gray-100">
    <Button @click="$store.dispatch('a/handleLogout')"
    variant="destructive" class="absolute top-0 left-0 rounded-none" >
      Log Out
    </Button>
    <header class="flex justify-around py-2">
      <Button @click="
        $store.commit('m/setOpen'),
        store.commit('m/setType', {type:'create', note: {} })">
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
      <div class="relative grid w-full grid-cols-1 gap-2 md:grid-cols-2">
        <template v-for="note in $store.state.m.notes" :key="note.id">
              <ItemNote :note="note" />
        </template>
      </div>
    </div>

    <div class="flex justify-center my-5">
      <PaginationItems />
    </div>
  </section>

</template>
