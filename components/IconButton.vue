<script setup lang="ts">
  const props = defineProps<{ name: string }>()
</script>

<template>
  <div class="cursor-pointer flex hover:bg-buttonSelectedBackground items-center p-1 rounded-md">
    <UIcon
      v-bind="props"
      class="text-buttonTextColor"
    />
  </div>
</template>
