export default [
  {
    id: 'slsnaasdf',
    group: 'Hero',
    name: 'Hero',
    data: {
      section: {
        theme: null,
        padding: {
          top: '6xl',
          bottom: '6xl',
        },
        background: {
          file: null,
          overlay: true
        }
      },
      content: {
        pretitle: {
          element: 'p',
          content: 'This is the pretitle',
          size: 'base',
        },
        title: {
          element: 'h1',
          content: 'Contact',
          size: '5xl',
        },
        body: {
          element: 'p',
          content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
          size: 'xl',
        },
        images: [
          {
            file: {
              name: 'The image title',
              src: 'https://placehold.co/1280x720/white/grey',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            },
            overlay: false,
            width: null,
            height: null,
          }
        ]
      },
    },
  },
  {
    id: 'akl24jadsf',
    group: 'Feature',
    name: 'Feature',
    data: {
      section: {
        theme: null,
        padding: {
          top: '6xl',
          bottom: '6xl',
        },
        background: {
          file: {
            name: 'The image title',
            src: '/images/gradient-purple-pink.jpg',
            alt: 'The image alt',
            description: 'The image description',
            caption: 'The image caption',
          },
          overlay: false
        }
      },
      content: {
        pretitle: {
          element: 'p',
          content: 'This is the pretitle',
          size: 'base',
        },
        title: {
          element: 'h2',
          content: 'The about feature',
        },
        body: {
          content: 'The body content is here. Lorem ipsum dolar sit amit.',
          size: 'xl',
        },
        buttons: [
          {
            label: 'Call to action',
            destination: '/homepage',
          },
          {
            label: 'Learn more',
            destination: '/page-1',
            variant: 'ghost',
          }
        ],
        images: [
          {
            file: {
              name: 'The image title',
              src: 'https://placehold.co/600x400/white/grey',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            },
            overlay: false,
            width: null,
            height: null,
          }
        ]
      },
    }
  },
]