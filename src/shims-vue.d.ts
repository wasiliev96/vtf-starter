declare module '*.vue' {
  import { Component } from 'vue'
  const _default: Component
  export default _default
}

declare module '@heroicons/vue/outline/*' {
  const content: any
  export default content
}

declare const _APP_VERSION: string
