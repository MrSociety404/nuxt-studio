import type { BaseItem } from './item'

export interface MediaConfig {
  external: boolean
  maxFileSize: number
  allowedTypes: string[]
}

export interface MediaItem extends BaseItem {
  [key: string]: unknown
}

/**
 * Result returned by a successful OSS upload
 */
export interface ExternalMedia {
  /** The public URL of the uploaded file */
  url: string
  /** Alt text / description for the file */
  alt?: string
  /** Original filename */
  filename: string
  /** File MIME type */
  mimeType: string
  /** File size in bytes */
  size: number
  /** Additional metadata from the provider */
  metadata?: Record<string, unknown>
}

export interface ExternalMediaError {
  code: 'FILE_TOO_LARGE' | 'INVALID_TYPE' | 'UPLOAD_FAILED' | 'AUTH_REQUIRED'
  message: string
}

/**
 * Response from an OSS upload endpoint
 */
export interface ExternalUploadResponse {
  success: boolean,
  data?: ExternalMedia,
  error?: ExternalMediaError,
}
