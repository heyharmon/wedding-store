import { baseContentFields } from '@/fields/baseContentFields'
import { baseImageFields } from '@/fields/baseImageFields'
import { baseWrapperFields } from '@/fields/baseWrapperFields'

const fields = {
  title: 'Hero editor',
  content: [
    ...baseContentFields,
    ...baseImageFields,
  ],
  wrapper: [
    ...baseWrapperFields,
  ]
}

export { fields }