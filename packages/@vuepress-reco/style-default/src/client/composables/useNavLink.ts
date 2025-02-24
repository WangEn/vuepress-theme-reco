import type { NavLink } from '../../types'
import { useResolveRouteWithRedirect } from './useResolveRouteWithRedirect'

/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export const useNavLink = (item: string): NavLink => {
  const resolved = useResolveRouteWithRedirect(item)
  return {
    text: (resolved.meta.title || item) as string,
    link: resolved.name === '404' ? item : resolved.fullPath,
  }
}
