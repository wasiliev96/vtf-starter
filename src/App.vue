<template>
  <div class="justify-center flex-1">
    <div class="container pt-8 mx-auto">
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
