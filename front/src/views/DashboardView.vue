<script setup>
import ItemNote from "@/components/items/ItemNote.vue"
import Button from "@/components/ui/button/Button.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore()


onMounted(() => store.dispatch('m/getNotes'))

const isLoading = computed(() => !store.state.m.notes)

const notesEmpty = computed(() => store.state.m.notes.length < 1)

const notesOrder = computed(() => store.state.m.notes.length > 2)

</script>

<template>
  <section class="relative py-10 ">
    <Button @click="$store.dispatch('a/handleLogout')" variant="destructive" class="absolute top-0 left-0 rounded-none">
      Log Out
    </Button>
    <header class="flex justify-around py-2">

      <Button @click="
        $store.commit('m/setOpen'),
        store.commit('m/setType', { type: 'create', note: {} })">
        Create Note
      </Button>
      <template v-if="notesOrder">
        <Button @click="$store.dispatch('m/setOrder', 'created_at')" 
          :disabled="$store.state.m.orderBy === 'created_at'">
          sort created date
        </Button>
        <Button @click="$store.dispatch('m/setOrder', 'due_date')" :disabled="$store.state.m.orderBy === 'due_date'">
          sort due date
        </Button>
      </template>
    </header>

    <template v-if="isLoading">
      <div class="w-full mb-2 text-4xl font-extrabold text-center uppercase ">
        Loading
      </div>
    </template>

    <template v-if="notesEmpty">
      <div class="w-full mb-2 text-4xl font-extrabold text-center uppercase">
        Create Note
      </div>
    </template>

    <div class="flex items-center justify-center w-full md:px-5">
      <div class="relative grid w-full grid-cols-1 gap-2 md:grid-cols-2">
        <template v-for="note in $store.state.m.notes" :key="note.id">
          <ItemNote :note="note" />
        </template>
      </div>

    </div>
  </section>

</template>
