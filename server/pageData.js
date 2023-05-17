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
        id: 'slsn4l4',
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
          background: {
            image: {
              name: 'The image title',
              src: 'https://tailwindui.com/img/beams-home@95.jpg',
              extension: 'png',
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
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {},
      },
      {
        id: 'aklkh23l45',
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
    slug: 'page-1',
    blocks: [
      {
        id: 'j4l2tnl',
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'slsn4l4',
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
      {
        id: 'akjh245r',
        group: 'Feature',
        name: 'FeatureWithTwoColGrid',
        data: {},
      },
      {
        id: 'nmva3e4r',
        group: 'Hero',
        name: 'HeroVertical',
        data: {
          theme: 'theme-2',
          title: 'Hello world. Enrich your online business.',
          subtitle: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat fcommodo. Elit sunt amet fugiat.',
          padding: {
            top: '6xl',
            bottom: '6xl',
          },
          image: {
            name: 'The image title',
            src: 'https://tailwindui.com/img/component-images/project-app-screenshot.png',
            extension: 'png',
            alt: 'The image alt',
            description: 'The image description',
            caption: 'The image caption',
          },
          background: {
            image: {
              name: 'The image title',
              src: 'https://tailwindui.com/img/beams-home@95.jpg',
              extension: 'png',
              alt: 'The image alt',
              description: 'The image description',
              caption: 'The image caption',
            },
          },
        },
      },
      {
        id: 'aklkh23l45',
        group: 'Navigation',
        name: 'NavFooter',
        data: {},
      },
    ]
  }
]