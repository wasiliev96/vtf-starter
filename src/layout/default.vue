<template>
  <div class="text-center">Default layout</div>
  <div class="nav border-b flex gap-2 p-2">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultTemplate',
})
</script>

<style lang="postcss" scoped></style>
