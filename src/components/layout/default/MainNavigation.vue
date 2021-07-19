<template lang="pug">
.dropdown.flex.justify-end.relative
  button.dropdown-toggler.w-8.h-8.flex.justify-center.items-center(ref='dropdownToggler' :class='{ active: isMenuActive }' @click='isMenuActive = true')
    dots-vertical-icon.h-5.w-5
  nav.transition-all.ease-in-out.transform.origin-top-right.translate-x-2.scale-90.dropdown-menu.invisible.opacity-0.absolute.top-0.right-0.p-3.bg-white.border.rounded(@click='isMenuActive = false')
    ul.flex.flex-col.gap-2
      li
        router-link.px-4.py-2.leading-5.text-gray-700(to='/') Home
      li
        router-link.px-4.py-2.leading-5.text-gray-700(to='/about') About

</template>

<script setup lang='ts'>
import { DotsVerticalIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

const isMenuActive = ref(false)
</script>

<style scoped lang='postcss'>
.dropdown-toggler {
  &:focus {
    color: var(--color-accent);
  }

  &.active + .dropdown-menu {
    opacity: 1;
    transform: translate(0) scale(1);
    visibility: visible;
  }
}
</style>
