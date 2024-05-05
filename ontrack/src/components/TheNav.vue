<script setup>
import { defineEmits } from 'vue'
import { isPageValid } from '../validators'
import { NAV_ITEMS } from '../constants'
import NavItem from './NavItem.vue'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        @click="emit('navigate', page)"
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': currentPage === page }"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
