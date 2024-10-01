<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useStore } from 'vuex'


const store =useStore()


const formSchema = toTypedSchema(z.object({
  title: z.string().min(2).max(255),
  description: z.string().min(2).max(1000),
  due_date: z.any(),
  category_id: z.any()
}))

const form = useForm({
  validationSchema: formSchema,
})


if(store.state.m.type === 'edit'){
  const note = store.state.m.note;
  // console.log(note);
  
  form.setValues({...note, category_id: note.category_id });
}

// console.log(form);


const onSubmit = form.handleSubmit((values) => {
  const { note } = store.state.m
console.log(note);
  console.log(values);
  
  const { type } = store.state.m
  const { id } = store.state.a.authUser
  
  if(type === 'create'){
    store.dispatch('m/createNote', {...values, user_id: id})
  }else{
    if(!values.category_id){
      values.category_id = note.category.id;
    }

    store.dispatch('m/editNote', {...values, user_id: id})
  }
  
})
</script>

<template>
  <form class="w-3/4 mx-auto space-y-3" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="title">
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Title" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="description">
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea placeholder="Description" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="due_date">
      <FormItem>
        <FormLabel>Due Date</FormLabel>
        <FormControl>
          <Input type="date" v-bind="componentField" :min="new Date().toISOString().split('T')[0]" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="category_id">
      <FormItem>
        <FormLabel>Category </FormLabel>
        <FormControl>
          <Select v-bind="componentField" >
            <SelectTrigger>
              <SelectValue 
              :placeholder="$store.state.m.note.category ? $store.state.m.note.category.name : 'Select a Category'"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category </SelectLabel>
                <template v-for="category in $store.state.m.categories" :key="category.id">
                  <SelectItem :value="category.id.toString()" selected=} >
                    {{category.name}}
                  </SelectItem>
                </template>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="image">
      <FormItem>
        <FormLabel>Image</FormLabel>
        <FormControl>
          <Input type="file" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full uppercase">
      {{ $store.state.m.type }}
    </Button>
  </form>
</template>