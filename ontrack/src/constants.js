import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITES = 'activites'
export const PAGE_PROGRESS = 'progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const MIDNIGHT_HOUR = 0
export const HOURS_IN_DAY = 24
