import { computed, provide } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import {
  resolveSidebarItems,
  sidebarItemsSymbol,
  resolveCatalog,
  catalogSymbol,
} from './composables'

import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client'

import type { DefaultThemeNormalPageFrontmatter } from '../types'

export function applyClientSetup() {
  // we need to access sidebar items in multiple components
  // so we make it global computed
  const themeLocale = useThemeLocaleData()
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()
  const sidebarItems = computed(() =>
    resolveSidebarItems(frontmatter.value, themeLocale.value)
  )
  provide(sidebarItemsSymbol, sidebarItems)

  const catalog = computed(() => resolveCatalog())

  provide(catalogSymbol, catalog)
}
