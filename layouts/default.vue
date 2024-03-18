<script setup lang="ts">

</script>

<template>
  <div className="flex h-[100vh]">
    <LayoutSider/>
    <div className="flex-1 p-3.5  pl-1.5">
      <!-- <LayoutHeader class-name="mb-4 ml-3"/> -->
      <div className="pl-1.5">
        <slot/>
      </div>
    </div>
  </div>
</template>
