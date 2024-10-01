<script setup >
// import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

defineProps(['dat'])


const date = ref()
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="'outline'"
        :class="cn(
          'w-full justify-start text-left font-normal',
          !date && 'text-muted-foreground',
        )"
      >
        <CalendarIcon class="w-4 h-4 mr-2" />
        <span>{{ date ? date : "Pick a date" }}</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-full p-0">
      <Calendar v-model="date" v-bind="dat" />
    </PopoverContent>
  </Popover>
</template>