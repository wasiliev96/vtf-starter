<template>
  <header class="flex justify-between">
    <div class="header-branding">
      <h1 class="text-center">This is default header</h1>
    </div>
    <div class="header-nav flex items-center">
      <main-navigation />
    </div>
  </header>
</template>

<script>
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
