import { join } from 'pathe'
import { VIRTUAL_MEDIA_COLLECTION_NAME } from 'nuxt-studio/app/utils'

export function generateIdFromFsPath(fsPath: string) {
  return join(VIRTUAL_MEDIA_COLLECTION_NAME, fsPath)
}
