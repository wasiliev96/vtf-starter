<template>
  <header class="p-2 flex justify-between">
    <div class="header-branding">
      <h1 class="text-center">This is default header</h1>
    </div>
    <div class="header-nav flex items-center">
      <main-navigation />
      <button class="flex justify-center items-center p-3 hover:text-red-200 transition-colors">
        <dots-vertical-icon class="h-5 w-5" />
      </button>
    </div>
  </header>
</template>

<script>
import { DotsVerticalIcon } from '@heroicons/vue/outline'
import { defineComponent } from 'vue'
import MainNavigation from './MainNavigation.vue'
export default defineComponent({
  components: { MainNavigation, DotsVerticalIcon },
  name: 'DefaultHeader',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
