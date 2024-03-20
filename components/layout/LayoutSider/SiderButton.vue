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
    class="!text-buttonTextColor font-medium hoverButton justify-start select-none tracking-wide"
    :label="title"
  >
    <template #leading>
      <slot name="icon">
        <div class="mr-[2px] text-[18px]" :class="icon"/>
      </slot>
    </template>

    <template #trailing>
      <div class="flex flex-1 justify-end relative">
        <slot name="right"/>
      </div>
    </template>
  </UButton>
</template>
