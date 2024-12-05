<script setup lang="ts">
interface Option {
  name: string
}
interface Props {
  placeholder: string
  options: Option[]
  selectedOption: string
}

interface Emits {
  (event: 'update:selected', value: string): void
  (event: 'update:modelValue', value: object): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const selectedValue = ref(props.selectedOption)

watch(() => props.selectedOption, (newValue) => {
  selectedValue.value = newValue
})
</script>

<template>
  <div class="relative">
    <select
      v-model="selectedValue"
      class="w-full appearance-none rounded-[4px] border border-black/50 py-[18px] pl-3 pr-8 text-black/50 focus:border-blue-light focus:outline-none focus:ring-2 focus:ring-blue-light"
      @change="[emit('update:selected', selectedValue), emit('update:modelValue', selectedValue)]"
    >
      <option value="DEFAULT" :selected="selectedValue === 'DEFAULT'">
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option === selectedValue"
      >
        {{ option }}
      </option>
    </select>
    <Icon name="Arrow" size="16" class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-light" />
  </div>
</template>

<style scoped>

</style>
