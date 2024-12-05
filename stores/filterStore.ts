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
    initializeFromLocalStorage() {
      const savedState = localStorage.getItem('filterStore')
      if (savedState) {
        const parsedState = JSON.parse(savedState)
        Object.assign(this, parsedState)
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('filterStore', JSON.stringify(this.$state))
    },
    selectCountry(country: string) {
      this.selectedCountry = country
      this.saveToLocalStorage()
    },
    selectCity(city: string) {
      this.selectedCity = city
      this.saveToLocalStorage()
    },
    changeIsForHome() {
      this.isForHome = !this.isForHome
      this.saveToLocalStorage()
    },
    selectType(type: number) {
      if (this.selectedType === type)
        this.selectedType = null
      else
        this.selectedType = type
      this.saveToLocalStorage()
    },
    selectPartner(partner: number) {
      if (this.selectedPartners.includes(partner))
        this.selectedPartners = this.selectedPartners.filter(item => item !== partner)
      else
        this.selectedPartners.push(partner)
      this.saveToLocalStorage()
    },
    setDefaultFilters() {
      this.selectedCountry = 'DEFAULT'
      this.selectedCity = 'DEFAULT'
      this.isForHome = false
      this.selectedType = null
      this.selectedPartners = []
      this.saveToLocalStorage()
    },
  },
})
