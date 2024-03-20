<script setup lang="ts">

</script>

<template>
  <div class="flex h-[100vh]">
    <LayoutSider/>
    <div class="flex-1 p-2.5 pl-1.5">
      <LayoutHeader class="mb-4 ml-3"/>
      <div class="pl-1.5">
        <slot/>
      </div>
    </div>
  </div>
</template>
