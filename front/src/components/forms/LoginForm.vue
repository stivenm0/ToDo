<script setup >
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
import { Input } from '@/components/ui/input'
import {useStore} from 'vuex'; 
import ErrorsForm from '../commons/ErrorsForm.vue'

const store = useStore()

const formSchema = toTypedSchema(z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(8).max(255),
}))

const {handleSubmit} = useForm({
  validationSchema: formSchema,
})
 

const onSubmit = handleSubmit((values) => {  
  store.dispatch('a/handleLogin', values);
})
</script>

<template>
  <form class="w-2/3 mx-auto space-y-3" @submit="onSubmit">
    <h1 class="mb-2 text-4xl font-extrabold text-center">
         Log in
    </h1>
    <ErrorsForm :errors="$store.state.a.authErrors"/>
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Email" v-bind="componentField" 
          autocomplete="email"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Password" v-bind="componentField" 
          autocomplete="current-password"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full">
        Log in
    </Button>
  </form>
</template>