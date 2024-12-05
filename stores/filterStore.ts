import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filterStore', {
  state: () => ({
    country: ['Россия', 'Италия', 'Франция ', 'Испания', 'Нидерланды'],
    selectedCountry: 'DEFAULT',
    city: ['Москва', 'Санкт-Петербург', 'Новосибирск ', 'Воронеж', 'Липецк'],
    selectedCity: 'DEFAULT',
    isForHome: false,
    types: ['Антивирус', 'GetScreen', 'Passwork'],
    selectedType: null,
    partners: ['Партнеры Retail', 'Партнеры Corporate', 'Интернет-провайдеры', 'Online партнеры', 'Продажи партнерам', 'Education партнеры', 'MSP Партнеры'],
    selectedPartners: [],
  }),
  actions: {
    selectCountry(country: string) {
      this.selectedCountry = country
    },
    selectCity(city: string) {
      this.selectedCity = city
    },
    changeIsForHome() {
      this.isForHome = !this.isForHome
    },
    selectType(type: number) {
      if (this.selectedType === type)
        this.selectedType = null
      else
        this.selectedType = type
    },
    selectPartner(partner: number) {
      if (this.selectedPartners.includes(partner))
        this.selectedPartners = this.selectedPartners.filter(item => item !== partner)
      else
        this.selectedPartners.push(partner)
    },
    setDefaultFilters() {
      this.selectedCountry = 'DEFAULT'
      this.selectedCity = 'DEFAULT'
      this.isForHome = false
      this.selectedType = null
      this.selectedPartners = []
    },
  },
})
