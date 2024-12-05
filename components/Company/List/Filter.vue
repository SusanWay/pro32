<script setup lang="ts">
import { useFilterStore } from '~/stores/filterStore'

const filterStore = useFilterStore()

const countryValue = ref('DEFAULT')
const countryCity = ref('DEFAULT')

const countySelect = reactive({
  placeholder: 'Выберите страну',
  selectedOption: countryValue,
  options: filterStore.country,
})

const citySelect = reactive({
  placeholder: 'Выберите город',
  selectedOption: filterStore.selectedCity,
  options: filterStore.city,
})

function setDefault() {
  filterStore.setDefaultFilters()
  countryValue.value = 'DEFAULT'
  countryCity.value = 'DEFAULT'
}
</script>

<template>
  <nav class="flex shrink-0 flex-col gap-5 border-b border-b-grey pb-6 md:grid md:grid-cols-3 md:gap-[30px] 2xl:flex 2xl:w-[368px] 2xl:flex-col 2xl:flex-wrap 2xl:border-b-0 2xl:pb-0">
    <div>
      <h4 class="text-title-h4 text-grey-light">
        Уточните адрес
      </h4>
      <div class="mt-[30px] grid grid-cols-1 gap-4">
        <Select v-bind="countySelect" v-model="countryValue" @update:selected="value => { filterStore.selectCountry(value) }" />
        <Select v-bind="citySelect" v-model="countryCity" @update:selected="value => { filterStore.selectCity(value) }" />
      </div>
    </div>
    <div>
      <h4 class="text-title-h4 text-grey-light">
        Выберите тип продукта
      </h4>
      <CompanyNavProductTypeHome />
    </div>
    <div>
      <h4 class="text-title-h4 text-grey-light">
        Выберите продукт
      </h4>
      <CompanyNavProductType />
    </div>
    <div class="md:col-span-3">
      <h4 class="text-title-h4 text-grey-light">
        Выберите продукт
      </h4>
      <CompanyNavProductTypePartners />
    </div>
    <div class="flex gap-2">
      <Button class="max-h-max rounded-[4px] border border-grey text-grey" @click="setDefault()">
        Очистить
      </Button>
      <Button class="max-h-max rounded-[4px] bg-blue-light text-white">
        Найти
      </Button>
    </div>
  </nav>
</template>

<style scoped>

</style>
