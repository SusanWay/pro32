<script setup lang="ts">
import algrumImg from '~/assets/images/Algrum.png'
import ecoImg from '~/assets/images/Eco.png'

interface Props {
  id: number
  logo: string
  name: string
  phone: string
  website: string
  email: string
  status: string
  country: string
  city: string
  productType: string
  products: string[]
  partnerType: string[]
}

const props = defineProps<Props>()

const logoImg = computed(() => {
  return props.logo === 'ALGRUM' ? algrumImg : ecoImg
})
</script>

<template>
  <div class="flex w-full flex-col gap-6 border-b border-b-[#CCCCD1] pb-[42px] sm:flex-row md:gap-[42px]">
    <img :src="logoImg" alt="" class="mx-auto max-h-max max-w-max sm:mx-0">
    <div class="w-full">
      <h3 class="text-title-h3 font-extrabold text-grey">
        {{ name }}
      </h3>
      <div class="grid-cols mt-6 flex flex-wrap gap-3 text-[16px] leading-[22px] md:flex-nowrap md:gap-6">
        <nuxt-link :to="`tel:${phone}`">
          {{ phone }}
        </nuxt-link>
        <nuxt-link :to="`mailto:${email}`">
          {{ email }}
        </nuxt-link>
        <a :href="`https://${website}`" class="text-blue-light">
          {{ website }}
        </a>
      </div>
    </div>
    <Badge :text="status" :is-active="status === 'Premier'" class="max-h-max" :is-small="true" />
  </div>
</template>

<style scoped>

</style>