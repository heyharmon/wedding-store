const baseWrapperFields = [
  {
    label: 'Theme',
    path: 'wrapper.theme',
    options: [
      { value: 'theme-1', label: 'Theme 1' },
      { value: 'theme-2', label: 'Theme 2' },
      { value: 'theme-3', label: 'Theme 3' },
    ],
    name: 'SelectButtonsField',
  },
  {
    label: 'Padding',
    path: 'wrapper.padding',
    name: 'PaddingField',
  },
  {
    label: 'Overlay',
    path: 'wrapper.background.overlay',
    name: 'SwitchField',
  },
  {
    label: 'Background',
    path: 'wrapper.background.image',
    name: 'ImageField',
  },
]
  
export { baseWrapperFields }