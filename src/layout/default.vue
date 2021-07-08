<template>
  <div class="layout flex flex-col h-full">
    <default-header />
    <slot />
    <default-footer />
  </div>
</template>

<script lang="ts">
import DefaultFooter from '@/components/layout/default/DefaultFooter.vue'
import DefaultHeader from '@/components/layout/default/DefaultHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultTemplate',
  components: {
    DefaultHeader,
    DefaultFooter,
  },
})
</script>
