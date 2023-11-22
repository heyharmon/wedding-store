export default [
  //////////////////////////////////
  // Homepage
  //////////////////////////////////
  {
    title: 'Home',
    slug: 'homepage',
    blocks: [
      {
        id: 'j4l2tnl',
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'kj2h345',
        group: 'Hero',
        name: 'Hero',
        data: {
          theme: null,
          
          // Content
          pretitle: {
            as: 'p',
            content: 'This is the pretitle',
            size: 'base',
          },
          title: {
            as: 'h1',
            content: 'The hero',
            size: '5xl',
          },
          subtitle: {
            as: 'p',
            content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
            size: 'xl',
          },
          buttons: [
            {
              label: 'Call to action',
              to: '/homepage',
            },
            {
              label: 'Learn more',
              to: '/page-1',
              variant: 'text',
            }
          ],
          image: {
            file: null,
            width: null,
            height: null,
          },
          invert: false,

          // Section
          background: {
            file: null,
            overlay: false,
          },
          padding: {
            paddingTop: '6xl',
            paddingBottom: '6xl',
          },
          // orientation: null,
        },
      },
      {
        id: '34lkj4',
        group: 'Hero',
        name: 'Hero',
        data: {
          theme: null,
          pretitle: {
            as: 'p',
            content: 'This is the pretitle',
            size: 'base',
          },
          title: {
            as: 'h1',
            content: 'The hero',
            size: '5xl',
          },
          subtitle: {
            as: 'p',
            content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
            size: 'xl',
          },
          buttons: [
            {
              label: 'Call to action',
              to: '/homepage',
            },
            {
              label: 'Learn more',
              to: '/page-1',
              variant: 'text',
            }
          ],
          image: {
            file: {
              id: 25,
              extension: 'image',
              name: 'alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg',
              path: 'files/ce7d5fb2cb97435410902044d96855c5.jpg',
              size: '1.51 MB',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            },
            width: null,
            height: null,
          },
          background: {
            file: {
              id: 25,
              extension: 'image',
              name: 'alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg',
              path: 'files/ce7d5fb2cb97435410902044d96855c5.jpg',
              size: '1.51 MB',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            },
            overlay: true,
          },
          padding: {
            paddingTop: '6xl',
            paddingBottom: '6xl',
          },
          invert: false,
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {
          image: {
            file: {
              id: 25,
              extension: 'image',
              name: 'alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg',
              path: 'files/ce7d5fb2cb97435410902044d96855c5.jpg',
              size: '1.51 MB',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            },
            width: null,
            height: null,
          },
        },
      },
      {
        id: 'aklkh23las',
        group: 'Navigation',
        name: 'NavFooter',
        data: {},
      },
    ]
  },

  //////////////////////////////////
  // Page 1
  //////////////////////////////////
  {
    title: 'Example page one',
    slug: 'features',
    blocks: [
      {
        id: 'j4l2tnl',
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'slsna4l4',
        group: 'Hero',
        name: 'Hero',
        data: {
          pretitle: {
            as: 'span',
            content: 'This is the pretitle',
            size: 'base',
          },
          title: {
            as: 'h1',
            content: 'Hello world.',
            size: '5xl',
          },
          subtitle: {
            as: 'p',
            content: 'The subtitle is here. Lorem ipsum dolar sit amit.',
            size: 'xl',
          },
          padding: {
            paddingTop: '6xl',
            paddingBottom: '6xl',
          },
          background: {
            overlay: true,
          }
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {
          image: {
            name: 'The image title',
            src: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
            extension: 'png',
            alt: 'The image alt',
            description: 'The image description',
            caption: 'The image caption',
          }
        },
      },
      // {
      //   id: 'akjh245r',
      //   group: 'Feature',
      //   name: 'FeatureWithTwoColGrid',
      //   data: {},
      // },
      // {
      //   id: 'aklkh23l45',
      //   group: 'Navigation',
      //   name: 'NavFooter',
      //   data: {},
      // },
    ]
  }
]