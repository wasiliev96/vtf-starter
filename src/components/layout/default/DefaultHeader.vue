<template>
  <header class="p-2">
    <h1 class="text-center">This is default header</h1>
    <main-navigation />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainNavigation from './MainNavigation.vue'

export default defineComponent({
  components: { MainNavigation },
  name: 'DefaultHeader',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
