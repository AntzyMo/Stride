<script setup lang="ts">
  const siderCollapsed = ref(false)
</script>

<template>
  <div
    class="bg-siderBackground  border-r  px-1.5  py-2  w-[220px]"
    :class="{ hidden: siderCollapsed }"
  >
    <div class="relative">
      <SiderButton title="My'Stride" class="mb-1  pr-1">
        <template #icon>
          <div className="bg-buttonSelectedBackground text-[12px] text-buttonTextColor w-5 h-5 text-center leading-5  font-medium rounded-[5px]  mr-[2px]">
            S
          </div>
        </template>
        <template #right>
          <IconButton class="-translate-y-[50%] absolute right-0 text-[18px] top-[50%]" name="i-mingcute-layout-rightbar-open-line"/>
        </template>
      </SiderButton>

      <div class="mb-4">
        <SiderButton title="搜索" icon="i-mingcute-search-2-line"/>
        <SiderButton title="设置" icon="i-mingcute-settings-5-line"/>
      </div>

      <Calendar/>

      <ProductMenus/>
    </div>
  </div>
</template>
