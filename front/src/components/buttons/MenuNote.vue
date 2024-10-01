<script setup >
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {useStore} from 'vuex'; 

const store = useStore()

const open = (type)=>{
    store.commit('setOpen'),
    store.commit('setType', type)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="open('show')">show</DropdownMenuItem>

      <DropdownMenuItem @click="open('edit')">Edit</DropdownMenuItem>

      <DropdownMenuItem @click="open('delete')">Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>