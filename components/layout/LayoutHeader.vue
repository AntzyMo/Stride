<script setup lang="ts">
  const title = ref('title')
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-1 items-center">
      <IconButton icon="i-mingcute-layout-leftbar-open-line"/>
      <div>{{ title }}</div>
    </div>
    <div>
      right
    </div>
  </div>
</template>
