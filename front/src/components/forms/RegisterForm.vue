<script setup >
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { useStore } from 'vuex'
import ErrorsForm from '../commons/ErrorsForm.vue'

const store = useStore()


const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50).email(),
  password: z.string().min(8).max(255),
  password_confirmation: z.string().min(8).max(255).refine(
    (data) => data === form.values.password, {
    message: "Passwords don't match"
  })
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => store.dispatch('a/handleRegister', values))
</script>

<template>
  
  <form class="w-2/3 mx-auto space-y-3" @submit="onSubmit">
    <h1 class="mb-2 text-4xl font-extrabold text-center">
        Register
    </h1>
    <span>
      <ErrorsForm :errors="$store.state.a.authErrors"/>
    </span>
    <FormField v-slot="{ componentField }" name="name" >
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Name" v-bind="componentField" autocomplete="username" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Email" v-bind="componentField" autocomplete="email"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Password" v-bind="componentField" 
          autocomplete="new-password"/>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password_confirmation" >
      <FormItem>
        <FormLabel>Password Confirmation</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Password Confirmation" v-bind="componentField"
          autocomplete="new-password" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full">
        Register
    </Button>
  </form>
</template>