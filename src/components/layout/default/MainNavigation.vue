<template>
  <nav class="border p-3">
    <ul class="flex gap-2">
      <li>
        <router-link class="border-r py-2 pl-2 pr-4 text-center" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="border-r py-2 pl-2 pr-4 text-center" to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainNavigation',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
