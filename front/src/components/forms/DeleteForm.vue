<script setup>
import Button from '../ui/button/Button.vue';
</script>

<template>
        <h1 class="mb-2 text-xl text-center">
            you are sure delete {{$store.state.m.note.title}}?
        </h1>
        <div class="flex justify-between">
            <Button variant="destructive" @click="$store.dispatch('m/deleteNote')">
                Delete
            </Button>
            <Button variant="secondary" @click="$store.commit('m/setOpen')">
                Cancel
            </Button>
        </div>
</template>



