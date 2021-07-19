<template lang="pug">
header.flex.justify-between
  .header-branding
    h1.text-center.leading-3 This is default header
  .header-nav.flex.items-center
    main-navigation
</template>

<script setup lang='ts'>
import MainNavigation from './MainNavigation.vue'
</script>

<style scoped></style>
