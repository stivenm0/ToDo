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
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50).email(),
  password: z.string().min(8).max(255),
  password_confirmation: z.string().min(8).max(255).refine(
    (data) => data.password === form.values.password, {
    message: "Passwords don't match"
  })
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
console.log(values);
})
</script>

<template>
  <form class="w-2/3 space-y-3 mx-auto" @submit="onSubmit">
    <h1 class="text-4xl text-center mb-2 font-extrabold">
        Register
    </h1>
    <FormField v-slot="{ componentField }" name="name" >
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Name" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Email" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Password" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password_confirmation" >
      <FormItem>
        <FormLabel>Password Confirmation</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Password Confirmation" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full">
        Register
    </Button>
  </form>
</template>