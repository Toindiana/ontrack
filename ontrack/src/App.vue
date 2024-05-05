<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivites from './pages/TheActivites.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITES, PAGE_PROGRESS } from './constants'
import { normalizeHash, generateTimelinsItems } from './functions'

const currentPage = ref(normalizeHash())
const timelineItems = generateTimelinsItems()

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivites v-show="currentPage === PAGE_ACTIVITES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
