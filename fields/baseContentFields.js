const baseContentFields = {
    content: [
        {
            label: 'Alignment',
            path: 'content.alignment',
            options: [
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            ],
            name: 'SelectButtonsField',
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
            path: 'content.image',
            name: 'ImageField',
        },
    ],
    style: [
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
          label: 'Background',
          path: 'wrapper.background.image',
          name: 'ImageField',
        },
    ],    
}
  
export { baseContentFields }