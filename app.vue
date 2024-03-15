<script setup lang="ts">
  useHead({
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg',
        media: '(prefers-color-scheme: light)'
      }
    ]
  })
  useSeoMeta({
    title: 'Stride'
  })
</script>

<template>
  <NuxtPage/>
</template>
