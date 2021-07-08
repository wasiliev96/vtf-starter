<template>
  <div class="about">
    <h1>This is about page</h1>
    <hello-world msg="Hello Vue 3 + Vite + Tailwind CSS" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default defineComponent({
  name: 'About',
  components: {
    HelloWorld,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
