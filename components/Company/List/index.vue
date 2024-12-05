<script setup lang="ts">
import { usePartnerStore } from '~/stores/partnersStore'
import { useFilterStore } from '~/stores/filterStore'

const filterStore = useFilterStore()
const partnerStore = usePartnerStore()

const filteredPartners = computed(() => {
  return partnerStore.partners
    .filter(item => filterStore.selectedCountry === item.country || filterStore.selectedCountry === 'DEFAULT')
    .filter(item => filterStore.selectedCity === item.city || filterStore.selectedCity === 'DEFAULT')
    .filter(item => filterStore.isForHome ? item.productType === 'Для дома' : item.productType === 'Для бизнеса')
    .filter(item => item.products.includes(filterStore.selectedType) || filterStore.selectedType === null)
    .filter(item => filterStore.selectedPartners.every(partner => item.partnerType.includes(partner)))
})
</script>

<template>
  <section class="flex w-full flex-col gap-[42px]">
    <CompanyCard v-for="(item) in filteredPartners" :key="item.id" v-bind="item" />
  </section>
</template>

<style scoped>

</style>
