<script setup>
import MenuNote from "@/components/buttons/MenuNote.vue"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Badge from "../ui/badge/Badge.vue";

defineProps(['note'])

</script>

<template>
    <div class="flex items-center justify-between max-w-full p-4 space-x-8 bg-white rounded-lg">
        <div class="flex items-center justify-between w-full gap-1 ">
            <Avatar>
                <AvatarImage :src="note.image ? note.image : ''" alt="@radix-vue" />
                <AvatarFallback>NN</AvatarFallback>
            </Avatar>
            <div class="flex-col justify-start w-3/4 ">
            <p class="truncate ...  text-left">
                {{ note.title }}
            </p>
            <Badge>{{ note.category.name }}</Badge>
            </div>
            

            <MenuNote :note="note" />
        </div>
    </div>
</template>
