const fields = {
  title: 'Hero editor',
  // wrapper: [
  //   background: {
      
  //   }
  // ],
  content: [
    {
      label: 'Justify',
      path: 'content.justify',
      options: [
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
      ],
      name: 'SelectButtonsField',
    },
    {
      label: 'Background',
      path: 'wrapper.background.image',
      name: 'ImageRepeaterField',
    },
    {
      label: 'Pretitle',
      path: 'content.pretitle.content',
      name: 'TextField',
    },
    {
      label: 'Title',
      path: 'content.title.content',
      name: 'TextField',
    },
    {
      label: 'Body',
      path: 'content.body.content',
      name: 'TextField',
    },
    {
      label: 'Buttons',
      path: 'content.buttons',
      name: 'ButtonRepeaterField',
    },
    {
      label: 'Image',
      path: 'content.images',
      name: 'ImageRepeaterField',
      options: {
        limit: 1
      },
    },
    // {
    //   label: 'Image',
    //   path: 'content.images[0].file',
    //   name: 'FileField',
    //   // options: [],
    // },
  ],
  // style: [
  //   {
  //     label: 'Title size',
  //     path: 'title.size',
  //     name: 'SelectButtonsField',
  //     options: [
  //       { value: '4xl', label: 'Small' },
  //       { value: '5xl', label: 'Default' },
  //       { value: '6xl', label: 'Large' },
  //       { value: '7xl', label: 'Huge' },
  //     ]
  //   },
  //   {
  //     label: 'Padding',
  //     path: 'padding',
  //     name: 'PaddingField',
  //     // options: [],
  //   },
  //   {
  //     label: 'Background overlay',
  //     path: 'background.overlay',
  //     // type: 'Boolean',
  //     name: 'SwitchField',
  //   },
  //   {
  //     label: 'Invert layout',
  //     path: 'invert',
  //     // type: 'Boolean',
  //     name: 'SwitchField',
  //   }
  // ]
}

export { fields }