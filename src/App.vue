<template>
  <div class="justify-center flex-1 container p-3 mx-auto">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

<script setup lang="ts"></script>
