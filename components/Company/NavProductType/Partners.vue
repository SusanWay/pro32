<script setup lang="ts">
import { useFilterStore } from '~/stores/filterStore'

const filterStore = useFilterStore()
</script>

<template>
  <div class="mt-4 flex flex-wrap gap-x-1 gap-y-2 md:grid md:grid-cols-3 2xl:flex 2xl:flex-wrap text-sm md:text-base">
    <Badge
      v-for="(item, index) in filterStore.partners"
      :key="index" :text="item"
      :is-active="filterStore.selectedPartners.includes(item)"
      @click="filterStore.selectPartner(item)"
    />
  </div>
</template>

<style scoped>

</style>
