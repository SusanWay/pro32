<script setup lang="ts">
import { useFilterStore } from '~/stores/filterStore'

const filterStore = useFilterStore()
</script>

<template>
  <div class="mt-4 flex md:grid md:grid-rows-3 gap-x-1 gap-y-2 2xl:flex">
    <Badge
      v-for="(item, index) in filterStore.types"
      :key="index" :text="item"
      :is-active="filterStore.selectedType === item"
      @click="filterStore.selectType(item)"
    />
  </div>
</template>

<style scoped>

</style>
