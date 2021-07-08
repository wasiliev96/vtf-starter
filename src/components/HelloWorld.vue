<template>
  <div class="container px-8 prose">
    <h1 class="title">{{ msg }}</h1>
    <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="increment">
      count is: {{ count }}
    </button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

    <p class="text-sm text-gray-700">vite-ts-tailwind-starter v{{ appVersion }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore, Mutation } from '@/store/index'

export default defineComponent({
  name: 'HelloWorld',
  components: {},
  props: {
    msg: String,
  },
  setup() {
    const store = useStore()
    const appVersion = store.state.version
    const count = computed(() => store.state.count)
    const increment = () => {
      store.commit(Mutation.INCREMENT, 1)
    }
    return {
      store,
      appVersion,
      count,
      increment,
    }
  },
})
</script>
