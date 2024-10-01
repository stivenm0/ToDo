<script setup>
import MenuNote from "@/components/buttons/MenuNote.vue"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

</script>

<template>
    <div class="flex items-center justify-between max-w-full p-4 space-x-8 bg-white rounded-lg">
        <div class="flex items-center justify-between w-full gap-1">
            <Avatar>
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p class="truncate ...  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto.
            </p>
            <MenuNote />
        </div>
    </div>
</template>
