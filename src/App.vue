<template>
  <div class="justify-center flex-1">
    <div class="container mx-auto">
      <component :is="this.$route.meta.layout || 'div'">
        <transition name="fade">
          <router-view />
        </transition>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
