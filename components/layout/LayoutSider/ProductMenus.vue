<script setup lang="ts">
  const menus = ref([{ title: '测试测试' }, { title: '测试菜单' }])
  const activeIdx = ref(0)
</script>

<template>
  <div className="grid gap-[2px]">
    <SiderButton
      v-for="(item, index) in menus"
      :key="item.title"
      :class="{
        ' bg-buttonSelectedBackground': activeIdx === index,
      }"
      :title="item.title"
    />
  </div>
</template>
