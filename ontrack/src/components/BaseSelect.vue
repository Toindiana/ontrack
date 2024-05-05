<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { validateSelectOptions } from '../validators'

// defineProps(['options', 'placeholder', 'selected'])

defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton><XMarkIcon class="h-8" /></BaseButton>
    <select class="bg0gray-100 text-2x1 w-full truncate rounded px-2 py-1">
      <option value="" selected disabled>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
