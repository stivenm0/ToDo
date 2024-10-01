<script setup>
import MenuNote from "@/components/buttons/MenuNote.vue"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineProps(['note'])

</script>

<template>
    <div class="flex items-center justify-between max-w-full p-4 space-x-8 bg-white rounded-lg">
        <div class="flex items-center justify-between w-full gap-1">
            <Avatar>
                <AvatarImage :src="note.image ? note.image : ''" alt="@radix-vue" />
                <AvatarFallback>NN</AvatarFallback>
            </Avatar>
            <p class="truncate ...  text-left">
                {{ note.title }}
            </p>
            <MenuNote :note="note" />
        </div>
    </div>
</template>
