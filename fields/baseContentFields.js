const baseContentFields = [
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
]

export { baseContentFields }