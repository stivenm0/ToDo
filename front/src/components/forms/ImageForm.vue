<script setup>
import { useStore } from 'vuex';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import ErrorsForm from '../commons/ErrorsForm.vue';
const store = useStore()

const onSubmit = (form) => {
    const formData = new FormData(form.target); 

    formData.append("title", store.state.m.note.title);
    formData.append("description", store.state.m.note.title );
    formData.append("category_id", store.state.m.note.category.id);
    formData.append("user_id", store.state.a.authUser.id);    

    store.dispatch('m/uploadImage', formData)
};
</script>

<template>
    <ErrorsForm :errors="$store.state.m.errors"/>

    <form @submit.prevent="onSubmit">
        <Input type="file" name="image" required />
        <Button type="submit" class="w-full uppercase">
            Upload
        </Button>
        <Button class="w-full uppercase">
            Cancel
        </Button>
    </form>
</template>
