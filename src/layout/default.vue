<template lang="pug">
.layout.flex.flex-col.h-full
  base-header
  main.flex-grow
    slot
  base-footer
</template>

<script setup lang='ts'>
import BaseFooter from '@/components/layout/default/BaseFooter.vue'
import BaseHeader from '@/components/layout/default/BaseHeader.vue'

import firebase from 'firebase'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'

const router = useRouter()
const authListener = firebase.auth().onAuthStateChanged(function (user) {
  if (!user && router.currentRoute.value.name !== 'Login') { // not logged in
    router.push('/login')
  }
})
onBeforeUnmount(() => {
  // clear up listener
  authListener()
})
</script>
