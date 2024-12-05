<script setup lang="ts">
import { useFilterStore } from '~/stores/filterStore'

const filterStore = useFilterStore()
</script>

<template>
  <div class="mt-4 flex md:grid md:grid-rows-2 gap-x-1 gap-y-2 2xl:flex">
    <Badge text="Для дома" :is-active="filterStore.isForHome" @click="filterStore.changeIsForHome()" />
    <Badge text="Для бизнеса" :is-active="!filterStore.isForHome" @click="filterStore.changeIsForHome()" />
  </div>
</template>

<style scoped>

</style>
