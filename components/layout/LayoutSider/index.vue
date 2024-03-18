<script setup lang="ts">
  const siderCollapsed = ref(false)
</script>

<template>
  <div
    class="bg-siderBackground  border-r  px-1.5  py-2  w-[220px]"
    :class="{ hidden: siderCollapsed }"
  >
    <div class="relative">
      <SiderButton title="My'Stride" class="font-semibold  mb-1">
        <template #icon>
          <div className="bg-buttonSelectedBackground text-[12px] text-buttonTextColor w-[22px] h-[22px] text-center leading-[22px] font-medium rounded-md  mr-[2px]">
            S
          </div>
        </template>
        <template #right>
          <IconButton class="text-[20px]" name="i-mingcute-layout-rightbar-open-line"/>
        </template>
      </SiderButton>

      <div class="mb-4">
        <SiderButton title="搜索" icon="i-mingcute-search-2-line"/>
        <SiderButton title="设置" icon="i-mingcute-settings-5-line"/>
      </div>
      <ProductMenus/>
    </div>
  </div>
</template>
