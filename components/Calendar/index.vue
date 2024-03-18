<script setup lang="ts">
  import 'v-calendar/style.css'
  import { Calendar } from 'v-calendar'

  const calendarAttr = [
    {
      key: 'today',
      highlight: {
        class: 'bg-sky-400'
      },
      dates: new Date()
    }
  ]
</script>

<template>
  <div class="border-r px-1.5 w-[220px]">
    <Calendar
      expanded
      title-position="left"
      :attributes="calendarAttr"
      trim-weeks
    />
  </div>
</template>
