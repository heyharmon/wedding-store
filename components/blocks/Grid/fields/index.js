import { baseContentFields } from '@/fields/baseContentFields'
import { baseWrapperFields } from '@/fields/baseWrapperFields'

const fields = {
  title: 'Grid editor',
  content: [
    ...baseContentFields,
  ],
  wrapper: [
    ...baseWrapperFields,
  ]
}

export { fields }