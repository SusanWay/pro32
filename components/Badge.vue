<script setup lang="ts">
interface Props {
  text: string
  isActive: boolean
  isSmall?: boolean
}
defineProps<Props>()
</script>

<template>
  <button class="rounded-[30px] px-4 py-2" :class="{ 'bg-grey text-white hover:bg-grey/80 hover:text-white': isActive, 'bg-grey-medium hover:bg-black/20 hover:text-black' : !isActive }">
    <p class="border-black" :class="{ 'text-sm': isSmall }">
      {{ text }}
    </p>
  </button>
</template>

<style scoped>

</style>
