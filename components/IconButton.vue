<script setup lang="ts">
  const { icon } = defineProps<{ icon: string }>()
</script>

<template>
  <div
    class="cursor-pointer flex hover:bg-buttonSelectedBackground items-center p-1 rounded-md text-buttonTextColor"
  >
    <div :class="icon" class="text-lg"/>
  </div>
</template>
