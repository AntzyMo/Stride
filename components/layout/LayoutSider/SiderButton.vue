<script setup lang="ts">
  const { title, icon } = defineProps<{
    title: string
    icon?: string
  }>()
</script>

<template>
  <UButton
    variant="ghost"
    block
    class="font-medium hoverButton justify-start py-[5px] text-buttonTextColor tracking-wide"
    :label="title"
  >
    <template #leading>
      <slot v-if="$slots.icon" name="icon"/>
      <div v-else class="text-[18px]" :class="icon"/>
    </template>

    <template #trailing>
      <div class="flex flex-1 justify-end">
        <slot name="right"/>
      </div>
    </template>
  </UButton>
</template>
