<template>
  <div class="dropdown flex justify-end relative">
    <button ref="dropdownToggler" class="dropdown-toggler w-8 h-8 flex justify-center items-center">
      <dots-vertical-icon class="h-5 w-5" />
    </button>

    <nav
      class="
        transition-all
        ease-in-out
        transform
        origin-top-right
        translate-x-2
        scale-90
        dropdown-menu
        invisible
        opacity-0
        absolute
        top-0
        right-0
        p-3
        bg-white
        border
        rounded
      "
    >
      <ul class="flex flex-col gap-2">
        <li>
          <router-link class="px-4 py-2 leading-5 text-gray-700" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="px-4 py-2 leading-5 text-gray-700" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { DotsVerticalIcon } from '@heroicons/vue/outline'

export default defineComponent({
  name: 'MainNavigation',
  components: {
    DotsVerticalIcon,
  },
  setup() {
    return {}
  },
  watch: {
    $route(to, from) {
      this.$refs.dropdownToggler.blur()
    },
  },
})
</script>

<style scoped lang="postcss">
.dropdown-toggler:focus {
  color: var(--color-accent);
  & + .dropdown-menu {
    opacity: 1;
    transform: translate(0) scale(1);
    visibility: visible;
  }
}
</style>
