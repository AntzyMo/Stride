<script setup lang="ts">
  const siderCollapsed = ref(false)
</script>

<template>
  <div
    class="bg-siderBackground border-r px-1.5 py-2 w-[220px]"
    :class="{ hidden: siderCollapsed }"
  >
    <div class="relative">
      <UButton
        :ui="{
          block: 'justify-start',
        }"
        variant="ghost"
        color="gray"
        block
      >
        My'Stride
      </UButton>
    </div>
  </div>
</template>
