<script setup lang="ts">
interface Props {
  disabled?: boolean
  to?: string
}

const props = defineProps<Props>()

const component = computed(() => {
  if (props.to)
    return resolveComponent('NuxtLink')
  return 'button'
})
</script>

<template>
  <component :is="component" :to="props.to" :disabled="props.disabled" class="w-full p-2">
    <div>
      <p class="select-none text-center text-base">
        <slot />
      </p>
    </div>
  </component>
</template>

<style scoped>

</style>
