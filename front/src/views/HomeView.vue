<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Button>hola</Button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template> -->
<script setup>

import RegisterForm from '@/components/forms/RegisterForm.vue'
import LoginForm from '@/components/forms/LoginForm.vue'


import { ref } from "vue";

const isLogin = ref(true);

</script>
<template>
  <div>


    <div class="m-auto">
      <div
        class="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <h1 class="text-4xl font-extrabold">ToDo</h1>
          <p class="text-md text-gray-400 mt-3">
            ToDo is a simple and efficient web application that helps you manage your tasks. Easily add, edit, and
            delete, keeping everything organized and accessible online. Stay productive and focused with ToDo!
          </p>
          <p @click="isLogin = !isLogin" class="underline hover:cursor-pointer my-4">
          {{ isLogin ? 'sign up ' : 'Log in' }} ↗
        </p>
        </div>
            
        <RegisterForm v-if="!isLogin"/>
        <LoginForm v-if="isLogin"/>
      </div>
    </div>


  </div>
</template>



