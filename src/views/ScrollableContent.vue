<template>
  <div ref="scrollElement" class="scrollable">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'ScrollableContent',
  data() {
    return {
      lastScrollPosition: -1
    }
  },
})
</script>

<style scoped>

</style>