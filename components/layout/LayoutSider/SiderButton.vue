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
    class="!text-buttonTextColor font-medium hoverButton justify-start tracking-wide"
    :label="title"
  >
    <template #leading>
      <slot v-if="$slots.icon" name="icon"/>
      <div v-else class="mr-[2px] text-[18px]" :class="icon"/>
    </template>

    <template #trailing>
      <div class="flex flex-1 justify-end relative">
        <slot name="right"/>
      </div>
    </template>
  </UButton>
</template>
