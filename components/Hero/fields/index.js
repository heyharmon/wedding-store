const fields = {
  title: 'Hero editor',

  content: [
    {
      label: 'Pretitle',
      path: 'pretitle.content',
      name: 'TextField',
      // options: [],
    },
    {
      label: 'Title',
      path: 'title.content',
      name: 'TextField',
      // options: [],
    },
    {
      label: 'Subtitle',
      path: 'subtitle.content',
      name: 'TextField',
      // options: [],
    },
    {
      label: 'Buttons',
      path: 'buttons',
      name: 'ButtonRepeaterField',
      // options: [],
    },
    {
      label: 'Image',
      path: 'image.file',
      name: 'FileField',
      // options: [],
    },
    {
      label: 'Background image',
      path: 'background.file',
      name: 'FileField',
      // options: [],
    },
  ],
  styles: [
    {
      label: 'Title size',
      path: 'title.size',
      name: 'SelectButtonsField',
      options: [
        { value: '4xl', label: 'Small' },
        { value: '5xl', label: 'Default' },
        { value: '6xl', label: 'Large' },
        { value: '7xl', label: 'Huge' },
      ]
    },
    {
      label: 'Padding',
      path: 'padding',
      name: 'PaddingField',
    }
  ]
}

export { fields }