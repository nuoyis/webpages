<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  round: {
    type: Boolean,
    required: true
  },
  block: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <var-button
      color="transparent"
      text
      :round="round"
      :block="block"
      text-color="#555"
  >
    <var-link
        type="primary"
        :href="url"
        target="_blank"
        underline="none"
        text-color="#555"
    >
      <slot name="nuoyis-url"></slot>
    </var-link>
  </var-button>
</template>

<style scoped>

</style>