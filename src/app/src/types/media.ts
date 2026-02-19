import type { BaseItem } from './item'

export interface MediaConfig {
  external: boolean
}

export interface MediaItem extends BaseItem {
  [key: string]: unknown
}
