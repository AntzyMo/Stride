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

  <UButton
    variant="link"
    class="!no-underline !text-buttonTextColor50 hover:!text-buttonTextColor"
  >
    <template #leading>
      <div class="h-3.5 i-mingcute-add-fill w-3.5"/>
    </template>
    新增
  </UButton>
</template>
