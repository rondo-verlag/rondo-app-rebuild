<template>
  <a :href="uri" target="_blank"><slot></slot></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrowserLink',
  props: {
    uri: String
  }
})
</script>
