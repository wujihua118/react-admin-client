import { BaseType } from '@/types'

export type Comment = BaseType & {
  postId?: number
  parentId?: number
  name?: string
  email?: string
  site?: string
  avatar?: string
  content?: string
  html?: string
  url?: string
  userAgent?: string
  status?: number
  weight?: number
}