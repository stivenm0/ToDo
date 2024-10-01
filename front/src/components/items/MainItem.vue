<script setup >
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import NoteForm from '../forms/NoteForm.vue';
import NoteShow from './NoteShow.vue';
</script>

<template>
  <Sheet :open="$store.state.m.isOpen"  @update:open="()=> $store.commit('m/setOpen')" 
    >
    <SheetContent class="overflow-y-scroll bg-indigo-300">
      <SheetHeader>
        <SheetTitle class="mb-2 text-4xl font-extrabold text-center uppercase">
          {{ $store.state.m.type }}
        </SheetTitle>
        <SheetDescription>
          <div>
            <template v-if="$store.state.m.type === 'edit' || $store.state.m.type === 'create'  ">
              <NoteForm/>
            </template>
            <template v-if="$store.state.m.type === 'show'">
              <NoteShow/>
            </template>
          </div>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>